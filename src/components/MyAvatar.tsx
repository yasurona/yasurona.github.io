import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

// 画像ファイルをインポート
import ImageFile from '../static/images/my_avatar.png'

const useStyles = makeStyles((theme) => ({
    // 表示サイズを指定
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));

const MyAvatar: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Grid>
                <Grid container justifyContent='center'>
                    <Avatar
                        alt='yasurona'
                        src={ImageFile}
                        className={classes.large}
                    />
                </Grid>
                <Grid container justifyContent='center'>
                    <Typography variant='h5' >
                        yasurona
                    </Typography>
                </Grid>
                <Grid container justifyContent='center'>
                    <Typography variant='body1'>
                        Graduate student
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default MyAvatar;