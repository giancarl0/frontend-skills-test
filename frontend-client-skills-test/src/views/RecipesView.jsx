import React, { Component } from 'react';

import { List } from '@material-ui/core';

import { isEmptyArray } from 'utils/utils';
import { fetchReq } from 'utils/webUtils';
import RecipeItem from 'components/recipes/RecipeItem';
import RecipeContent from 'components/recipes/RecipeContent';

class Recipes extends Component {
  state = {
    recipes: [],
    specials: []
  }

  componentDidMount() {
    fetchReq({method: 'GET'}, 'recipes').then(([response, data]) => {
      if( response.status === 200 ) {
        this.setState({
          recipes: data
        })
      }
    })
    fetchReq({method: 'GET'}, 'specials').then(([response, data]) => {
      if( response.status === 200 ) {
        this.setState({
          specials: data
        })
      }
    })
  }

  getSpecialsData(recipe) {
    const { specials } = this.state
    let specialsData = {}
    if( recipe ) {
      recipe.ingredients.forEach( ingredient => {
        for(let special of specials) {
          const { ingredientId, ...restOfSpecialData } = special
          if( ingredientId === ingredient.uuid ) {
            specialsData[ingredientId] = restOfSpecialData
          }
        }
      } )
    }
    return specialsData
  }

  render() {
    const { recipes } = this.state

    return(
      <List>
        {!isEmptyArray(recipes) &&
          recipes.map( recipe => (
            <RecipeItem key = {recipe.uuid} recipeData = {recipe}>
              <RecipeContent ingredients = {recipe.ingredients} directions = {recipe.directions} specials = {this.getSpecialsData(recipe)} />
            </RecipeItem>
          ))
        }
      </List>
    ) 
  }
}

export default Recipes