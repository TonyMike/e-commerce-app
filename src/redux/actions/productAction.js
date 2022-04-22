import { ActionTypes } from '../constants/action-type'

export const setProducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  }
}
export const failedProducts = products => {
  return {
    type: ActionTypes.FAILED_PRODUCTS,
    payload: products
  }
}
export const selectedProduct = products => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products
  }
}
// export const menProducts = (products) =>{
//     return {
//         type: ActionTypes.MEN_PRODUCTS,
//         payload: products
//     }
// }

// export const womenProducts = (products) =>{
//     return {
//         type: ActionTypes.WOMEN_PRODUCTS,
//         payload: products
//     }
// }

// export const jewelryProducts = (products) =>{
//     return {
//         type: ActionTypes.JEWELRY_PRODUCTS,
//         payload: products
//     }
// }

// export const electronicProduct = (products) =>{
//     return {
//         type: ActionTypes.ELECTRONIC_PRODUCTS,
//         payload: products
//     }
// }
