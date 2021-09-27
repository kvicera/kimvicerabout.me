import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

import * as styles from './styles'

import Header from './Header'
import Section from './Section'
import Footer from '../../components/Footer'
import Tile from './Tile'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

type PrivateRouteProps = {
  component?: React.ElementType
} & RouteProps

export const HomePage: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const tilesData = [
    {
      title: 'Tile 1',
      description: 'Sample Tile 1',
      thumbnail:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      thumbnailAlt: 'tile 1',
    },
    {
      title: 'Tile 2',
      description: 'Sample Tile 2',
      thumbnail:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80',
      thumbnailAlt: 'tile 2',
    },
    {
      title: 'Tile 2',
      description: 'Sample Tile 2',
      thumbnail:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80',
      thumbnailAlt: 'tile 2',
    },
  ]
  const tileComponents = tilesData.map((d) => (
    <Tile
      title={d.title}
      description={d.description}
      thumbnail={d.thumbnail}
      thumbnailAlt={d.thumbnailAlt}
    />
  ))
  const column1 = tileComponents.slice(0, tileComponents.length / 2)
  const column2 = tileComponents.slice(tileComponents.length / 2)

  const workSection = (
    <>
      <Grid item xs={12} md={6}>
        {column2}
      </Grid>
      <Grid item xs={12} md={6} sx={styles.workSectionCol2}>
        {column1}
      </Grid>
    </>
  )
  const aboutSection = (
    <Grid sx={styles.aboutSectionWrapper}>
      <Container maxWidth='md'>
        <Typography variant='h6' sx={styles.aboutSectionParagraph}>
          Hi! I'm Victor Francis Vicera, a software engineer from Makati,
          Philippines! I'm currently working at Denso Techno Philippines Inc. as
          a Software Engineer, dealing with Robotic Processes Automation and QA
          Testing.
        </Typography>
        <Button
          variant='contained'
          endIcon={<ArrowForwardIcon />}
          sx={styles.aboutSectionReadMoreButton}
        >
          Read More
        </Button>
      </Container>
    </Grid>
  )
  return (
    <Route
      {...rest}
      render={(props) => (
        <Grid sx={styles.body}>
          <Header
            siteName='Victor Francis Vicera'
            siteTagLine='Software Engineer'
            headerImg='https://i.imgur.com/2XEk8wR.jpg'
          />
          <Container sx={styles.container}>
            <Section sectionTitle='Work' innerDiv={workSection} />
            <Section sectionTitle='About' innerDiv={aboutSection} />
          </Container>
          <Footer />
        </Grid>
      )}
    />
  )
}
