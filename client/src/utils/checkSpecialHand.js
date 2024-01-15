const TerminalModelTileArr = [
  11, 19, 21, 29, 31, 39, 41, 42, 43, 44, 45, 46, 47,
];

const SevenStarsModelTileArr = [41, 42, 43, 44, 45, 46, 47];

function difference(a, b) {
  return [
    ...b.reduce(
      (acc, v) => acc.set(v, (acc.get(v) || 0) - 1),
      a.reduce((acc, v) => acc.set(v, (acc.get(v) || 0) + 1), new Map()),
    ),
  ].reduce((acc, [v, count]) => acc.concat(Array(Math.abs(count)).fill(v)), []);
}

function check_arithmetic(a, b, c) {
  var arr = [a, b, c];
  arr.sort();
  return arr[0] + 1 === arr[1] && arr[0] + 2 === arr[2];
}


const normalPart = (arr) => {
  if (arr.length < 2) 
	  return [];
  var terminalDiffArr = arr.filter((x) => !TerminalModelTileArr.includes(x));
  var intersectArr = arr.filter((x) => TerminalModelTileArr.includes(x));
  var valid = false;
  //if any of 3 tiles is consecutive 3 or same tiles, valid
  var setComplete = false;
  var seqComplete = false;
  var combWaitTileArr;
  var terminalEye = false;
  var result = [];
  console.log(terminalDiffArr);
  arr.sort();
  if (arr.length === 4) 
  {
    if (TerminalModelTileArr.includes(arr[0])) {
      if ( check_arithmetic(arr[1], arr[2], arr[3]) ||(arr[1] === arr[2] && arr[1] === arr[3]))
        result[0] = 1;
    }
    if (TerminalModelTileArr.includes(arr[3])) {
      if ( check_arithmetic(arr[0], arr[1], arr[2]) || (arr[0] === arr[1] && arr[0] === arr[2]))
        result[0] = 1;
    }
  } 
  else if (arr.length === 3) 
  {
    if (check_arithmetic(arr[0], arr[1], arr[2])) 
	{
      result[0] = 2;
      if (TerminalModelTileArr.includes(arr[0])) 
		  result[1] = arr[2] + 1;
      else if (TerminalModelTileArr.includes(arr[2])) 
		  result[1] = arr[0] - 1;
    } else if (arr[0] === arr[1] && arr[0] === arr[2]) 
		result[0] = 1;
    else if (TerminalModelTileArr.includes(arr[0])) 
	{
      if (arr[2] - arr[1] <= 2) 
		  result[0] = 3;
      if (arr[2] - arr[1] === 0) 
		  result[1] = arr[1];
      else if (arr[2] - arr[1] === 1) 
	  {
        result.push(arr[1] - 1, arr[2] + 1);
        result.filter((tile) => tile % 10 === 0); //filter out case like 0m or 10m (e.g. 1m,2m/8m,9m)
      } else if (arr[2] - arr[1] === 2) 
		  result[1] = arr[1] + 1;
    } else if (TerminalModelTileArr.includes(arr[2])) 
	{
      if (arr[1] - arr[0] <= 2) 
		  result[0] = 3;
      if (arr[1] - arr[0] === 0) 
		  result[1] = arr[0];
      else if (arr[1] - arr[0] === 1) 
	  {
        result.push(arr[0] - 1, arr[1] + 1);
        result.filter((tile) => tile % 10 === 0); //filter out case like 0m or 10m (e.g. 1m,2m/8m,9m)
      } else if (arr[1] - arr[0] === 2) 
		  result[1] = arr[0] + 1;
    }
  }
  console.log(result);
  return result;
}

export const checkUnrelated = (arr) => {
  if (arr.length !== 13 && arr.length !== 16) 
    return [];

  var result = [];
  var eye = 0;
  var wordPivotOfArr = -1;

  if(arr.length === 13){
    var flag147258369 = new Array(3).fill(1); //0: 147, 1: 258, 2: 369 , 1 means missing, 0 means found
    var flagPSM = new Array(3).fill(1); //0: pin, 1: sou, 2: man , 1 means missing, 0 means found
    //part for Pin Sou Man
    for(var i=0;i<arr.length-1;i++)
    {
      if(arr[i] === arr[i+1])
      {
        eye++;
        if(eye > 1)
          return [];
        continue;
      }
      flag147258369[(arr[i]%10-1)%3] = 0;
      flagPSM[Math.floor(arr[i]/10)-1] = 0;
      if(Math.floor(arr[i+1]/10) !== Math.floor(arr[i]/10))
      {
        for(var j=arr[i]+3;j%10>4;j+=3)
          result.push(j);
        for(var k=arr[i+1]-3;k%10<7 && k%10 != 0;k-=3)
          result.push(k);
      }
      else 
      {
        if((arr[i+1] - arr[i]) % 3 !== 0)
          return [];
        else if(arr[i+1] - arr[i] === 6)
          result.push(arr[i]+3);
      }
      if(arr[i+1] > 40)
      {
        wordPivotOfArr = i+1;
        break;
      }
    }
 
    if(Math.floor(arr[0]/10) === 1)
      for(var a=arr[0]-3;a>10;a-=3)
        result.push(a);
    //handle case for missing any pin sou man
    if(flagPSM[0] + flagPSM[1] + flagPSM[2] === 1)
    {
      result = [];
      var b ;
      if(flag147258369[0] + flag147258369[1] + flag147258369[2] === 1)
        b = (flagPSM[0])*10 + (flagPSM[1])*20 + (flagPSM[2])*30 + flag147258369[0]*1 + flag147258369[1]*2 + flag147258369[2]*3;
      else 
        b = (flagPSM[0])*10 + (flagPSM[1])*20 + (flagPSM[2])*30 + (flag147258369[0]-1)*-1 + (flag147258369[1]-1)*-2 + (flag147258369[2]-1)*-3;
      result.push(b,b+3,b+6);
      for(var x=wordPivotOfArr;x<arr.length-1;x++)
        if(arr[x] === arr[x+1])
          eye++;
      if(eye === 1)
        return result;
      else
        return [];
    }
    else
    {
      if((flag147258369[0] + flag147258369[1] + flag147258369[2]) %2 === 1  )
        return [];
    }
    //handle case for word tiles
 
    if(arr[wordPivotOfArr]> 44)
    {
      for(var x=wordPivotOfArr;x<arr.length-1;x++)
        if(arr[x] === arr[x+1])
          eye++;
      if(eye !== 1)
        return [];
      else 
        return [41,42,43,44];
    }
    else if(arr[arr.length-1] < 45)
    {
      for(var x=wordPivotOfArr;x<arr.length-1;x++)
        if(arr[x] === arr[x+1])
          eye++;
      if(eye !== 1)
        return [];
      else 
        return [45,46,47];
    }
     
  }
  else if(arr.length === 16) {
    //case for checking 11,12,13 is missing
    if(arr[0] > 13)
      for(var a=11;a<arr[0]-2;a++)
        result.push(a);

    for(var i=0;i<arr.length-1;i++)
    {
      if(arr[i+1]-arr[i] === 0)
      {
        eye++;
        if(eye > 1)
          return [];
        continue;
      }
      else if(arr[i] < 40)
      {
        if(Math.floor(arr[i+1]/10) !== Math.floor(arr[i]/10))
        {
          if(arr[i+1] - arr[i] > 9)
            return [];
          else 
          {
            if(arr[i]%10 === 4 || arr[i]%10 === 5 || arr[i]%10 === 6)
              for(var t1=arr[i]+3;t1%10 !== 0;t1++)
                result.push(t1);
            else if(arr[i]%10 === 7 || arr[i]%10 === 8 || arr[i]%10 === 9)
              for(var t2=arr[i+1] - arr[i+1]%10 + 1;t2 < arr[i+1]-2;t2++)
               result.push(t2);
          }          
        }
        else if(arr[i+1] - arr[i] == 1 || arr[i+1] - arr[i] == 2)
          return [];
        else if(arr[i+1] - arr[i] == 3 || arr[i+1] - arr[i] == 4 || arr[i+1] - arr[i] == 5)
          continue;
        //arr[i]%10 === 1 || arr[i]%10 === 2 || arr[i]%10 === 3
        else{
          for(var t3=arr[i]+3; t3<arr[i+1]-2; t3++)
              result.push(t3);
        }
      }
      else
      {
        wordPivotOfArr = i;
        if(i < 7)
          return [];
        break;
      }
    }
  
  }
  var wordTileCheck = 41;
    while (wordPivotOfArr < arr.length)
    {
      if(arr[wordPivotOfArr] === wordTileCheck)
      {
        wordPivotOfArr++;
        wordTileCheck++;
      }
      else if(arr[wordPivotOfArr] > wordTileCheck)
      {
        result.push(wordTileCheck);
        wordTileCheck++;
      }
      else
      {
        if(arr[wordPivotOfArr-1] === arr[wordPivotOfArr])
          eye++;
        if(eye > 1)
          return [];
        wordPivotOfArr++;
      }
    }
    if(arr[arr.length-1] !== 47)
      for(var i=arr[arr.length-1]+1;i<48;i++)
        result.push(i);
  if(eye === 0)
       result = arr.concat();   

  return result;
}

//assume the arr is sorted
export const check13Terminals = (arr) => {
  if (arr.length != 13 && arr.length != 16) return [];

  //var intersectArr = TerminalModelTileArr.filter((x) => arr.includes(x));
  var terminalDiffArr = TerminalModelTileArr.filter((x) => !arr.includes(x));
  var tileDiffArr = difference(arr, TerminalModelTileArr);
  if (terminalDiffArr.length === 1)
    tileDiffArr = tileDiffArr.filter((item) => item !== terminalDiffArr[0]);
  var normalPartResult = normalPart(tileDiffArr);
  console.log(tileDiffArr);
  console.log(terminalDiffArr);
  console.log(normalPartResult);

  if (terminalDiffArr.length === 1) 
  {
    if (arr.length === 13 || normalPartResult.length === 1)
      return terminalDiffArr;
    else return [];
  } 
  else if (terminalDiffArr.length === 0) 
  {
	if (arr.length === 13 || normalPartResult.length === 1)
		return TerminalModelTileArr;
	else if (normalPartResult.length > 1) 
	{
		if (normalPartResult[0] === 2)
			return TerminalModelTileArr.concat(normalPartResult);
		else if (normalPartResult[0] === 3) 
			return normalPartResult;
		else 
			return [];
    } 	else 
			return [];
  } 
  else 
	 return [];
}

export default { check13Terminals, checkUnrelated };