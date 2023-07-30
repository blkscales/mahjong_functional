import './App.css'
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Game from './components/Game'
import MahjongGame from './components/MahjongGame'
import Testing from './components/TestingHandPage'
import TestingResultPage from './components/TestingResultPage'
import tileArr from  './components/TestingHandPage'
import RoomSetting from './components/RoomSettingPage'

const App = () => {
  return (
    <div className="App">
      <Route path='/' exact component={Homepage} />
      <Route path='/play' exact component={Game} />
	  <Route path='/mahjongGame' exact component={MahjongGame} />
	  <Route path='/testing_input' exact component={Testing} />
	  <Route path='/test_result' exact component={TestingResultPage} />
	  <Route path='/room_setting' exact component={RoomSetting} />
    </div>
  )
}

export default App
