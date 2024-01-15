 const users = []

 const addUser = ({id, name, room, playerNumber, seat}) => {
    const numberOfUsersInRoom = users.filter(user => user.room === room).length
    if(numberOfUsersInRoom === playerNumber)
    return { error: 'Room full' }

    const newUser = { id, name, room, seat }
    users.push(newUser)
    return { newUser }
}

const removeUser = id => {
    const removeIndex = users.findIndex(user => user.id === id)

    if(removeIndex!==-1) {
		for(let i=(removeIndex+1); i<users.length;i++) {
			users[i].seat--;
		}
        return users.splice(removeIndex, 1)[0]
	}
}

const getUser = id => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = room => {
    return users.filter(user => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }