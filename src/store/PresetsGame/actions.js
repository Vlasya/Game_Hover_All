import {getSizeField} from "../../api/api";
import {makerPresetsOfGame} from "../../helpers/helpers";

export const GAME_PRESETS_FETCH_START = 'GAME_PRESETS_FETCH_START';
export const GAME_PRESETS_FETCH_SUCCESS = 'GAME_PRESETS_FETCH_SUCCESS';
export const GAME_PRESETS_FETCH_FAILURE = 'GAME_PRESETS_FETCH_FAILURE';


export const game_presets_fetch = () => (dispatch) => {
    dispatch(game_presets_fetch_start())
    getSizeField()
        .then((res) => dispatch(game_presets_fetch_success(makerPresetsOfGame(res.data))))
        .catch(() => dispatch(game_presets_fetch_failure()))

}

export const game_presets_fetch_start = () => ({type: GAME_PRESETS_FETCH_START});
export const game_presets_fetch_success = (presetData) => ({type: GAME_PRESETS_FETCH_SUCCESS, payload: presetData});
export const game_presets_fetch_failure = () => ({type: GAME_PRESETS_FETCH_FAILURE});

export const CHANGE_GAME_PRESETS='CHANGE_GAME_PRESETS';
export const change_game_presets= (changeData)=>({type:CHANGE_GAME_PRESETS, payload:changeData});


export const CHANGE_CHECKED_ITEMS='CHANGE_CHECKED_ITEMS'
export const change_checked_item=(checkedItemsData)=>({type:CHANGE_CHECKED_ITEMS,payload:checkedItemsData})
