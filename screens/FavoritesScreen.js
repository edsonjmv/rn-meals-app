import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(({ id }) => id === 'm1' || id === 'm2');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your favorites'
};

export default FavoritesScreen;
