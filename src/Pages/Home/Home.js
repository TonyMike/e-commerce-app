import React from 'react'
// import shopping from '../../../assets/images/shopping.jpg'
import './Home.css'
// import Typical from 'react-typical'
import ProductList from '../../components/ProductingList/ProductList'
// import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <div>
      <section>
        <h1>This is the main section</h1>
      </section>
      <section>
        <ProductList />
      </section>
    </div>
  )
}

export default Home
