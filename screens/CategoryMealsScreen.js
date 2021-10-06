import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
