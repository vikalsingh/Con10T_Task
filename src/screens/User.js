import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Images from '../utils/images';

const User = () => {
  const user = {
    username: 'john_doe',
    bio: 'A passionate developer.',
  };
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image source={Images.userIcon} style={styles.profilePicture} />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60, // Make it circular
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
    textAlign: 'center',
  },
});
