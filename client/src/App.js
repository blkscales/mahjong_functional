import './App.css'
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Game from './components/Game'
import Testing from './components/TestingHandPage'
import TestingResultPage from './components/TestingResultPage'
import tileArr from  './components/TestingHandPage'

const App = () => {
  return (
    <div className="App">
      <Route path='/' exact component={Homepage} />
      <Route path='/play' exact component={Game} />
	  <Route path='/testing_input' exact component={Testing} />
	  <Route path='/test_result' exact component={TestingResultPage} />
    </div>
  )
}

export default App
