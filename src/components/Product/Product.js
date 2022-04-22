import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'

const Product = ({ image, title, price, category }) => {
  const cardStyle = {
    height: '420px',
    padding: '10px 10px'
  }
  const img = {
    height: '100%',
    padding: '20px 40px',
    width: '100%',
  }
  const imgBox = {
    height: '65%',
    width: '100%'
  }
  return (
    <Card sx={cardStyle}>
      <CardActionArea sx={imgBox}>
        {/* <CardMedia sx={img} component='img' image={image} alt='product img' /> */}
        <img src={image} alt='' style={img} />
        <CardContent>
          <Typography
            gutterBottom
            align='center'
            variant='h5'
            component='div'
            sx={{ fontSize: '16px' }}
          >
            {title}
          </Typography>
          <Typography
            align='center'
            variant='h6'
            sx={{ fontSize: '14px', fontWeight: '600' }}
          >
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
