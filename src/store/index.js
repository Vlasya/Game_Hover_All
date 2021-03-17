import { applyMiddleware,combineReducers,compose,createStore} from "redux";
import {gameDataReducer} from "./PresetsGame";
import thunk from 'redux-thunk'

export const rootReducer=combineReducers({
    gameData:gameDataReducer
})

export const store= createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)