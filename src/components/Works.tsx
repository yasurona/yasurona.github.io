import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'
import {Grid} from "@material-ui/core";

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
                            {/*GitHubリポジトリなどのURLを貼る*/}
                            <ListItemLink href='#'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                {/*「primary」に作品名、「secondary」に説明文を書く*/}
                                <ListItemText primary='Work1' secondary='Work1です。' />
                            </ListItemLink>
                        </ListItem>
                        <ListItem>
                            <ListItemLink href='#'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='Work2' secondary='Work2です。' />
                            </ListItemLink>
                        </ListItem>
                        <ListItem>
                            <ListItemLink href='#'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='Work3' secondary='Work3です。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
            </Grid>
        </>
    );
}

export default Works;