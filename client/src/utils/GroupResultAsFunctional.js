import TileMap from "./MahjongTilesMap";
import { FunctionalTileMap, FunctionalNumMap } from "./FunctionalTileMap";

const subset = (arr, target) => target.every((v) => arr.includes(v));

const removeItems = (array, itemToRemove) => {
	return array.filter((v) => {
		return !itemToRemove.includes(v);
	});
}

export const GroupResultAsFunctional = (arr) => {
	var resultNumArr = [];
	var RemainingIdleTile = [];
	var removeEleArr = [];
	console.log(arr);
	console.log(FunctionalNumMap);
	Object.keys(FunctionalNumMap).forEach((key) => {
		console.log(key);
		console.log(FunctionalNumMap[key]);
		if (subset(arr, FunctionalNumMap[key])) {
			resultNumArr.push(Number(key));
			removeEleArr = removeEleArr.concat(FunctionalNumMap[key]);
		}
	});
	console.log(RemainingIdleTile);
	console.log(resultNumArr);
	RemainingIdleTile = removeItems(arr, removeEleArr);
	resultNumArr = resultNumArr.concat(RemainingIdleTile);

	return resultNumArr;
}

export default GroupResultAsFunctional