import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

import links from './data/links'

const Footer: React.FC = (props) => (
  <Grid sx={styles.footerWrapper}>
    <Container maxWidth='md'>
      <Grid item xs={12} md={6} sx={styles.footerGrid}>
        {links.map((item, i) => (
          <Link underline='none' href={item.url} sx={styles.footerLink}>
            {item.icon}&ensp;{item.label}
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </Container>
  </Grid>
)

export default Footer
