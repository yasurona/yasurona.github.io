import React from 'react'
import MyAvatar from './MyAvatar'
import About from './About'
import Skills from './Skills'
import Works from './Works'
import Links from './Links'
import ScrollUp from '../utils/ScrollUp'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
  },
}))

const Content: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={4}
        className={classes.root}
      >
        <Grid item>
          <MyAvatar />
        </Grid>
        <Grid item id="about">
          <About />
        </Grid>
        <Grid item id="skills">
          <Skills />
        </Grid>
        <Grid item id="works">
          <Works />
        </Grid>
        <Grid item id="links">
          <Links />
        </Grid>
      </Grid>
      <ScrollUp />
    </>
  )
}

export default Content
