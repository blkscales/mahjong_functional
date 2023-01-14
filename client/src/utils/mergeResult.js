import TileMap from './MahjongTilesMap'
import countTile from './countTile'


const mergeTile = (arr) => {
	
	//remove redandant tiles 
	arr = [...new Set(arr)];
	//count 
	var counterArr = countTile(arr);
		
	var pin_counter = 0, sou_counter = 0, man_counter = 0, wind_counter = 0, arrow_counter = 0, PSM_counter = 0 , AW_counter = 0, Joker_counter = 0;	
	if(counterArr[11]+counterArr[12]+counterArr[13]+counterArr[14]+counterArr[15]+counterArr[16]+counterArr[17]+counterArr[18]+counterArr[19] == 9 || counterArr[51] > 0)
		pin_counter = 1;
	if(counterArr[21]+counterArr[22]+counterArr[23]+counterArr[24]+counterArr[25]+counterArr[26]+counterArr[27]+counterArr[28]+counterArr[29] == 9 || counterArr[52] > 0)
		sou_counter = 1;
	if(counterArr[31]+counterArr[32]+counterArr[33]+counterArr[34]+counterArr[35]+counterArr[36]+counterArr[37]+counterArr[38]+counterArr[39] == 9 || counterArr[53] > 0)
		man_counter = 1;
	if(counterArr[41]+counterArr[42]+counterArr[43]+counterArr[44] == 4 || counterArr[55] > 0)
		wind_counter = 1;
	if(counterArr[45]+counterArr[46]+counterArr[47] == 3 || counterArr[56] > 0)
		arrow_counter = 1;
	if(Math.ceil((pin_counter+counterArr[51])/2) + Math.ceil((sou_counter+counterArr[52])/2) + Math.ceil((man_counter+counterArr[53])/2) == 3 || counterArr[54] > 0)
		PSM_counter = 1;
	if(Math.ceil((wind_counter+counterArr[55])/2) + Math.ceil((arrow_counter+counterArr[56])/2) == 2 || counterArr[57] > 0)
		AW_counter = 1;
	if(Math.ceil((PSM_counter+counterArr[54])/2) + Math.ceil((AW_counter+counterArr[57])/2) == 2 || counterArr[58] > 0)
		Joker_counter = 1;
	
	console.log(PSM_counter);
	//console.log(arrow_counter);
	
	for( var i = 0; i < arr.length; i++)
	{
		if(pin_counter > 0 || PSM_counter > 0) //check 1-9 pin
			if (TileMap.get(arr[i]) >= 11 && TileMap.get(arr[i]) <= 19) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
		if(sou_counter > 0 || PSM_counter > 0) //check 1-9 sou
			if (TileMap.get(arr[i]) >= 21 && TileMap.get(arr[i]) <= 29) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
		if(man_counter > 0 || PSM_counter > 0) //check 1-9 man
			if (TileMap.get(arr[i]) >= 31 && TileMap.get(arr[i]) <= 39) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
		if(PSM_counter > 0 ) //check PSM
			if (TileMap.get(arr[i]) >= 51 && TileMap.get(arr[i]) <= 53) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
		if(wind_counter > 0 || AW_counter > 0) //check 4winds
			if (TileMap.get(arr[i]) >= 41 && TileMap.get(arr[i]) <= 44) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
		if(arrow_counter > 0 || AW_counter > 0) //check 3arrows
			if (TileMap.get(arr[i]) >= 45 && TileMap.get(arr[i]) <= 47) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
		if(AW_counter > 0) //check AW
			if (TileMap.get(arr[i]) >= 55 && TileMap.get(arr[i]) <= 56) 
			{ 
				arr.splice(i, 1); 
				i--; 
			}
    }
	if(counterArr[58] > 0 || Joker_counter > 0)
		return ["Functional_Joker"];
	else 
	{		
		if(pin_counter > 0 && sou_counter > 0 && man_counter > 0 && counterArr[54] == 0)
			arr.push("Functional_PSM");
		else if(pin_counter > 0 && counterArr[51] == 0)
			arr.push("Functional_pin");
		else if(sou_counter > 0 && counterArr[52] == 0)
			arr.push("Functional_sou");
		else if(man_counter > 0 && counterArr[53] == 0)
			arr.push("Functional_man");
		if(wind_counter  > 0 &&  arrow_counter > 0 && counterArr[57] == 0)
			arr.push("Functional_AW");
		else if(wind_counter == 1 && counterArr[55] == 0)
			arr.push("Functional_wind");
		else if(arrow_counter == 1 && counterArr[56] == 0)
			arr.push("Functional_arrow");
	}	
	//console.log(arr);
	return arr;
}

export default mergeTile