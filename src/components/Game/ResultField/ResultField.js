import React from 'react';
import {useSelector} from "react-redux";
import './ResultField.scss'

export const ResultField=(props)=> {
    //get checked items from state
    const selectedItem=useSelector(state=>state.gameData.checkedItems)

    const selected=selectedItem.map((item,index)=>{
        return <li className='result-item' key={index}> <span>row:</span>{item.row} <span>column:</span> {item.column}</li>
    })
    return (
        <div className='result-list'>
            <ul >
                {selected}
            </ul>
        </div>
    );
}

