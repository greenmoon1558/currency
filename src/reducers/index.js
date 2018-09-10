import { combineReducers } from 'redux'
import cards from './cards'
import prices from './prices'
export default combineReducers({
  cards,
  prices
})