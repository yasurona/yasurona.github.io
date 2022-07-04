import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

import AvatarImageFile from '../static/images/avatar.png'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

const MyAvatar: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Grid>
        <Grid container justifyContent="center">
          <Avatar
            alt="yasurona"
            src={AvatarImageFile}
            className={classes.large}
          />
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h5">yasurona</Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="body1">大阪大学 大学院情報科学研究科</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default MyAvatar
