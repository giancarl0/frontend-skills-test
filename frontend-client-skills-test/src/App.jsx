import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ScrollToTopButton from 'components/ScrollToTopButton'
import Recipes from 'views/RecipesView'

function App( props ) {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Ez Recipes</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Recipes />
      </Container>
      <ScrollToTopButton />
    </>
  );
}

export default App;
