import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    borderTop: '1px solid rgba(0,0,0,.12)'
  },
  listItem: {
    padding:'.5em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2em'
    }
  }
}));


function Ingredients( props ) {
  const classes = useStyles()
  return (
    <ul>
      {props.directions.map( ({instructions, optional}) => (
        <li className={classes.listItem}>{`${instructions} ${optional ? '(Optional)' : ''}`}</li>
      ))}
    </ul>
  )
}

export default Ingredients;