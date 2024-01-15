import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ConvertTileToNum, ConvertNumToTile, SortedTileArr } from '../utils/sortingMahjongTile'
import { FunctionalTileMap, FunctionalNumMap } from '../utils/FunctionalTileMap'
import GroupResultAsFunctional from '../utils/GroupResultAsFunctional'
import APITileMap from "../utils/APITileMap";
import { check7pairs, checkPlusAlpha7pairs}  from '../utils/check7Pairs+alpha'
import { check13Terminals, checkUnrelated} from '../utils/checkSpecialHand'


const displayTileDivResult = (tileArr, div) => {
	for (let i = 0; i < tileArr.length; i++) {
		var img = document.createElement("img");
		img.src = require("../assets/mahjong_tiles/" + tileArr[i] + ".png").default;
		img.style.width = "5rem";
		div.appendChild(img);
	}
	console.log(tileArr);
}

const displayResult = (tileArr) => {   
	
	let element = document.getElementById("display-hand");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	for (let i = 0; i < tileArr.length; i++) {
		var img = document.createElement('img');		
		img.src = require('../assets/mahjong_tiles/'+tileArr[i]+'.png').default;	
		img.style.width = '5rem';
		document.getElementById('display-hand').appendChild(img);   		
	}     
	console.log(tileArr);
}


const checkTileNumber = (tileArr) => {	

	var valid = false;
	if(tileArr.length == 13 || tileArr.length == 16)	 
		valid = true;
	else
		window.alert("The tile number should be 13 or 16.");
	
	return valid;
}

const convertFunctionalToTile = (numArr) => {
  //assume sorted
	console.log("Before " + numArr);
	for (var i = 0; i < numArr.length; i++) {
		if (numArr[i] > 60) {
			console.log(FunctionalNumMap[`${numArr[i]}`]);
			var tempArr = FunctionalNumMap[`${numArr[i]}`];
		for (var j = 0; j < tempArr.length; j++) {
        numArr[i] = tempArr;
		}
    } 
	else 
		numArr[i] = new Array(1).fill(numArr[i]);
  }
  console.log("After " + numArr);
  return numArr;
}

const calAllPossibleCase = (numArr) => {
  var totalNumArr = new Array(1);
  var tempNumArr;
  for (var i = 0; i < numArr.length; i++) {
    tempNumArr = new Array(totalNumArr.length * numArr[i].length);
    for (var j = 0; j < totalNumArr.length; j++) {
      for (var k = 0; k < numArr[i].length; k++) {
        tempNumArr[j * numArr[i].length + k] = new Array();
        if (i !== 0)
          tempNumArr[j * numArr[i].length + k] = totalNumArr[j].slice();

        tempNumArr[j * numArr[i].length + k].push(numArr[i][k]);
      }
    }
    totalNumArr = tempNumArr;
  }
  console.log(totalNumArr);
  for (var a = 0; a < totalNumArr.length; a++)
    totalNumArr[a].sort(function (x, y) {
      return x - y;
    });
  console.log(totalNumArr);
  return totalNumArr;
}

const displayResult7pair = (tileArr, possibleNumArr, repeatedPairValid) => {
	var result = [];
	var str;
	var coloredStr;
	var resultNumArr = possibleNumArr;
	if (tileArr.length % 2 == 1) {
		str = "七對子";
		for (var i = 0; i < resultNumArr.length; i++) {
			if (result.length === 0)
				result = check7pairs(resultNumArr[i], repeatedPairValid);
			else
				result = [...new Set([...result, ...check7pairs(resultNumArr[i], repeatedPairValid),]), ];
      //result = result.concat(check7pairs(resultNumArr[i], repeatedPairValid));
		}
		coloredStr = str.fontcolor("purple");
	} 
	else {
		str = "嚦咕嚦咕";
		for (var i = 0; i < resultNumArr.length; i++) {
			if (result.length === 0)
				result = checkPlusAlpha7pairs(resultNumArr[i], repeatedPairValid);
			else
      //remove duplicate results by unique set
        result = [...new Set([...result,...checkPlusAlpha7pairs(resultNumArr[i], repeatedPairValid), ]),];
		}
    //result = checkPlusAlpha7pairs(tileArr);
		coloredStr = str.fontcolor("paleblue");
	}
	console.log(result);
	result = GroupResultAsFunctional(result);
	result = ConvertNumToTile(result);
	console.log(result);
	var wordDiv = document.getElementById("seven-pair-text");
	wordDiv.innerHTML += coloredStr;
	var ResultDiv = document.getElementById("seven-pair-result");

	displayTileDivResult(result, ResultDiv);
}

const displayResult13Terminals = (tileArr, possibleNumArr) => {   
	var result = [];
	var str;
	var coloredStr;
	var resultNumArr = possibleNumArr;
	str = "十三么";
	for (var i = 0; i < resultNumArr.length; i++) {
		if (result.length === 0) 
			result = check13Terminals(resultNumArr[i]);
		else
			result = [...new Set([...result, ...check13Terminals(resultNumArr[i])])];
		//result = result.concat(check7pairs(resultNumArr[i], repeatedPairValid));
	}
	coloredStr = str.fontcolor("blue");

	console.log(result);
	result = GroupResultAsFunctional(result);
	result.sort(function (a, b) {
		return a - b;
	});
	result = ConvertNumToTile(result);
	var wordDiv = document.getElementById("thirteen-terminal-text");
	wordDiv.innerHTML += coloredStr;
	var ResultDiv = document.getElementById("thirteen-terminal-result");
	displayTileDivResult(result, ResultDiv);
}

const displayResultUnrelated = (tileArr, possibleNumArr) => {
	var result = [];
	var str;
	var coloredStr;
	var resultNumArr = possibleNumArr;
	if (tileArr.length === 13) 
		str = "十三不搭";
	else if (tileArr.length === 16) 
		str = "十六不搭";
	else 
		str = "不搭";
	for (var i = 0; i < resultNumArr.length; i++) {
		if (result.length === 0) 
			result = checkUnrelated(resultNumArr[i]);
		else 
			result = [...new Set([...result, ...checkUnrelated(resultNumArr[i])])];
		//result = result.concat(check7pairs(resultNumArr[i], repeatedPairValid));
	}
	coloredStr = str.fontcolor("yellow");

	console.log(result);
	result = GroupResultAsFunctional(result);
	result.sort(function (a, b) {
		return a - b;
	});
	result = ConvertNumToTile(result);
	var wordDiv = document.getElementById("unrelated-text");
	wordDiv.innerHTML += coloredStr;
	var ResultDiv = document.getElementById("unrelated-result");
	displayTileDivResult(result, ResultDiv);
}

const convertTileArr_to_API = (tileArr) => {
  var encodedStr = "/?";
  for (var i = 0; i < tileArr.length; i++) {
    encodedStr = encodedStr.concat("input=");
    encodedStr = encodedStr.concat(APITileMap.get(tileArr[i]));
    encodedStr = encodedStr.concat("&");
  }
  encodedStr = encodedStr.slice(0, -1); //remove last '&'

  return encodedStr;
};


const TestingResultPage = props => {
	var tileArr = SortedTileArr(props.location.state.tileArr);
	var tileKindArr = props.location.state.tileKindArr;
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	console.log(tileArr);
	console.log(tileKindArr);
	
	const getResultAPI = async (tileArr) => {
		try {
			const converted = convertTileArr_to_API(tileArr);
			const api_url = "https://blkscales.pythonanywhere.com";
			const response = await fetch(api_url + converted);
			const json = await response.json();
			setData(json);
			console.log(tileArr);
			console.log(converted);
			console.log(json);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}
	
	 useEffect(() => {	
		getResultAPI(tileArr);
		displayResult(tileArr);
		checkTileNumber(tileArr);
		var numArr = ConvertTileToNum(tileArr);
		console.log(numArr);
		numArr = convertFunctionalToTile(numArr);
		var allPossibleNumArr = calAllPossibleCase(numArr);
		displayResult7pair(tileArr, allPossibleNumArr, true);
		displayResult13Terminals(tileArr, allPossibleNumArr);
		displayResultUnrelated(tileArr, allPossibleNumArr);
    }, [])
	
	window.onload = displayResult(tileArr);
    return (
        <div className='Testingpage'>
            <div className='testing-menu'>
                <div className='testing-column'>
					<p id='Display-Message'> Your Hand :</p>
					<div className='testing-row'>
						<div id="display-hand" ></div>						
					</div>	
					<p id='seven-pair-text'> Results on 七對子/嚦咕嚦咕 : </p>
					<div id="seven-pair-result" ></div>	
					<p id='thirteen-terminal-text'> Results on 十三么: </p>
					<div id="thirteen-terminal-result" ></div>
					<p id="unrelated-text"> Results on 十三/十六不搭: </p>
					<div id="unrelated-result"></div>
					<Link to={`/testing_input`}><button className="game-button purple" >QUIT</button></Link>
                </div>
            </div>
        </div>
    )
}


export default TestingResultPage
