import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')

    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
                <img src={require('../assets/logo.png').default} width='200px' />
                <div className='homepage-form'>
                    <div className='homepage-join'>
                        <input type='text' placeholder='Game Code' onChange={(event) => setRoomCode(event.target.value)} />
                        <Link to={`/play?roomCode=${roomCode}`}><button className="game-button green">JOIN GAME</button></Link>
                    </div>
                    <h1>OR</h1>
                    <div className='homepage-create'>
                        <Link to={`/play?roomCode=${randomCodeGenerator(5)}`}><button className="game-button orange">CREATE GAME</button></Link>
                    </div>
					<h1>OR</h1>
                    <div className='homepage-create'>
                        <Link to={`/room_setting`}><button className="game-button red">CREATE MAHJONG ROOM</button></Link>
                    </div>
					<h1>OR</h1>
                    <div className='homepage-create'>
                        <Link to={`/testing_input`}><button className="game-button blue">TEST MAHJONG HAND WAITING TILES</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
