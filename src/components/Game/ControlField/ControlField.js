import React, {useState, useEffect} from 'react';
import './ControlField.scss'
import {useDispatch} from "react-redux";
import {change_game_presets} from "../../../store/PresetsGame/actions";


export const ControlField = ({gamePresets, setGameStatus, gameStatus}) => {
    const [selectedValue, setSelectedValue] = useState(gamePresets[0].field)
    const dispatch = useDispatch()

    //change value of select
    useEffect(() => {
        setSelectedValue(gamePresets.name)
    }, [gamePresets])

    //save game presets
    useEffect(() => {
        dispatch(change_game_presets(selectedValue))
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    //render option fields
    const fields = gamePresets.map(item => {
        return (
            <option name={item.name} key={item.name} value={item.name}>{item.name}</option>
        )
    })

    const handlerChange = (e) => {
        const checkedValue = gamePresets.filter((item) => item.name === e.target.value)
        setSelectedValue(checkedValue[0].field);
        dispatch(change_game_presets(checkedValue[0].field))
    }

    function handlerClick() {
        setGameStatus(!gameStatus)
    }

    return (
        <div className='wrapper-control'>
            <div>
                <label
                    className='control-title'
                    value={selectedValue}
                    onChange={handlerChange}>
                    <p >Select size :</p>
                    <select
                        className='control-select'>
                        {fields}
                    </select>
                </label>
            </div>
            <div>
                <button className='control-button' onClick={handlerClick}>{gameStatus ? 'Stop' : 'Start'}</button>
            </div>

        </div>
    );
}
