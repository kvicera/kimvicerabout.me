import React from 'react'

import * as styles from './styles'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'

interface ComponentProp {
  thumbnail: string
  thumbnailAlt: string
  title: string
  description: string
}

const Tile: React.FC<ComponentProp> = (props) => {
  const tileThumbnailStyle = {
    background: `url(${props.thumbnail})`,
    ...styles.tileThumbnail,
  }

  console.log(tileThumbnailStyle)
  return (
    <Card sx={styles.tileWrapper}>
      <CardActionArea>
        <CardContent sx={tileThumbnailStyle}>
          <Grid sx={styles.gradient}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={styles.tileTitle}
            >
              {props.title}
            </Typography>
            <Typography
              variant='body1'
              color='#565656'
              sx={styles.tileDescription}
            >
              {props.description}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Tile
