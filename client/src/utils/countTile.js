import TileMap from './MahjongTilesMap'

const countTile = (arr) => {
	var countTileArr = [];
	//initialize
	for (var i = 0; i < 59; i++) 
		countTileArr[i] = 0;
	//count tiles 
	for(var i = 0; i < arr.length; i++)
		countTileArr[TileMap.get(arr[i])]++;

	return countTileArr;
}

export default countTile