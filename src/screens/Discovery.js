import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './Header';
import {verticalScale} from 'react-native-size-matters';
import Colors from '../utils/colors';

// Mock data for discovery items
const discoveryData = [
  {id: '1', title: 'Post 1', description: 'Description for Post 1'},
  {id: '2', title: 'Post 2', description: 'Description for Post 2'},
  {id: '3', title: 'Post 3', description: 'Description for Post 3'},
  {id: '4', title: 'Post 4', description: 'Description for Post 4'},
  {id: '5', title: 'Post 5', description: 'Description for Post 5'},
  {id: '6', title: 'Post 6', description: 'Description for Post 6'},
];

const Discovery = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <Header />
      <Text style={styles.title}>Discovery Screen</Text>
        <FlatList
          data={discoveryData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginBottom: verticalScale(80)}}
        />
    </View>
  );
};

export default Discovery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    padding: verticalScale(6),
    fontWeight: 'bold',
    marginBottom: verticalScale(16),
  },
  item: {
    backgroundColor: Colors.lightPurple,
    padding: verticalScale(14),
    margin: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 8,
  },
});
