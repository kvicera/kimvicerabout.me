import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

import links from './data/links'
import { SxProps } from '@mui/system'

interface ComponentProp {
  sx?: SxProps
}

const Footer: React.FC<ComponentProp> = ({ sx }) => (
  <Grid sx={{ ...styles.footerWrapper, ...sx }}>
    <Container maxWidth='md'>
      <Grid item xs={12} md={6} sx={styles.footerGrid}>
        {links.map((item, i) => (
          <Link
            key={item.label}
            underline='none'
            href={item.url}
            sx={styles.footerLink}
            rel='noopener'
          >
            {item.icon}&ensp;{item.label}
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </Container>
  </Grid>
)

export default Footer
