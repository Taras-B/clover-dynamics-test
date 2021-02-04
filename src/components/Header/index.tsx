import React from 'react'
import TEAL from '@material-ui/core/colors/teal'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: TEAL[400],
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  margin: {
    margin: theme.spacing(1),
    marginRight: 40,
  },
}))
export const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h2'>Nasa Rovers Mars</Typography>
    </div>
  )
}
