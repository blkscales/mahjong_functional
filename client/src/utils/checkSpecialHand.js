import TileMap from './MahjongTilesMap'
import mergeTile from './mergeResult'
import countTile from './countTile'
import { checkNormalSetValidty, checkNormalSet} from './checkNormalHand'

export const checkUnrelated = (arr) => {
	
	var resultArr;
	
	return resultArr;
}

//assume the arr is sorted
//working on , success on count = 12, need work on = 13
export const check13Terminals = (arr) => {
		
	if(arr.length != 13 && arr.length != 16)
		return [];
		
	var resultArr = [];	
    var countTileArr = countTile(arr);
	var TerminalCountArr = [], RemainTileArr = []; // countArr for terminal part and tileArr for normal part but no functional tiles
	var functionalReaminArr = [];
	
	
	// Handle the 'non-Word' tiles
	var pos = 0, pair = false;
	for(var i = 0; i < 48; i++)
	{
		var NeedRemove = 0; //terminal
		if ([11,19,21,29,31,39,41,42,43,44,45,46,47].indexOf(i) > -1)
		{
			if(countTileArr[i] > 1)
				pair = true;
			if(countTileArr[i] > 0)
				TerminalCountArr[pos] = 1;
			else
				TerminalCountArr[pos] = 0;
			NeedRemove = TerminalCountArr[pos];
			pos++;
		}			
		if(countTileArr[i] > 0)
		{			
			for(var j = 0; j < (countTileArr[i]-NeedRemove) ; j++)
				for (const [key, value] of TileMap) 
					if(i == value)
						RemainTileArr.push(key);
		}
		
	}

	
	console.log(functionalReaminArr);
	if(RemainTileArr.length > 3)
		return [];
	
	var TerminalCount = 0;
	var waitPin = false;
	var waitSou = false;
	var waitMan = false;
	var waitWind = false;
	var waitArrow = false; 
	
	//TerminalCountArr must be <= 1 		
	
	//pin
	functionalReaminArr[0] = Math.max(countTileArr[51] - (2 - TerminalCountArr[0] - TerminalCountArr[1]) ,0) ;
	if(TerminalCountArr[0] + TerminalCountArr[1] + countTileArr[51] > 1)
	{
		if(TerminalCountArr[0] + TerminalCountArr[1] + countTileArr[51] > 2)
			pair = true;
		TerminalCount += 2;
	}
	else
	{
		TerminalCount += (TerminalCountArr[0] + TerminalCountArr[1] + countTileArr[51]);
		waitPin = true;		
	}
	
	//sou
	functionalReaminArr[1] = Math.max(countTileArr[52] - (2 - TerminalCountArr[2] - TerminalCountArr[3]) ,0) ;
	if(TerminalCountArr[2] + TerminalCountArr[3] + countTileArr[52] > 1)
	{
		if(TerminalCountArr[2] + TerminalCountArr[3] + countTileArr[52] > 2)
			pair = true;
		TerminalCount += 2;
	}
	else
	{
		TerminalCount += (TerminalCountArr[2] + TerminalCountArr[3] + countTileArr[52]);	
		waitSou = true;		
	}
	
	//man
	functionalReaminArr[2] = Math.max(countTileArr[53] - (2 - TerminalCountArr[4] - TerminalCountArr[5]) ,0) ;	
	if(TerminalCountArr[4] + TerminalCountArr[5] + countTileArr[53] > 1)
	{
		if(TerminalCountArr[4] + TerminalCountArr[5] + countTileArr[53] > 2)
			pair = true;
		TerminalCount += 2;
	}
	else
	{
		TerminalCount += (TerminalCountArr[4] + TerminalCountArr[5] + countTileArr[53]);	
		waitMan = true;		
	}
	
	// PSM 
	functionalReaminArr[3] = Math.max((countTileArr[54] - (6 - TerminalCount)) ,0) ;
	if(TerminalCount + countTileArr[54] > 6)
		pair = true;
	if(TerminalCount < 6)
	{
		if(TerminalCount + countTileArr[54] > 5)
		{
			TerminalCount = 6;
			waitPin = false;
			waitSou = false;
			waitMan = false;			
		}
		else
		{
			TerminalCount += countTileArr[54];
		}
	}
	
	
	var wordCount = 0;
	
	//wind
	functionalReaminArr[4] = Math.max(countTileArr[55] - (4 - TerminalCountArr[6] - TerminalCountArr[7] - TerminalCountArr[8] - TerminalCountArr[9]) ,0) ;	
	if(TerminalCountArr[6] + TerminalCountArr[7] + TerminalCountArr[8] + TerminalCountArr[9] + countTileArr[55] > 3)
	{
		if(TerminalCountArr[6] + TerminalCountArr[7] + TerminalCountArr[8] + TerminalCountArr[9] + countTileArr[55] > 4)
			pair = true;
		TerminalCount += 4;
		wordCount += 4;
	}
	else
	{
		TerminalCount += (TerminalCountArr[6] + TerminalCountArr[7] + TerminalCountArr[8] + TerminalCountArr[9] + countTileArr[55]);
		wordCount += (TerminalCountArr[6] + TerminalCountArr[7] + TerminalCountArr[8] + TerminalCountArr[9] + countTileArr[55]);
		waitWind = true;
	}
	
	//arrow
	functionalReaminArr[5] = Math.max(countTileArr[56] - (3 - TerminalCountArr[10] - TerminalCountArr[11] - TerminalCountArr[12]) ,0) ;	
	if(TerminalCountArr[10] + TerminalCountArr[11] + TerminalCountArr[12] + countTileArr[56] > 2)
	{
		if(TerminalCountArr[10] + TerminalCountArr[11] + TerminalCountArr[12] + countTileArr[56] > 3)
			pair = true;
		TerminalCount += 3;
		wordCount += 3;
	}
	else
	{
		TerminalCount += (TerminalCountArr[10] + TerminalCountArr[11] + TerminalCountArr[12] + countTileArr[56]);
		wordCount += (TerminalCountArr[10] + TerminalCountArr[11] + TerminalCountArr[12] + countTileArr[56]);
		waitArrow = true;
	}

	//AW
	functionalReaminArr[6] = Math.max((countTileArr[57] - (7 - wordCount)) ,0) ;
	if(wordCount < 7)
	{
		if(wordCount + countTileArr[57] > 6)
		{
			if(wordCount + countTileArr[57] > 7)
				pair = true;
			TerminalCount += (7-wordCount);
			wordCount = 7;
			var waitWind = false;
			var waitArrow = false;			
		}
		else
		{
			TerminalCount += countTileArr[57];
			wordCount += countTileArr[57];
		}
	}	
	
	//All
	functionalReaminArr[7] = Math.max(countTileArr[58] - (13 - TerminalCount) ,0) ;	
	if(TerminalCount < 13)
	{
		if(TerminalCount + countTileArr[58] > 12)
		{
			if(TerminalCount + countTileArr[58] > 13)
				pair = true;
			TerminalCount = 13;
		}
		else
			TerminalCount += countTileArr[58];
	}
	
	console.log(functionalReaminArr);
	console.log(TerminalCount);
	var RemainTileWaitArr = [];
	var Normal_Part_Valid = false;
	if(arr.length == 13)
		Normal_Part_Valid = true;
	else if(arr.length == 16)
		Normal_Part_Valid = checkNormalSetValidty(RemainTileArr, functionalReaminArr);
	else
		RemainTileWaitArr = checkNormalSet(RemainTileArr) ;
	
	console.log(Normal_Part_Valid);
	
	if(TerminalCount < 12)
		return [];
	else if(TerminalCount == 12)
	{
		if(arr.length == 13 && pair)
		{
			if(countTileArr[11] == 0 && waitPin)
				resultArr.push("1pin");
			if(countTileArr[19] == 0 && waitPin)
				resultArr.push("9pin");
			if(countTileArr[21] == 0 && waitSou)
				resultArr.push("1sou");
			if(countTileArr[29] == 0 && waitSou)
				resultArr.push("9sou");
			if(countTileArr[31] == 0 && waitMan)
				resultArr.push("1man");
			if(countTileArr[39] == 0 && waitMan)
				resultArr.push("9man");
			if(countTileArr[41] == 0 && waitWind)
				resultArr.push("Wind_east");
			if(countTileArr[42] == 0 && waitWind)
				resultArr.push("Wind_south");
			if(countTileArr[43] == 0 && waitWind)
				resultArr.push("Wind_west");
			if(countTileArr[44] == 0 && waitWind)
				resultArr.push("Wind_north");
			if(countTileArr[45] == 0 && waitArrow)
				resultArr.push("Arrow_RedDragon");
			if(countTileArr[46] == 0 && waitArrow)
				resultArr.push("Arrow_GreenDragon");
			if(countTileArr[47] == 0 && waitArrow)
				resultArr.push("Arrow_WhiteDragon");
		}
	}
	else
	{
		if(Normal_Part_Valid)
		{
			resultArr.push("1pin");
			resultArr.push("9pin");
			resultArr.push("1sou");
			resultArr.push("9sou");
			resultArr.push("1man");
			resultArr.push("9man");
			resultArr.push("Functional_AW");
		}
		
	}

	console.log(TerminalCountArr);
	console.log(RemainTileArr);
	//console.log(TerminalCount);
	//console.log(wordCount);
	
	//Not yet finish on arr.length = 16
	for(var i=0;i<RemainTileWaitArr.length;i++)
		resultArr.push(RemainTileWaitArr[i]);
	
	resultArr = mergeTile(resultArr);
	return resultArr;
}

export default { check13Terminals, checkUnrelated}