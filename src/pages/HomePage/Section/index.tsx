import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface ComponentProp {
  sectionTitle: string
  innerDiv?: React.ReactNode
}

const Section: React.FC<ComponentProp> = (props) => {
  return (
    <Container
      sx={styles.sectionWrapper}
    >
      <Typography variant='h1' sx={styles.sectionTitle}>
        {props.sectionTitle}
      </Typography>
      <Grid container xs={10} spacing={2}>
        {props.innerDiv}
      </Grid>
    </Container>
  )
}

export default Section
