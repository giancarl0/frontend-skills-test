import React from 'react';
import { Fab, makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollToTop( props ) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = ( event ) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if ( anchor ) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function ScrollToTopButton( props ) {
  return (
    <ScrollToTop {...props}>
      <Fab size="small" aria-label="scroll to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollToTop>
  ) 
}

export default ScrollToTopButton;