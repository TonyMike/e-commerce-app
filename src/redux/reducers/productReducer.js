import { ActionTypes } from '../constants/action-type'
import img from '../../assets/images/shopping.jpg'
const {
  SET_PRODUCTS,
  FAILED_PRODUCTS,
  SELECTED_PRODUCT
  // REMOVE_SELECTED_PRODUCT,
  // MEN_PRODUCTS,
  // WOMEN_PRODUCTS,
  // JEWELRY_PRODUCTS,
  // ELECTRONIC_PRODUCTS
} = ActionTypes

const initialState = {
  loading: true,
  products: [],
  error: ''
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload
      }
    case FAILED_PRODUCTS:
      return {
        loading: false,
        products: [],
        error: payload
      }
    default:
      return state
  }
}
const selectedInitialState = {}
export const selectedReducer = (
  productState = selectedInitialState,
  { type, payload }
) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return {
        loading: false,
        product: payload
      }
    default:
      return productState
  }
}
