import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate('CategoryMeals', { categoryId: item.id })
        }
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal categories'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100
  }
});

export default CategoriesScreen;
