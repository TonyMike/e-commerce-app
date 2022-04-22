import { combineReducers } from 'redux'
import { productReducer,selectedReducer } from './productReducer'


const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedReducer
})

export default reducers
