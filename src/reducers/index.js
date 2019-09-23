import { combineReducers } from "redux";
import sucess  from "./successReducer";
import guessedWords from "./guessedWordsReducer"
 
const rootReducer = combineReducers({
    sucess,
    guessedWords
})
export default rootReducer