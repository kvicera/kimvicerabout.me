import React from 'react'

import * as styles from './styles'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { SxProps } from '@mui/system'

interface ComponentProp {
  siteName: string
  siteTagLine: string
  headerImg: string
  sx?: SxProps
}

const Header: React.FC<ComponentProp> = ({
  sx,
  siteName,
  siteTagLine,
  headerImg,
}) => (
  <>
    <Grid sx={{ ...styles.header, ...sx }}>
      <Container sx={styles.innerContainer} maxWidth='md'>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h6' sx={styles.siteNameText}>
              {siteName}
            </Typography>
            <Typography variant='h6' sx={styles.siteTagLineText}>
              {siteTagLine}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    <Grid container sx={styles.spacer}>
      <Container maxWidth='md' sx={styles.avatarWrapper}>
        <Avatar alt={siteName} src={headerImg} sx={styles.headerImgStyle} />
      </Container>
    </Grid>
  </>
)

export default Header
