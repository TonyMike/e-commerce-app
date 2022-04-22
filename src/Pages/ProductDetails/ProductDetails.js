import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from './../../redux/actions/productAction'
import img from '../../assets/images/shopping.jpg'
import Button from '@mui/material/Button'
import axios from 'axios'

const ProductDetails = () => {
  const { product } = useSelector(state => state.selectedProduct)
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/6')
    .then(res=>{
      dispatch(selectedProduct(res.data))
    })
    .catch(err=>{
      console.log(err,'error');
    })
  }, [dispatch])
  console.log(product);

  const boxStyle = {
    padding: '20px 0px'
  }
  const detailsBox = {
    height: '100%',
    width: '100%'
    // backgroundColor: 'yellow'
  }
  return (
    <div>
      <Typography variant='h4'>Product Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={1} md={1} lg={1}></Grid>
        <Grid
          sx={boxStyle}
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          style={{ height: '80vh' }}
        >
          <div style={detailsBox}>
            <img
              src={img}
              alt='ghd'
              style={{ height: 'inherit', width: 'inherit' }}
            />
          </div>
        </Grid>
        <Grid
          sx={boxStyle}
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          style={{ height: '80vh' }}
        >
          <div>
            {/* <h5>{product.title}</h5> */}
            <h6>{product.price}</h6>
            <p>{product.category}</p>
            <Typography variant='body2'>{product.description}</Typography>
        <Button variant='contained' color='error'>Add to Cart</Button>
          </div>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={1}></Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails
