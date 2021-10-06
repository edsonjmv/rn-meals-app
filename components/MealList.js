import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
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
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={styles.mealsList}
      />
    </View>
  );
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

export default MealList;
