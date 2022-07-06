import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { Grid } from '@material-ui/core'

import LLNowImageFile from '../static/images/llnow-icon.png'

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />
}

const Works: React.FC = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Typography variant="h5">Works</Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <ListItemLink
                    target="_blank"
                    href="https://twitter.com/LLNow_jp"
                  >
                    <ListItemAvatar>
                      <Avatar alt="LLNow" src={LLNowImageFile} />
                    </ListItemAvatar>
                    <ListItemText
                      primary="LL Now"
                      secondary="#loveliveの様子を可視化するTwitter BOT"
                    />
                  </ListItemLink>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Works
