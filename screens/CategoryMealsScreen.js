import React from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
