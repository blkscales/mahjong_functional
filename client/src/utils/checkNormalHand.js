import TileMap from './MahjongTilesMap'
import mergeTile from './mergeResult'
import countTile from './countTile'


export const checkNormalSetValidty = (arr, FuntionalArr) => {
	
	console.log(arr.length);
	console.log(TileMap.get(arr[1]) - TileMap.get(arr[0]));
	if(arr.length == 3)
	{
		if(TileMap.get(arr[0]) < 40 && TileMap.get(arr[1]) < 40 && TileMap.get(arr[2]) < 40) //check pin sou man(normal)
		{
			if( (TileMap.get(arr[2]) - TileMap.get(arr[1])+ TileMap.get(arr[2]) - TileMap.get(arr[0]) == 0) || (TileMap.get(arr[2]) - TileMap.get(arr[1])+ TileMap.get(arr[2]) - TileMap.get(arr[0]) == 3) )
				return true;
			else
				return false;
		}
		else if(TileMap.get(arr[0]) < 50 && TileMap.get(arr[1]) < 50 && TileMap.get(arr[2]) < 50) //check wind/arrow(normal)
		{
			if( arr[0] == arr[1] && arr[1] == arr[2])
				return true;
			else
				return false;
		}
	}
	else if(arr.length == 2)
	{
		if(TileMap.get(arr[0]) < 40 && TileMap.get(arr[1]) < 40 ) //check pin sou man(1 functional)
		{
			if(Math.abs(TileMap.get(arr[0])- TileMap.get(arr[1])) > 2)
				return false;
			else 
			{
				if(TileMap.get(arr[0]) < 20) //pin
				{
					if(FuntionalArr[0]+FuntionalArr[3]+FuntionalArr[7] > 0)
						return true;;
				}
				else if(TileMap.get(arr[0]) > 20 && TileMap.get(arr[0]) < 30) //sou
				{
					if(FuntionalArr[1]+FuntionalArr[3]+FuntionalArr[7] > 0)
						return true;
				}
				else if(TileMap.get(arr[0]) > 30 && TileMap.get(arr[0]) < 40) //man
				{
					if(FuntionalArr[2]+FuntionalArr[3]+FuntionalArr[7] > 0)
						return true;
				}
			}
		}
		else //check wind/arrow (1 functional)
		{
			if(TileMap.get(arr[0])- TileMap.get(arr[1]) != 0 )
				return false;
			else 
			{
				if(TileMap.get(arr[0]) < 45) //wind
				{
					if(FuntionalArr[4]+FuntionalArr[6]+FuntionalArr[7] > 0)
						return true;
				}
				else  //arrow
				{
					if(FuntionalArr[5]+FuntionalArr[6]+FuntionalArr[7] > 0)
						return true;
				}								
			}
		}
	}
	else
		return false;
	console.log("unexpected executed 2");
	return false;
}

export const checkNormalSet = (arr) => {
		
	var resultArr = [];	
    //var countTileArr = countTile(arr);
	
	//resultArr = mergeTile(resultArr);
	return arr;
}


export default { checkNormalSetValidty, checkNormalSet}