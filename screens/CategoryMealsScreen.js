import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        image={item.imageUrl}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', { mealId: item.id });
        }}
      />
    );
  };

  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={styles.mealsList}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mealsList: {
    width: '100%',
    padding: 15
  }
});

export default CategoryMealsScreen;
