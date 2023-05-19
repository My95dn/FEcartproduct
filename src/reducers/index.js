import handleUser from './userReducer'
import {combineReducers} from 'redux'
import handleEmailuser from '../reducers/handleInput'
const rootReducer = combineReducers({
    user: handleUser,
    input: handleEmailuser
})
export default rootReducer