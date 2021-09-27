import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

interface ComponentProp {
  siteName: string
  siteTagLine: string
  headerImg: string
}

const Header: React.FC<ComponentProp> = (props) => (
  <>
    <Grid sx={styles.header}>
      <Container sx={styles.innerContainer} maxWidth='md'>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h6' sx={styles.siteNameText}>
              {props.siteName}
            </Typography>
            <Typography variant='h6' sx={styles.siteTagLineText}>
              {props.siteTagLine}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    <Grid container sx={styles.spacer}>
      <Container
        maxWidth='md'
        sx={styles.avatarWrapper}
      >
        <Avatar
          alt={props.siteName}
          src={props.headerImg}
          sx={styles.headerImgStyle}
        />
      </Container>
    </Grid>
  </>
)

export default Header
