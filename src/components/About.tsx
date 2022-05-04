import React from 'react'
import Typography from '@material-ui/core/Typography'
import {Grid} from "@material-ui/core";

const About: React.FC = () => {
    return (
        <>
            <Grid>
                <Grid container justifyContent='center' >
                    <Typography variant='h5' >
                        About
                    </Typography>
                </Grid>
                <Grid container justifyContent='center' >
                    <Typography variant='body1' align='left'>
                        yasuronaです。<br />
                        大阪大学の大学院生です。<br />
                        データサイエンスに興味があります。
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default About;