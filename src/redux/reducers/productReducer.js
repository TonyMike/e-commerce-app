import { ActionTypes } from '../constants/action-type'
import img from '../../assets/images/shopping.jpg'
const {
  SET_PRODUCTS,
  FAILED_PRODUCTS
  // SELECTED_PRODUCT,
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
const newState = {
  loading: true,
  products: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 2,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 3,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 4,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 5,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 6,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 7,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },    {
      id: 8,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: img
    },

  ]
}
export const productReducer = (state = newState, { type, payload }) => {
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
