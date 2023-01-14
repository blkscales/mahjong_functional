import TileMap from './MahjongTilesMap'
import mergeTile from './mergeResult'
import countTile from './countTile'


const pairUpCounting = (countTileArr, idleTiles) => {
	
	var resultArr = [] ;
	
	resultArr[0] =  countTileArr[51] - idleTiles[1] ; //pin
	if(resultArr[0] > 0)
		resultArr[0] %= 2;
	
	resultArr[1]= countTileArr[52] - idleTiles[2] ; //sou
	if(resultArr[1] > 0)
		resultArr[1] %= 2;
	
	resultArr[2] = countTileArr[53] - idleTiles[3] ; //man
	if(resultArr[2] > 0)
		resultArr[2] %= 2;
	
	resultArr[3] = countTileArr[54] - Math.abs(resultArr[0]) - Math.abs(resultArr[1]) - Math.abs(resultArr[2]); //PSM
	if(resultArr[3] > 0)
		resultArr[3] %= 2;
	
	resultArr[4] = countTileArr[55] - countTileArr[41] - countTileArr[42] - countTileArr[43] - countTileArr[44]  ; //wind
	if(resultArr[4] > 0)
		resultArr[4] %= 2;
	
	resultArr[5] = countTileArr[56] - countTileArr[45] - countTileArr[46] - countTileArr[47]  ; //arrow
	if(resultArr[5] > 0)
		resultArr[5] %= 2;
	
	resultArr[6] =  countTileArr[57] - Math.abs(resultArr[4])  - Math.abs(resultArr[5]) ; //AW
	if(resultArr[6] > 0)
		resultArr[6] %= 2;
	
	resultArr[7] = countTileArr[58] - Math.abs(resultArr[3]) - Math.abs(resultArr[6])  ; //all
	
	return resultArr;

}


export const checkPlusAlpha7pairs = (arr) => {
	
	var resultArr = [] ; 
	
	var countTileArr = countTile(arr);
	var calculateArr = [];
	//remove redandant tiles ,not for functional tiles
	for(var i = 0; i < 48; i++)
		calculateArr[i] = countTileArr[i] % 2;
	for(var i = 48; i < 59; i++)
		calculateArr[i] = countTileArr[i] ;
	
	var idleTiles = [];
	//initialize
	for (var i = 0; i < 6; i++) 
		idleTiles[i] = 0;
	for(var i = 0; i < calculateArr.length; i++)
		idleTiles[Math.floor(i/10)] += calculateArr[i];
	
	var pairUpResult = pairUpCounting(calculateArr, idleTiles);
	var pin = pairUpResult[0], sou = pairUpResult[1], man = pairUpResult[2], PSM = pairUpResult[3], wind = pairUpResult[4], arrow = pairUpResult[5], WA = pairUpResult[6], ALL = pairUpResult[7];
	
	console.log(countTileArr);
	console.log(ALL);
	

	for(var i = 0; i < 48; i++)
	{
		var removeCounter = 0;
		var removed3Arr = [];
		//use all tiles that are NOT functional
		if(countTileArr[i] > 2) 
		{
			for(var j = 0; j < arr.length; j++)
			{
				if( i == TileMap.get(arr[j]) && removeCounter < 3 )
					removeCounter++;
				else
					removed3Arr[j] = arr[j];
			}

		}
		else
		{ 
			if( i > 10 && i < 20) //pin case
			{
				if( countTileArr[i] + countTileArr[51] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 51 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}					
				}
				else if( countTileArr[i] + countTileArr[54] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 54 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}
				
			}
			else if( i > 20 && i < 30) //sou case
			{
				if( countTileArr[i] + countTileArr[52] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 52 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}					
				}
				else if( countTileArr[i] + countTileArr[54] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 54 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}
					
			}
			else if( i > 30 && i < 40) //man case
			{
				if( countTileArr[i] + countTileArr[53] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 53 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}
				else if( countTileArr[i] + countTileArr[54] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 54 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}
			}
			else if( i > 40 && i < 45) //wind case
			{
				if( countTileArr[i] + countTileArr[55] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 55 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}
				else if( countTileArr[i] + countTileArr[57] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 57 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}	
			}
			else if( i > 44 && i < 48) //arrow case
			{
				if( countTileArr[i] + countTileArr[56] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 56 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}
				else if( countTileArr[i] + countTileArr[57] > 2)
				{
					for(var j = 0; j < arr.length; j++)
					{
						if( i == TileMap.get(arr[j]) && removeCounter < 3 )
							removeCounter++;
						else if( TileMap.get(arr[j]) == 57 && removeCounter < 3 )
							removeCounter++;
						else
							removed3Arr[j] = arr[j];
					}
				}	
			}
		}
		var removedResult = removed3Arr.filter(function(e){return e.length > 0;});
		//console.log(removedResult);
		var appendResult = check7pairs(removedResult);
		//console.log(appendResult);
		var mergeResult = appendResult.concat(resultArr); 
		//console.log(mergeResult);
		resultArr = mergeResult;
		//console.log(resultArr);	
	}
	
	
	if(ALL > 0) 
		resultArr.push("Functional_Joker");
	else if(ALL == 0)
	{
		if(PSM == 1 || (countTileArr[54] - Math.abs(countTileArr[51] - idleTiles[1]) - Math.abs(countTileArr[52] - idleTiles[2]) - Math.abs(countTileArr[53] - idleTiles[3])) > 0 )
			resultArr.push("Functional_PSM");		
		else 
		{
			if(pin == 1 || (countTileArr[51] - idleTiles[1]) > 0 )
				resultArr.push("Functional_pin");
			else 
			{				
				for(var i  = 11; i <= 19 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] > 0)
							resultArr.push(key);
			}
			if(sou == 1 || (countTileArr[52] - idleTiles[2]) > 0 )
				resultArr.push("Functional_sou");
			else 
			{				
				for(var i  = 21; i <= 29 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] > 0)
							resultArr.push(key);
			}
			if(man == 1 || (countTileArr[53] - idleTiles[3]) > 0 )
				resultArr.push("Functional_man");
			else 
			{				
				for(var i  = 31; i <= 39 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] > 0)
							resultArr.push(key);
			}
		}
		if(WA == 1 || (countTileArr[57] - Math.abs(countTileArr[55] - countTileArr[41] - countTileArr[42] - countTileArr[43] - countTileArr[44]) 
			                            - Math.abs(countTileArr[56] - countTileArr[45] - countTileArr[46] - countTileArr[47])) > 0)
			resultArr.push("Functional_AW");
		else 
		{
			if(wind == 1 || (countTileArr[55] - countTileArr[41] - countTileArr[42] - countTileArr[43] - countTileArr[44]) > 0 )
				resultArr.push("Functional_wind");
			else 
			{				
				for(var i  = 41; i <= 44 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] > 0)
							resultArr.push(key);
			}
			if(arrow == 1 || (countTileArr[56] - countTileArr[45] - countTileArr[46] - countTileArr[47] ) > 0 )
				resultArr.push("Functional_arrow");
			else 
			{				
				for(var i  = 45; i <= 47 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] > 0)
							resultArr.push(key);
			}
		}			
	}
	//else 
	//	return [];
	
	resultArr = mergeTile(resultArr);
	
	return resultArr;
}

//assume the arr is sorted
export const check7pairs = (arr) => {
	
    var countTileArr = countTile(arr);

	//remove redandant tiles ,not for functional tiles
	for(var i = 0; i < 48; i++)
		countTileArr[i]%=2;
	
	var idleTiles = [];
	//initialize
	for (var i = 0; i < 6; i++) 
		idleTiles[i] = 0;
	for(var i = 0; i < countTileArr.length; i++)
		idleTiles[Math.floor(i/10)] += countTileArr[i];
	
	var pairUpResult = pairUpCounting(countTileArr, idleTiles);
	var pin = pairUpResult[0], sou = pairUpResult[1], man = pairUpResult[2], PSM = pairUpResult[3], wind = pairUpResult[4], arrow = pairUpResult[5], WA = pairUpResult[6], ALL = pairUpResult[7];
	
	//console.log(countTileArr);
	//console.log(idleTiles);
	//console.log(ALL);
	
	var resultArr = [] ;
	
	if(ALL > 0) 
		resultArr.push("Functional_Joker");
	else if(ALL == -1)
	{
		if(PSM == 1)
			resultArr.push("Functional_PSM");		
		else if(PSM != 0)
		{
			if(pin == 1)
				resultArr.push("Functional_pin");
			else if(pin != 0)
			{				
				for(var i  = 11; i <= 19 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] == 1)
							resultArr.push(key);
			}
			if(sou == 1)
				resultArr.push("Functional_sou");
			else if(sou != 0)
			{				
				for(var i  = 21; i <= 29 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] == 1)
							resultArr.push(key);
			}
			if(man == 1)
				resultArr.push("Functional_man");
			else if(man != 0)
			{				
				for(var i  = 31; i <= 39 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] == 1)
							resultArr.push(key);
			}
		}
		if(WA == 1)
			resultArr.push("Functional_AW");
		else if(WA != 0)
		{
			if(wind == 1)
				resultArr.push("Functional_wind");
			else if(wind != 0)
			{				
				for(var i  = 41; i <= 44 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] == 1)
							resultArr.push(key);
			}
			if(arrow == 1)
				resultArr.push("Functional_arrow");
			else if(arrow != 0)
			{				
				for(var i  = 45; i <= 47 ; i++)
					for (const [key, value] of TileMap) 
						if(i == value && countTileArr[i] == 1)
							resultArr.push(key);
			}
		}	
		resultArr = mergeTile(resultArr);
	}
	else 
		return [];
	
	return resultArr;
}

export default { check7pairs, checkPlusAlpha7pairs}