import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import CodeIcon from '@mui/icons-material/Code'

const Footer: React.FC = (props) => (
  <Grid sx={styles.footerWrapper}>
    <Container maxWidth='md'>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Link underline='none' href='#' sx={styles.footerLink}>
          <EmailIcon sx={styles.linkIcon} />
          &ensp;Email
        </Link>
        <Link underline='none' href='#' sx={styles.footerLink}>
          <LinkedInIcon
            sx={styles.linkIcon}
          />
          &ensp;LinkedIn
        </Link>
        <Link underline='none' href='#' sx={styles.footerLink}>
          <GitHubIcon sx={styles.linkIcon} />
          &ensp;Github
        </Link>
        <Link underline='none' href='#' sx={styles.footerLink}>
          <InstagramIcon
            sx={styles.linkIcon}
          />
          &ensp;Instagram
        </Link>
        <Link underline='none' href='#' sx={styles.footerLink}>
          <CodeIcon sx={styles.linkIcon} />
          &ensp;StackOverflow
        </Link>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </Container>
  </Grid>
)

export default Footer
