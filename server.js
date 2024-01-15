const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')
const { addRoomData, getRoomData, shuffleTileStack, initPlayerHand } = require('./roomData')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(cors())

io.on('connection', socket => {
    socket.on('join', (payload, callback) => {
        let numberOfUsersInRoom = getUsersInRoom(payload.room).length
		
        const { error, newUser} = addUser({
            id: socket.id,
            name: `PLAYER ${numberOfUsersInRoom}`,
            room: payload.room,
			playerNumber: 2,
			seat: (numberOfUsersInRoom+1)
        })
		
		const { roomData } = addRoomData({
			newRoomFlag: numberOfUsersInRoom === 0,
			roomID: payload.room,
			roomSettings: payload.roomSettings,
			tileStack: payload.tileStack
		})
		
		console.log(`testing ${payload.playerNum}`)
        if(error)
            return callback(error)

        socket.join(newUser.room)

        io.to(newUser.room).emit('roomData', {room: newUser.room, users: getUsersInRoom(newUser.room)})
        socket.emit('currentUserData', {name: newUser.name, seat: newUser.seat})
		console.log(`A ${numberOfUsersInRoom}+4`)
        callback()
    })
	
	socket.on("broadcastReadyState", readyState => {
		const user = getUser(socket.id)
		if(user)
			io.to(user.room).emit("updateReadyState", readyState)
	})
	
	socket.on("updateStartState", startTrigger => {
		const user = getUser(socket.id)
		if(user)
			io.to(user.room).emit("updateStartState", startTrigger)
	})
	
	socket.on('updateRoomState', roomState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('updateRoomState', roomState)
    }) //last edit

    socket.on("initGameState", (gameState) => {
		const user = getUser(socket.id);
		const roomData = getRoomData(user.room);
		shuffleTileStack(user.room);
		initPlayerHand(user.room);
		if (user) 
			io.to(user.room).emit("initGameState", gameState);
	})
	
	socket.on("initPalyerTablePos", (tablePos) => {
    const tablePosArr = shuffleArray([1, 2, 3, 4]);
    for (let i = 0; i < 4; i++) 
		tablePos.userTablePos.push(tablePosArr[i]);

    const user = getUser(socket.id);
    tablePos.currentUserTablePos = tablePos.userTablePos[user.seat - 1];
    if (user)
      io.to(user.room).emit("initPalyerTablePos", {
        userTablePos: tablePos.userTablePos,
        currentUserTablePos: tablePos.currentUserTablePos,
      })
	})

    socket.on('updateGameState', gameState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('updateGameState', gameState)
    })

    socket.on('sendMessage', (payload, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user: user.name,seat: user.seat, text: payload.message})
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
		const userList = getUsersInRoom(user.room)
        if(user) {
            io.to(user.room).emit('roomData', {room: user.room, users: userList})
			for (let i=0;i<getUsersInRoom(user.room).length;i++) {  
				const curUserSocket = io.sockets.sockets.get(userList[i].id);
				curUserSocket.emit("currentUserData", { name: userList[i].name, seat: userList[i].seat });
			}
		}
    })
})

//serve static assets in production
if(process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})