import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

interface ComponentProp {
  sectionTitle: string
  innerDiv?: React.ReactNode
  sx?: SxProps
}

const Section: React.FC<ComponentProp> = ({ sx, sectionTitle, children }) => {
  return (
    <Container sx={{ ...styles.sectionWrapper, ...sx }}>
      <Typography variant='h1' sx={styles.sectionTitle}>
        {sectionTitle}
      </Typography>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  )
}

export default Section
