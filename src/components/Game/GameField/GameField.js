import React, {useState,useEffect} from 'react';
import {randomArray} from "../../../helpers/helpers";
import {change_checked_item} from "../../../store/PresetsGame/actions";
import './GameField.scss'
import {setResult} from "../../../helpers/helpers";
import {useDispatch} from "react-redux";


export const GameField = ({changePresets,gameStatus}) => {

    const [gameField, setGameField] = useState([])

    const dispatch=useDispatch()
    //constants
    const HEIGHT = 400
    const WIDTH = 400
    //styles
    const flexStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth:WIDTH,
        maxHeight:HEIGHT


    }
    const itemStyle = {
        border: '2px solid black',
        boxSizing: 'border-box',
        height: WIDTH / changePresets,
        width: WIDTH / changePresets
    }

    //save checked items
    useEffect(() => {
        const checkedItem = []
        gameField.forEach((item) => {
            if (item.checked) {
                checkedItem.push(setResult(item.id + 1, changePresets))
            }
        })
        dispatch(change_checked_item(checkedItem))
    }, [gameField])// eslint-disable-line react-hooks/exhaustive-deps

//generate an array of the desired length
    useEffect(() => {
        let sizeFieldArr = []
        if (changePresets) {
            sizeFieldArr = randomArray(changePresets ** 2)
            setGameField(sizeFieldArr)
        }
    }, [changePresets])


    //handler
    function handlerMouse(e) {
        //change color
        const newState = gameField.map((item) => item.id === Number(e.target.id) ? {
            ...item,
            checked: !item.checked
        } : item)
        setGameField([
            ...newState,
        ])

    }

    const mapFormRow =
        gameField.map((item, index) => {
            return (
                <div
                    onMouseEnter={(e) => handlerMouse(e)}
                    key={index}
                    id={index}
                    style={itemStyle}
                    className={item.checked ? 'item-blue' : null}
                >
                </div>
            )
        })

    return (
        <div className='game-wrap'>
            {!gameStatus ?  <div className='hider'></div> :null}
            <div style={flexStyle}>
                {mapFormRow}
            </div>
        </div>
    );
}

