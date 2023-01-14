import TileMap from './MahjongTilesMap'

const ConvertTileToNum = (arr) => {
    var numArr = [];
	for (var i = 0; i< arr.length; i++) 
		numArr.push(TileMap.get(arr[i]));
	
	return numArr;
}

const ConvertNumToTile = (arr) => {
    var tileArr = [];
	
	for (var i = 0; i< arr.length; i++) 
		for (const [key, value] of TileMap) 
			if(arr[i] == value)
				tileArr.push(key);

	return tileArr;
}

const SortedTileArr = (array) => {
	array = ConvertTileToNum(array);
	array.sort(function(a, b){return a-b});
	//console.log(array);
	array = ConvertNumToTile(array);
	//console.log(array);
    return array
}

export default SortedTileArr