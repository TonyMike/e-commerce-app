import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'

const Product = ({ image, title, price, category }) => {
  const cardStyle = {
    // height: '400px',
    padding: '10px'
  }
  const cardImg = {
    height: '265px'
  }
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardMedia
          sx={cardImg}
          component='img'
          image={image}
          alt='product img'
        />
        <CardContent>
          <Typography
            gutterBottom
            align='center'
            variant='h5'
            component='div'
            sx={{ fontSize: '18px' }}
           >
            {title}
          </Typography>
          <Typography align='center' variant='h6' sx={{ fontSize: '16px', fontWeight: '600' }}>
            {'$'}
            {price}
          </Typography>
          <Typography align='center' variant='body1' color='text.secondary'>
            {category}
          </Typography>
          {/* <Button size='small'>Buy Now</Button> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Product
