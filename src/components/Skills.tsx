import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const Skills: React.FC = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Skills</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">言語</Typography>
                  <Typography color="textSecondary">Python / C++</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">フレームワーク</Typography>
                  <Typography color="textSecondary">Keras / Django</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">データベース</Typography>
                  <Typography color="textSecondary">
                    MySQL / DynamoDB
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">インフラ</Typography>
                  <Typography color="textSecondary">AWS</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Skills
