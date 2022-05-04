import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

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
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1} >
                    <Avatar
                        alt='yasurona'
                        src={ImageFile}
                        className={classes.large}
                    />
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='h5' >
                        yasurona
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='body1'>
                        Graduate student
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default MyAvatar;