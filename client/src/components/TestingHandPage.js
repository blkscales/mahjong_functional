import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import TestingResultPage from './TestingResultPage'
//import testing_img from 'C:/Users/blksc/Documents/GitHub/mahjong_dev/client/src/assets/TestingPage.gif'
import SortedTileArr from '../utils/sortingMahjongTile'

var tileArr = [];

const addTileHandler = (tile) => {
	
	if(tileArr.length < 16)
		tileArr.push(tile);
	else
		window.alert("Tiles should be fewer than 16.");
	
	displayTileArr();
	//console.log(tileArr);
}

const removeTileHandler = () => {
	
	if(tileArr.length > 0)
		tileArr.pop();
	else
		window.alert("No tiles can be removed.");
	
	displayTileArr();
	//console.log(tileArr);
}

const removeAllTile = () => {
	tileArr.length = 0;
	displayTileArr();
}

const displayTileArr = () => {   
	
	let element = document.getElementById("display-hand");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	for (let i = 0; i < tileArr.length; i++) {
		var img = document.createElement('img');		
		img.src = require('../assets/mahjong_tiles/'+tileArr[i]+'.png').default;	
		img.style.width = '5rem';
		document.getElementById('display-hand').appendChild(img);   		
	}     
	console.log(tileArr);
}

const SortTileArray = () => {
	
	var temp = SortedTileArr(tileArr);	
	for(let i = 0; i < temp.length; i++)
		tileArr[i] = temp[i];	
	
	console.log(tileArr);
	displayTileArr();	 	   	
}




const Testing = () => {
    //const [roomCode, setRoomCode] = useState('')
	useEffect(() => {
		 displayTileArr();
    }, [])
    return (	
        <div className='Testingpage'>
            <div className='testing-menu'>              
                <div className='testing-column'>
					<div className='testing-row'>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('1pin')}
                            src={require(`../assets/mahjong_tiles/1pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('2pin')}
                            src={require(`../assets/mahjong_tiles/2pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('3pin')}
                            src={require(`../assets/mahjong_tiles/3pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('4pin')}
							src={require(`../assets/mahjong_tiles/4pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('5pin')}
                            src={require(`../assets/mahjong_tiles/5pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('6pin')}
                            src={require(`../assets/mahjong_tiles/6pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('7pin')}
                            src={require(`../assets/mahjong_tiles/7pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('8pin')}
                            src={require(`../assets/mahjong_tiles/8pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('9pin')}
                            src={require(`../assets/mahjong_tiles/9pin.png`).default} />
						</button>
					</div>
					<div className='testing-row'>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('1sou')}
                            src={require(`../assets/mahjong_tiles/1sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('2sou')}
                            src={require(`../assets/mahjong_tiles/2sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('3sou')}
                            src={require(`../assets/mahjong_tiles/3sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('4sou')}
							src={require(`../assets/mahjong_tiles/4sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('5sou')}
                            src={require(`../assets/mahjong_tiles/5sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('6sou')}
                            src={require(`../assets/mahjong_tiles/6sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('7sou')}
                            src={require(`../assets/mahjong_tiles/7sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('8sou')}
                            src={require(`../assets/mahjong_tiles/8sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('9sou')}
                            src={require(`../assets/mahjong_tiles/9sou.png`).default} />
						</button>
					</div>
					<div className='testing-row'>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('1man')}
                            src={require(`../assets/mahjong_tiles/1man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('2man')}
                            src={require(`../assets/mahjong_tiles/2man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('3man')}
                            src={require(`../assets/mahjong_tiles/3man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('4man')}
							src={require(`../assets/mahjong_tiles/4man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('5man')}
                            src={require(`../assets/mahjong_tiles/5man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('6man')}
                            src={require(`../assets/mahjong_tiles/6man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('7man')}
                            src={require(`../assets/mahjong_tiles/7man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('8man')}
                            src={require(`../assets/mahjong_tiles/8man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('9man')}
                            src={require(`../assets/mahjong_tiles/9man.png`).default} />
						</button>
					</div>
					<div className='testing-row'>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Wind_east')}
                            src={require(`../assets/mahjong_tiles/Wind_east.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Wind_south')}
                            src={require(`../assets/mahjong_tiles/Wind_south.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Wind_west')}
                            src={require(`../assets/mahjong_tiles/Wind_west.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Wind_north')}
							src={require(`../assets/mahjong_tiles/Wind_north.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Arrow_RedDragon')}
                            src={require(`../assets/mahjong_tiles/Arrow_RedDragon.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Arrow_GreenDragon')}
                            src={require(`../assets/mahjong_tiles/Arrow_GreenDragon.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Arrow_WhiteDragon')}
                            src={require(`../assets/mahjong_tiles/Arrow_WhiteDragon.png`).default} />
						</button>
					</div>
					<div className='testing-row'>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_pin')}
                            src={require(`../assets/mahjong_tiles/Functional_pin.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_sou')}
                            src={require(`../assets/mahjong_tiles/Functional_sou.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_man')}
                            src={require(`../assets/mahjong_tiles/Functional_man.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_PSM')}
							src={require(`../assets/mahjong_tiles/Functional_PSM.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_wind')}
                            src={require(`../assets/mahjong_tiles/Functional_wind.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_arrow')}
                            src={require(`../assets/mahjong_tiles/Functional_arrow.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_AW')}
                            src={require(`../assets/mahjong_tiles/Functional_AW.png`).default} />
						</button>
						<button className='button-tile'><img className='Tile' onClick={() => addTileHandler('Functional_Joker')}
                            src={require(`../assets/mahjong_tiles/Functional_Joker.png`).default} />
						</button>
					</div>		
					<p id='Display-Message'> Your Hand :</p>
					<div className='testing-row' >
						
						<div id="display-hand" ></div>
                    </div>
				</div>				
				<div className='footer-section'>
					<button className="game-button yellow" onClick={() => SortTileArray()}>Sort tile</button>
					<button className="game-button yellow" onClick={() => removeTileHandler()}>Delete last tile</button>
					<button className="game-button yellow" onClick={() => removeAllTile()}>Delete all tile</button>
					<Link to={{pathname: "/test_result", state: tileArr }}><button className="game-button yellow" >Confirm</button></Link>
					<a href='/'><button className="game-button purple">QUIT</button></a>	
				</div>				
            </div>			
        </div>		
		
    )
}

export default Testing;