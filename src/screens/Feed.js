import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Share,
  ScrollView,
} from 'react-native';
import Colors from '../utils/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Images from '../utils/images';
import Header from './Header';

const Home = () => {
  const [postLikes, setPostLikes] = useState({1: false, 2: false, 3: false});
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Tom Smith',
      postTitle: 'Planet of Nature',
      avatarURI:
        'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: 2,
      author: 'Tom Smith',
      postTitle: 'Lampost',
      avatarURI:
        'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: 3,
      author: 'Tom Smith',
      postTitle: 'Lampost',
      avatarURI:
        'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
  ]);

  const handleLike = id => {
    setPostLikes(prevLikes => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };
  const renderLikeButton = id => {
    const isLiked = postLikes[id];
    const buttonStyle = isLiked ? styles.likedButton : styles.likeButton;

    return (
      <TouchableOpacity style={buttonStyle} onPress={() => handleLike(id)}>
        <Image
          source={Images.likeIcon}
          style={[styles.icons, {tintColor: isLiked ? Colors.purple : 'black'}]}
        />
      </TouchableOpacity>
    );
  };

  const handleShare = async postId => {
    try {
      const result = await Share.share({
        message: 'Share this post content',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared via ${result.activityType}`);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Sharing dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const handleDownload = postId => {
    // Implement your download functionality here
    console.log(`Downloaded post with ID: ${postId}`);
  };

  const renderPost = ({item}) => (
    <View style={styles.postContainer}>
      <Text style={styles.postAuthor}>{item.author}</Text>
      <Image source={{uri: item.imageURI}} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>

      <View style={styles.buttonContainer}>
        {renderLikeButton(item.id)}

        <TouchableOpacity onPress={() => handleShare(item.id)}>
          <Image source={Images.shareIcon} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDownload(item.id)}>
          <Image source={Images.downloadIcon} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDownload(item.id)}>
          <Image source={Images.saveIcon} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={posts}
        style={styles.postlist}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
      />

      <ScrollView>
        <View style={styles.updateCard}>
          <Text>Post</Text>
        </View>
        <View style={styles.updateCard}>
          <Text>Post</Text>
        </View>
        <View style={styles.updateCard}>
          <Text>Post</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  icons: {
    width: scale(24),
    height: scale(24),
  },
  updateCard: {
    width: '94%',
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
  },
  postContainer: {
    paddingHorizontal: verticalScale(10),
    paddingVertical: verticalScale(12),
    marginVertical: verticalScale(8),
    backgroundColor: Colors.lightGray,
    borderRadius: 6,
  },
  postAuthor: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    marginBottom: verticalScale(2),
    borderRadius: 6,
  },
  postCaption: {
    fontSize: 16,
  },
  postlist: {
    marginVertical: verticalScale(4),
    paddingVertical: verticalScale(4),
    padding: verticalScale(8),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(8),
  },
});
