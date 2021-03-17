import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {game_presets_fetch} from './../../store/PresetsGame';
import  Loader  from './../../helpers/Loader/Loader'
import  './Game.scss'
import {ControlField} from "./ControlField/ControlField";
import {GameField} from "./GameField/GameField";
import {ResultField} from "./ResultField/ResultField";


export function Game() {
    const dispatch=useDispatch()
    //game status
    const [gameStatus,setGameStatus]=useState(false)

    //get game presets
    useEffect(() => {
        dispatch(game_presets_fetch())
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    //get all settings
    const {isFetching,gamePresets,changePresets}= useSelector(state=> state.gameData)

    return (
        <div className='game-wrapper'>
            <div className="grid-container">
                <div className="control-field" >
                    {gamePresets.length && !isFetching ?<ControlField gameStatus={gameStatus} setGameStatus={setGameStatus} gamePresets={gamePresets}/> :<Loader/>}
                </div>
                <div className="result-field"><ResultField/></div>
                <div className="game-field">
                    {gamePresets.length && !isFetching ?<GameField gameStatus={gameStatus} changePresets={changePresets} /> :<Loader/>}
                    </div>
            </div>
        </div>
    );
}

