import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import './Product.css'
import Product from './../Product/Product'
import {
  failedProducts,
  setProducts
} from './../../redux/actions/productAction'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { loading, products, error } = useSelector(state => state.allProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setProducts(products))
  }, [])
  // useEffect(() => {
  //   // getAllProducts()
  //   axios
  //     .get('https://fakestoreapi.com/products')
  //     .then(res => {
  //       dispatch(setProducts(res.data))
  //     })
  //     .catch(err => {
  //       dispatch(failedProducts(err.message))
  //     })
  // }, [dispatch])
  // console.log(products);
  return (
    <div>
      <div>
        <Typography variant='h2' align='center'>
          Category
        </Typography>
        <div className='btn-group'>
          <Button>All</Button>
          <Button>Men's Clothing</Button>
          <Button>Women's Clothing</Button>
          <Button>Jewelry</Button>
          <Button>Electronics</Button>
        </div>
        <div>
          <Grid container spacing={3}>
            {loading ? (
              <h1>LOADING</h1>
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              products.map(product => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                      <Product
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                      />
                    </Link>
                  </Grid>
                )
              })
            )}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default ProductList
