import React from 'react'
import TEAL from '@material-ui/core/colors/teal'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  title: {
    backgroundColor: TEAL[300],
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
    marginRight: 40,
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
  rootProgress: {
    'width': '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
export const Header: React.FC<{ loading: boolean }> = React.memo(({ loading }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h2' className={classes.text}>
          Mars Rover Photos
        </Typography>
      </div>
      {loading && (
        <div className={classes.rootProgress}>
          <LinearProgress />
        </div>
      )}
    </div>
  )
})
