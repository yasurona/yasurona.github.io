import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const About: React.FC = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Typography variant="h5">About</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="left">
            大学院生です。
            <br />
            データサイエンスとWeb開発に興味があります。
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default About
