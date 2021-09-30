import React from 'react'

import * as styles from './styles'

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Grid from '@mui/material/Grid'

const Footer: React.FC = (props) => (
  <Grid
    container
    sx={{
      paddingTop: '50px',
      paddingBottom: '50px',
      overflow: 'hidden',
    }}
  >
    <Container maxWidth='md' sx={{ marginBottom: '40rem' }}>
      <Paper
        elevation={3}
        sx={{
          height: '40rem',
          width: '2000px',
          backgroundColor: 'white',
          position: 'absolute',
        }}
      ></Paper>
    </Container>
    <Container maxWidth='md' sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ButtonGroup disableElevation variant='contained'>
        <Button
          sx={{
            marginTop: '30px',
            backgroundColor: '#ffffff',
            color: '#1d1d1d',
            fontFamily: 'Rubik',
            borderRadius: '25px',
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          sx={{
            marginTop: '30px',
            backgroundColor: '#ffffff',
            color: '#1d1d1d',
            fontFamily: 'Rubik',
            borderRadius: '25px',
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    </Container>
  </Grid>
)

export default Footer
