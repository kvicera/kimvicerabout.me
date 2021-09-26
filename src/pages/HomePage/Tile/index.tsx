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

const Tile: React.FC<ComponentProp> = (props) => (
  <>
    <Card
      sx={{
        backgroundColor: 'transparent',
        maxWidth: 345,
        marginBottom: '50px',
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            padding: 0,
            fontFamily: 'Rubik',
            height: 500,
            background: `url(${props.thumbnail})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <Grid
            sx={{
              padding: 2,
              background:
                'linear-gradient(to bottom, rgba(23,23,23,0), rgba(0,0,0,0.8))',
            }}
          >
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
  </>
)

export default Tile
