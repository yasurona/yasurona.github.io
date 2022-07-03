import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 730,
        maxWidth: '100%',
    },
});

const Skills: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container justifyContent='center' >
                <Grid container justifyContent='center' >
                    <Typography variant='h5' >
                        Skills
                    </Typography>
                </Grid>
                <Box display='flex' justifyContent='center' p={1} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                言語
                            </Typography>
                            <Typography color="textSecondary">
                                Ruby / PHP / JavaScript / TypeScript
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                フレームワーク
                            </Typography>
                            <Typography color="textSecondary">
                                Ruby on Rails / Sinatra / Laravel / React
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                データベース
                            </Typography>
                            <Typography color="textSecondary">
                                MySQL / PostgreSQL
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                AWS
                            </Typography>
                            <Typography color="textSecondary">
                                EC2 / ECS / ECR / Lambda / SQS / SNS / Elastic Beanstalk / S3 / Cloud9 / CloudWatch / CloudFormation / RDS / Route53
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </Grid>
        </>
    );
}

export default Skills;