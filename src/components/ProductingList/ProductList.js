import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  const [filterProducts, setFilterProducts] = useState()
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => {
          dispatch(failedProducts(err.message))
          console.log(err)
        })

      dispatch(setProducts(response.data))
    }
    getProducts()
  }, [dispatch])

  const filtered = category => {
    const updatedList = products.filter(product => {
      return product.category === category
    })
    setFilterProducts(updatedList)
  }
  // console.log(filterProducts)
  console.log(products)

  return (
    <div>
      <div>
        <Typography variant='h2' align='center'>
          Category
        </Typography>
        {/* <div className='btn-group'>
          <Button onClick={() => setFilterProducts(products)}>All</Button>
          <Button onClick={() => filtered(`men's clothing`)}>
            Men's Clothing
          </Button>
          <Button onClick={() => filtered(`women's clothing`)}>
            Women's Clothing
          </Button>
          <Button onClick={() => filtered(`jewelery`)}>Jewelery</Button>
          <Button onClick={() => filtered(`electronics`)}>Electronics</Button>
        </div> */}
        <div>
          <Grid container spacing={3}>
            {loading ? (
              <h1>LOADING</h1>
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              products.map((product, i) => {
                return (
                  <>
                    <Grid item container xs={12} sm={6} md={4} lg={3} key={i++}>
                      <Link
                        to={`/product/${product.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Product
                          key={product.id}
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          category={product.category}
                        />
                      </Link>
                    </Grid>
                  </>
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
