import React from 'react';
import clsx from 'clsx';

import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { formatDate } from 'utils/utils';
import { apiImage } from 'utils/webUtils';
import { useToggle } from 'utils/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1em 0',
    height: 'fit-content',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc( (100vh - 120px) / 3 )'
    },
    display: 'flex',
    flexDirection: 'row'
  },
  expandedRoot: {
    height: 'fit-content'
  },
  container: {
    height: '100%'
  },
  media: {
    height: '100%',
    minHeight: '120px',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc( (100vh - 120px) / 3 )'
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    margin: '.5em 0',
  },
  info: {
    margin: '.25em 0',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  collapse: {
    width: '100%',
    height: '100%'
  }
}));

function RecipeItem( props ) {
  const { recipeData } = props
  const classes = useStyles()

  const [expanded, toggleExpanded] = useToggle( false )

  return (
    <Card className={clsx(classes.root, {[classes.expandedRoot]: expanded})}>
      <Grid container className = {classes.container}>
        <Grid item md = {6} xs = {12}>
          <CardMedia
            className={classes.media}
            image={apiImage(recipeData.images.medium)}
          />
        </Grid>
        <Grid item md = {6} xs = {12}>
         <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
            <Typography variant = 'h4'>
              {recipeData.title}
            </Typography>
            }
            subheader={formatDate( recipeData.postDate )}
          />
          <Divider variant='middle' />
          <CardContent className = {classes.content}>
            <Typography variant="body1" className = {classes.description} >
              {recipeData.description}
            </Typography>
            <Typography variant="subtitle2" className = {classes.info}>
              <EmojiPeopleIcon />
              <b>{`Serves ${recipeData.servings}`}</b>
            </Typography>
            <Typography variant="subtitle2" className = {classes.info}>
              <AccessTimeIcon />
              <b>{`${recipeData.prepTime} min`}</b>
            </Typography>
          </CardContent>
          <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          </CardActions>
        </Grid>
        <Collapse in={expanded} className={classes.collapse} timeout="auto" unmountOnExit>
          {props.children}
        </Collapse>
      </Grid>
    </Card>
  ) 
}

export default RecipeItem;