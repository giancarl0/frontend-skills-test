import { Divider, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import TabbedPanel from 'components/common/TabbedPanel';
import React from 'react';
import Directions from 'components/recipes/Directions';
import Ingredients from 'components/recipes/Ingredients';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    borderTop: '1px solid rgba(0,0,0,.12)'
  },
  contents: {
    padding: '2em'
  }
}));

function RecipeContent( props ) {
  const { ingredients, directions, specials } = props
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Grid container className = {classes.root}>
        { isMobile 
          ? 
          <Grid item xs = {12}>
            <TabbedPanel
            tabData = {
              [{label: 'Ingredients',
                component: <Ingredients ingredients = {ingredients} specials = {specials}/>
              },
                {label: 'Directions',
                component: <Directions directions = {directions}/>
              }]
            }
            />

          </Grid>
          :
          <>
          <Grid item xs = {6} className = {classes.contents}>
            <Typography variant = 'h5' align = 'center'>
              Ingredients
            </Typography>
            <Divider variant='middle'/>
            <Ingredients ingredients = {ingredients} specials = {specials}/>
          </Grid>
          <Grid item xs = {6} className = {classes.contents}>
            <Typography variant = 'h5' align = 'center'>
              Directions
            </Typography>
            <Divider variant='middle'/>
            <Directions directions = {directions}/>
          </Grid>
          </>
        }

      </Grid>
  ) 
}

export default RecipeContent;