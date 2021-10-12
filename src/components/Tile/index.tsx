import React from 'react'

import * as styles from './styles'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import { SxProps } from '@mui/system'

interface ComponentProp {
  thumbnail: string
  thumbnailAlt: string
  title: string
  description: string
  sx?: SxProps
  elevation?: number
}

const Tile: React.FC<ComponentProp> = ({
  sx,
  title,
  description,
  thumbnail,
  elevation
}) => {
  const tileThumbnailStyle = {
    background: `url(${thumbnail})`,
    ...styles.tileThumbnail,
  }

  return (
    <Card sx={{ ...styles.tileWrapper, ...sx }} elevation={elevation}>
      <CardActionArea>
        <CardContent sx={tileThumbnailStyle}>
          <Grid sx={styles.gradient}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={styles.tileTitle}
            >
              {title}
            </Typography>
            <Typography
              variant='body1'
              color='#565656'
              sx={styles.tileDescription}
            >
              {description}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Tile
