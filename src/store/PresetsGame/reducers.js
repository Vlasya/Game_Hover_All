import {
    GAME_PRESETS_FETCH_FAILURE,
    GAME_PRESETS_FETCH_START,
    GAME_PRESETS_FETCH_SUCCESS,
    CHANGE_GAME_PRESETS,
    CHANGE_CHECKED_ITEMS
} from "./actions";

const defaultState = {
    gamePresets: [],
    isFetching: false,
    isGetSuccess: false,
    isGetFailure: false,
    changePresets: 0,
    checkedItems:[]

}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GAME_PRESETS_FETCH_START: {
            return {
                ...state,
                isFetching: true,
                isGetFailure: false
            }
        }
        case GAME_PRESETS_FETCH_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                gamePresets: action.payload
            }
        }
        case GAME_PRESETS_FETCH_FAILURE: {
            return {
                ...state,
                isGetFailure: true
            }
        }
        case CHANGE_GAME_PRESETS: {
            return {
                ...state,
                changePresets: action.payload
            }
        }
        case CHANGE_CHECKED_ITEMS:{
            return {
                ...state,
                checkedItems:action.payload
            }
        }
        default:
            return state
    }
}