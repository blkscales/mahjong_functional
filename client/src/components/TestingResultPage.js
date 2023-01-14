import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SortedTileArr from '../utils/sortingMahjongTile'
import { check7pairs, checkPlusAlpha7pairs}  from '../utils/check7Pairs+alpha'
import { check13Terminals, checkUnrelated} from '../utils/checkSpecialHand'

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

const displayResult7pair = (tileArr) => {   
	
	var result = [] ;	
	var str;
	var coloredStr ;
	if(tileArr.length % 2 == 1)
	{
		str = '七對子';
		result = check7pairs(tileArr);
		coloredStr = str.fontcolor("purple");
	}
	else
	{
		str = '嚦咕嚦咕';
		result = checkPlusAlpha7pairs(tileArr);
		coloredStr = str.fontcolor("paleblue");
	}		
	result = SortedTileArr(result);
	console.log(result);		
    var ResultDiv = document.getElementById('seven-pair-text');
	ResultDiv.innerHTML += coloredStr;

	
	for (let i = 0; i < result.length; i++) {
		var img = document.createElement('img');		
		img.src = require('../assets/mahjong_tiles/'+result[i]+'.png').default;	
		img.style.width = '5rem';
		document.getElementById('seven-pair-result').appendChild(img);   		
	}     
	console.log(tileArr);
}

const displayResult13Terminals = (tileArr) => {   
	
	var result = [] ;	
	var str;
	var coloredStr ;
	str = '十三么';
	result = check13Terminals(tileArr);
	coloredStr = str.fontcolor("white");
	
	
	result = SortedTileArr(result);
	console.log(result);		
    var ResultDiv = document.getElementById('thirteen-terminal-text');
	ResultDiv.innerHTML += coloredStr;

	
	for (let i = 0; i < result.length; i++) {
		var img = document.createElement('img');		
		img.src = require('../assets/mahjong_tiles/'+result[i]+'.png').default;	
		img.style.width = '5rem';
		document.getElementById('thirteen-terminal-result').appendChild(img);   		
	}     
	console.log(tileArr);
}


const TestingResultPage = props => {
	var tileArr = SortedTileArr(props.location.state);
	console.log(tileArr);
	
	 useEffect(() => {
		displayResult(tileArr);
		checkTileNumber(tileArr);
		displayResult7pair(tileArr);
		displayResult13Terminals(tileArr);
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
					<Link to={`/testing_input`}><button className="game-button purple" >QUIT</button></Link>
                </div>
            </div>
        </div>
    )
}


export default TestingResultPage
