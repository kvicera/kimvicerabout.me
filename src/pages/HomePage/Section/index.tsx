import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

interface ComponentProp {
  sectionTitle: string
  innerDiv?: React.ReactNode
}

const Section: React.FC<ComponentProp> = (props) => {
  return (
    <Grid container sx={{paddingTop: '20px'}}>
      <Grid item xs={2} sx={{ display: 'block' }}>
        <Container>
          <Typography variant='h1' sx={styles.sectionTitle}>
            {props.sectionTitle}
          </Typography>
        </Container>
      </Grid>
      <Grid container xs={10} spacing={2}>
        {props.innerDiv}
      </Grid>
    </Grid>
  )
}

export default Section
