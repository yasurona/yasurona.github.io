import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'
import { green, blue, purple } from '@material-ui/core/colors'
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
    },
    purple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
    },
}));

const Contact: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container justifyContent='center' >
                <Grid container justifyContent='center' >
                    <Typography variant='h5' >
                        Contact
                    </Typography>
                </Grid>
                <Box className={classes.root} display='flex' justifyContent='center' p={1}>
                    <Link href='#' color='inherit'>
                        <Avatar className={classes.green}>
                            <MailIcon />
                        </Avatar>
                    </Link>
                    <Link href='#' color='inherit'>
                        <Avatar className={classes.blue}>
                            <TwitterIcon />
                        </Avatar>
                    </Link>
                    <Link href='#' color='inherit'>
                        <Avatar className={classes.purple}>
                            <GitHubIcon />
                        </Avatar>
                    </Link>
                </Box>
            </Grid>
        </>
    );
}

export default Contact;