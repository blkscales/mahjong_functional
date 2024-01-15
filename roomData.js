const { shuffleArray } = require("./shuffleArray");
const roomData = [];

const addRoomData = ({ newRoomFlag, roomID, roomSettings, tileStack }) => {
	if (!newRoomFlag) 
	  return;
	const newRoomData = { roomID,roomSettings, tileStack, playersHand: [] };
	roomData.push(newRoomData);
	return { newRoomData };
};

const getRoomData = (roomID) => {
	return roomData.find((roomData) => roomData.roomID === roomID);
}

const shuffleTileStack = (roomID) => {
	const curRoom = getRoomData(roomID);
	shuffleArray(curRoom.tileStack);
	console.log(curRoom.tileStack);
}

const initPlayerHand = (roomID) => {
	const curRoom = getRoomData(roomID);
	const playerNum = curRoom.roomSettings.playerNum;
	for (let i = 0; i < playerNum; i++)
		curRoom.playersHand[i] = curRoom.tileStack.splice(0, curRoom.roomSettings.tileNumberInHand );

	console.log(curRoom.playersHand[0]);
	console.log(curRoom.playersHand[1]);
	console.log(curRoom.playersHand[2]);
	console.log(curRoom.playersHand[3]);
	console.log(curRoom.tileStack);
}

module.exports = { addRoomData, getRoomData, shuffleTileStack, initPlayerHand };