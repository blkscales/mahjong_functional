import TileMap from './MahjongTilesMap'

//assume arr converted to num already
const countTile = (arr) => {
	var countTileArr = [];
	//initialize
	for (var i = 0; i < Array.from(TileMap.values()).pop(); i++) 
		countTileArr[i] = 0;
	//count tiles 
	for(var i = 0; i < arr.length; i++)
		countTileArr[arr[i]]++;

	return countTileArr;
}

export default countTile
