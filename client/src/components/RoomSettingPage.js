import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'
//import testing_img from 'C:/Users/blksc/Documents/GitHub/mahjong_dev/client/src/assets/TestingPage.gif'

//tileSet : 9pin+9man+9sou+4wind+3dragon+8flowers+16functional = 58
const settingForm = {playerNum:4, mode:"Regular", tileNumberInHand:13, faanLimit:0, roundNum:4, tileSetForGame: new Array(34).fill(4).concat(new Array(24).fill(1)) };
const playerNumOptions = [ { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }, { value: 6, label: '6' }];
const gameModeOptions = [ { value: "Regular", label: 'Regular(Only 1 hand can win)' }, { value: "Vietnnam Mahjong", label: 'Vietnnam Mahjong' }, { value: "Death Match", label: 'Death Match (sichuan Mahjong)' }];
const tileNumberInHandOptions = [ { value: 13, label: '13+1 tiles' }, { value: 16, label: '16+1 tiles' }];
const tileNumberEachKindOptions = [ { value: 0, label: '0' }, { value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }];
const tileNumberFlowerOptions = [ { value: 0, label: '0' }, { value: 1, label: '1' }];
const roundNumberOptions = [ { value: 1, label: '1(east wind)' }, { value: 2, label: '2(south wind)' }, { value: 3, label: '3(west wind)' },{ value: 4, label: '4(north wind)' }];


const RoomSetting = () => {
    const [roomCode, setRoomCode] = useState('')
	const [selected, setSelected] = useState('')
	
	const handleChange = (selectedOption, itemName) => {
		setSelected(selectedOption);
		//settingForm.playerNum = selectedOption.value;
		settingForm[`${itemName}`] = selectedOption.value;
		console.log(`Option selected:`, selectedOption);
		console.log(settingForm);
		console.log(itemName);
	}
	
	const handleChange2 = (selectedOption, itemIndex) => {
		setSelected(selectedOption);
		//settingForm.playerNum = selectedOption.value;
		settingForm.tileSetForGame[itemIndex] = selectedOption.value;
		console.log(`Option selected:`, selectedOption);
		console.log(settingForm);
		console.log(itemIndex);
	}
	
	const defaultValueMap = (value) => {
		for (let i = 0; i < tileNumberEachKindOptions.length; i++) {
			if(value == tileNumberEachKindOptions[i].value)
				return tileNumberEachKindOptions[i];
		}		
		return tileNumberEachKindOptions[0];
	}
	
    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
				<div className='testing-row'>
					<div className="mt-4">
						Player Number: 
					</div>
					<Select options={playerNumOptions} onChange={event => handleChange(event, 'playerNum')} defaultValue={playerNumOptions[2]} autoFocus={true} />
					
					<div className="mt-4">
						Game Mode:  
					</div>
					<Select options={gameModeOptions} onChange={event => handleChange(event, 'mode')} defaultValue={gameModeOptions[0]} autoFocus={true} />
					
					<div className="mt-4">
						Tile Number:
					</div>
					<Select options={tileNumberInHandOptions} onChange={event => handleChange(event, 'tileNumberInHand')} defaultValue={tileNumberInHandOptions[0]} autoFocus={true} />
					
					<div className="mt-4">
						Minimum Faan:
						<input type='text' placeholder='Faan number' onChange={(event) => handleChange(event.target, 'faanLimit')} />	
					</div>	

					<div className="mt-4">
						Round Number:
					</div>
					<Select options={roundNumberOptions} onChange={event => handleChange(event, 'roundNum')} defaultValue={roundNumberOptions[3]} autoFocus={true} />	

				</div>	
				<div className='testing-row'>
					<Popup contentStyle={{width: '90%'}} trigger=
						{<button> Set mahjong tile number for each kind </button>}
							modal nested>
						{
							close => (
								<div className='modal'>
									<div className='content'>
										<div className='testing-row'>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/1pin.png`).default} /></div>											
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/2pin.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/3pin.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/4pin.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/5pin.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/6pin.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/7pin.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/8pin.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/9pin.png`).default} /></div>	
											
										</div>
										<div className='testing-row'>
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 0)} defaultValue={defaultValueMap(settingForm.tileSetForGame[0])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 1)} defaultValue={defaultValueMap(settingForm.tileSetForGame[1])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 2)} defaultValue={defaultValueMap(settingForm.tileSetForGame[2])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 3)} defaultValue={defaultValueMap(settingForm.tileSetForGame[3])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 4)} defaultValue={defaultValueMap(settingForm.tileSetForGame[4])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 5)} defaultValue={defaultValueMap(settingForm.tileSetForGame[5])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 6)} defaultValue={defaultValueMap(settingForm.tileSetForGame[6])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 7)} defaultValue={defaultValueMap(settingForm.tileSetForGame[7])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 8)} defaultValue={defaultValueMap(settingForm.tileSetForGame[8])} autoFocus={true} />
										</div>
									</div>
									<div className='content'>
										<div className='testing-row'>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/1sou.png`).default} /></div>											
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/2sou.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/3sou.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/4sou.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/5sou.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/6sou.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/7sou.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/8sou.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/9sou.png`).default} /></div>	
										</div>
										<div className='testing-row'>
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 9)} defaultValue={defaultValueMap(settingForm.tileSetForGame[9])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 10)} defaultValue={defaultValueMap(settingForm.tileSetForGame[10])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 11)} defaultValue={defaultValueMap(settingForm.tileSetForGame[11])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 12)} defaultValue={defaultValueMap(settingForm.tileSetForGame[12])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 13)} defaultValue={defaultValueMap(settingForm.tileSetForGame[13])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 14)} defaultValue={defaultValueMap(settingForm.tileSetForGame[14])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 15)} defaultValue={defaultValueMap(settingForm.tileSetForGame[15])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 16)} defaultValue={defaultValueMap(settingForm.tileSetForGame[16])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 17)} defaultValue={defaultValueMap(settingForm.tileSetForGame[17])} autoFocus={true} />
										</div>
									</div>
									<div className='content'>
										<div className='testing-row'>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/1man.png`).default} /></div>											
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/2man.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/3man.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/4man.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/5man.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/6man.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/7man.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/8man.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/9man.png`).default} /></div>	
										</div>
										<div className='testing-row'>
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 18)} defaultValue={defaultValueMap(settingForm.tileSetForGame[18])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 19)} defaultValue={defaultValueMap(settingForm.tileSetForGame[19])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 20)} defaultValue={defaultValueMap(settingForm.tileSetForGame[20])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 21)} defaultValue={defaultValueMap(settingForm.tileSetForGame[21])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 22)} defaultValue={defaultValueMap(settingForm.tileSetForGame[22])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 23)} defaultValue={defaultValueMap(settingForm.tileSetForGame[23])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 24)} defaultValue={defaultValueMap(settingForm.tileSetForGame[24])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 25)} defaultValue={defaultValueMap(settingForm.tileSetForGame[25])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 26)} defaultValue={defaultValueMap(settingForm.tileSetForGame[26])} autoFocus={true} />
										</div>
									</div>
									<div className='content'>
										<div className='testing-row'>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Wind_east.png`).default} /></div>											
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Wind_south.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Wind_west.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Wind_north.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Arrow_RedDragon.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Arrow_GreenDragon.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Arrow_WhiteDragon.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_noble1.png`).default} /></div>											
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_noble2.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_noble3.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_noble4.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_seaon1.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_seaon2.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_seaon3.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Flower_seaon4.png`).default} /></div>
										</div>
										<div className='testing-row'>
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 27)} defaultValue={defaultValueMap(settingForm.tileSetForGame[27])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 28)} defaultValue={defaultValueMap(settingForm.tileSetForGame[28])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 29)} defaultValue={defaultValueMap(settingForm.tileSetForGame[29])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 30)} defaultValue={defaultValueMap(settingForm.tileSetForGame[30])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 31)} defaultValue={defaultValueMap(settingForm.tileSetForGame[31])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 32)} defaultValue={defaultValueMap(settingForm.tileSetForGame[32])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 33)} defaultValue={defaultValueMap(settingForm.tileSetForGame[33])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 34)} defaultValue={defaultValueMap(settingForm.tileSetForGame[34])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 35)} defaultValue={defaultValueMap(settingForm.tileSetForGame[35])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 36)} defaultValue={defaultValueMap(settingForm.tileSetForGame[36])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 37)} defaultValue={defaultValueMap(settingForm.tileSetForGame[37])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 38)} defaultValue={defaultValueMap(settingForm.tileSetForGame[38])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 39)} defaultValue={defaultValueMap(settingForm.tileSetForGame[39])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 40)} defaultValue={defaultValueMap(settingForm.tileSetForGame[40])} autoFocus={true} />
											<Select className='selectTile' options={tileNumberFlowerOptions} onChange={event => handleChange2(event, 41)} defaultValue={defaultValueMap(settingForm.tileSetForGame[41])} autoFocus={true} />
										</div>
									</div>
									<div className='content'>
										<div className='testing-row'>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_pin.png`).default} /></div>											
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_sou.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_man.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_PSM.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_wind.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_arrow.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_AW.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_Joker.png`).default} /></div>	
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_Terminal.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_258.png`).default} /></div>
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_37.png`).default} /></div> 
											<div><img className='TilePic' src={require(`../assets/mahjong_tiles/Functional_46.png`).default} /></div>  
										</div>
										<div className='testing-row'>
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 42)} defaultValue={defaultValueMap(settingForm.tileSetForGame[42])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 43)} defaultValue={defaultValueMap(settingForm.tileSetForGame[43])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 44)} defaultValue={defaultValueMap(settingForm.tileSetForGame[44])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 45)} defaultValue={defaultValueMap(settingForm.tileSetForGame[45])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 46)} defaultValue={defaultValueMap(settingForm.tileSetForGame[46])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 47)} defaultValue={defaultValueMap(settingForm.tileSetForGame[47])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 48)} defaultValue={defaultValueMap(settingForm.tileSetForGame[48])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 49)} defaultValue={defaultValueMap(settingForm.tileSetForGame[49])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 50)} defaultValue={defaultValueMap(settingForm.tileSetForGame[50])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 51)} defaultValue={defaultValueMap(settingForm.tileSetForGame[51])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 52)} defaultValue={defaultValueMap(settingForm.tileSetForGame[52])} autoFocus={true} />
											<Select className='selectTile' menuPlacement="top" options={tileNumberEachKindOptions} onChange={event => handleChange2(event, 53)} defaultValue={defaultValueMap(settingForm.tileSetForGame[53])} autoFocus={true} />
										</div>
									</div>
									
									<div>
										<button onClick=
											{() => close()}>
												Close modal
										</button>
									</div>
								</div>
							)
						}
					</Popup>
				</div>
                <div className='footer-section'>					
					<input type='text' placeholder='Game Code' onChange={(event) => setRoomCode(event.target.value)} />	
					<Link to={{pathname: '/mahjongGame', search: `?roomCode=${roomCode}` , state: settingForm }}><button className="game-button yellow" >Join the game by enter the code</button></Link>		
					<Link to={{pathname: '/mahjongGame', search: `?roomCode=${randomCodeGenerator(5)}`, state: settingForm }}><button className="game-button yellow" >Create New Game</button></Link>
					<a href='/'><button className="game-button purple">QUIT</button></a>						
				</div>		
            </div>
        </div>
    )
}

export default RoomSetting