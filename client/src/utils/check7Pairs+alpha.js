import TileMap from './MahjongTilesMap'
import mergeTile from './mergeResult'
import countTile from './countTile'
import checkFunctionalExist from './checkFunctionalExist'


export const checkPlusAlpha7pairs = (arr) => {
	console.log(arr);
	console.log(checkFunctionalExist(arr));
	if(checkFunctionalExist(arr))
		return [];
	var countTileArr = countTile(arr);
	console.log(countTileArr);
	var remainChecker = 0;
	var idleTile = -1;
	for(var i = 0; i <= 48; i++)
	{
		switch(countTileArr[i]){
			case 0: 
				break;
			case 1: 
				remainChecker++;
				idleTile = i;
				break;
			case 2:
				break;
			case 3:
				remainChecker++;
				break;
			case 4:
				break;
			default: 
				return [];
		}
	}
	var result = [];
	//console.log([...TileMap.entries()].filter(({ 1: v }) => v === idleTile).map(([k]) => k));
	console.log(remainChecker);
		if(remainChecker == 2)
			result = new Array(1).fill(idleTile);
		else if(remainChecker == 0)
			result = [...new Set(arr)];

		return result;
}

//assume the arr is sorted
export const check7pairs = (arr , repeatedPairValid) => {
	console.log(arr);
	console.log(checkFunctionalExist(arr));
	if(checkFunctionalExist(arr))
		return [];
    var countTileArr = countTile(arr);
	console.log(countTileArr);
	if(repeatedPairValid === false)
		for(var i = 0; i <= 48; i++)
			if(countTileArr[i]>2)
				return [];
	
	//only 1 remain tile
	var remainChecker = 0;
	var idleTile = -1;
	for(var i = 0; i <= 48; i++) {
		if(countTileArr[i] % 2 === 1) {
			idleTile = i;
			remainChecker += (countTileArr[i] % 2);
		}
	}
	var result = new Array(1).fill(idleTile);	
	console.log(result);
	//console.log([...TileMap.entries()].filter(({ 1: v }) => v === idleTile).map(([k]) => k));
		if(remainChecker != 1)
			return [];
		else
			return result;

}

export default { check7pairs, checkPlusAlpha7pairs}