import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import {Grid} from "@material-ui/core";

import LLNowImageFile from '../static/images/llnow-icon.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 770,
        maxWidth: '100%',
    },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container justifyContent='center' >
                <Grid container justifyContent='center' >
                    <Typography variant='h5' >
                        Works
                    </Typography>
                </Grid>
                <Box display='flex' justifyContent='center' p={1} >
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href='https://twitter.com/LLNow_jp'>
                                <ListItemAvatar>
                                    <Avatar
                                        alt='LLNow'
                                        src={LLNowImageFile}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary='LL Now' secondary='#loveliveの様子を可視化するTwitter BOT' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
            </Grid>
        </>
    );
}

export default Works;