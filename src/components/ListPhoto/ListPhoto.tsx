import Grid from '@material-ui/core/Grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { loadMoreRoversPhotos } from '../../store/actions/actionRoverPhotos'

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
  },
  wrapper: {
    marginTop: 20,
  },
  media: {
    height: 180,
  },
})

export const ListPhoto = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const photos = useSelector((state: RootState) => state.roversPhotos.photos)

  const loadMoreClick = () => {
    dispatch(loadMoreRoversPhotos())
  }

  return (
    <Grid container justify='center' spacing={3} className={classes.wrapper}>
      {photos.map((item, i) => (
        <Grid key={i} item xs={12} md={4} sm={6} className={classes.root}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.img_src}
                title='Image Mars'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {item.rover.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {item.camera.full_name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary' href={item.img_src} target='_blank'>
                open photo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}

      {photos.length > 0 && (
        <Grid item xs={12}>
          <Button onClick={loadMoreClick} variant='contained' color='primary'>
            Load more...
          </Button>
        </Grid>
      )}
    </Grid>
  )
}
