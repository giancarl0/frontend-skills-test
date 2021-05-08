import React from 'react';
import clsx from 'clsx';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { convertToFraction, isEmptyString } from 'utils/utils';

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
  },
  offersType: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  offersTitle: {
    [theme.breakpoints.up('sm')]: {
      padding: '0 1em'
    },
  },
  centerOnMobile: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}));

function Ingredient ( props ) {
  const classes = useStyles()
  const {name, measurement, amount, specials} = props
  const {type, title, text} = specials ?? {}

  const typeColorMapping = Object.freeze({
    event: '#fbc02d',
    local: '#5d4037',
    sale: '#388e3c',
    promocode: '#0288d1'
  })


  return (
    <li className={classes.listItem}>
      <Grid container>
        <Grid xs = {12}>
          {`${convertToFraction(amount)}${!isEmptyString(measurement)?` ${measurement} of`:''} ${name}`}
        </Grid>
        {specials &&
        <Container>
          <Grid container>
            <Grid item xs = {12} md = {4} style = {{backgroundColor: typeColorMapping[type]}} className={classes.offersType}>
              {type}
            </Grid>
            <Grid item xs = {12}  md = {8} className = {clsx(classes.offersTitle,classes.centerOnMobile)}>
                <b>{title}</b>
            </Grid>
            <Grid item xs = {12} className = {classes.centerOnMobile}>
              <Typography variant = 'caption'>
                {text}
              </Typography>
            </Grid>
          </Grid>
        </Container>
        }
      </Grid>
    </li>
  )
}


function Ingredients( props ) {
  const getSpecialsData = ( ingredientId ) => {
    const { specials } = props
    if( !specials ) return
    if( specials.hasOwnProperty(ingredientId) ) return specials[ingredientId]
    return
  }

  return (
    <ul>
      {props.ingredients.map( ingredient => (
        <Ingredient key = {ingredient.uuid} {...ingredient} specials = {getSpecialsData(ingredient.uuid)} />
      ))}
    </ul>
  )
}

export default Ingredients;