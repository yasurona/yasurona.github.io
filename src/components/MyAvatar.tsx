import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

import AvatarImageFile from '../static/img/avatar.png'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

const MyAvatar: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Avatar
            alt="yasurona"
            src={AvatarImageFile}
            className={classes.large}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">yasurona</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">大阪大学 大学院情報科学研究科</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default MyAvatar
