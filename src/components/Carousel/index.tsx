import React, { useState } from 'react'

import * as styles from './styles'

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Grid from '@mui/material/Grid'
import { SxProps } from '@mui/system'

interface ComponentProp {
  sx?: SxProps
}

const Carousel: React.FC<ComponentProp> = ({ sx, children }) => {
  const [margin, setMargin] = useState(0)

  const clickHandler = (direction: string) => {
    switch (direction) {
      case 'right':
        margin >= 0 ? setMargin(0) : setMargin(margin + 150)
        break
      case 'left':
        setMargin(margin - 150)
        break
      default:
      // do nothing
    }
  }

  const carouselStyle = {
    ...styles.carousel,
    marginLeft: `${margin}px`,
  } as const

  return (
    <Grid container sx={{ ...styles.container, ...sx }} spacing={2} direction='row'>
      <Container maxWidth='md' sx={{ marginBottom: '40rem' }}>
        <Grid container direction='row' sx={carouselStyle}>
          {/* <Grid
            container
            spacing={2}
            direction='row'
            justifyContent='left'
            alignItems='center'
          > */}
            {children}
          {/* </Grid> */}
        </Grid>
      </Container>
      <Container maxWidth='md' sx={styles.buttonContainer}>
        <ButtonGroup disableElevation variant='contained'>
          <Button onClick={() => clickHandler('left')} sx={styles.buttons}>
            <ArrowBackIcon />
          </Button>
          <Button onClick={() => clickHandler('right')} sx={styles.buttons}>
            <ArrowForwardIcon />
          </Button>
        </ButtonGroup>
      </Container>
    </Grid>
  )
}

export default Carousel
