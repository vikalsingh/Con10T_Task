import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from './Header';
import { verticalScale } from 'react-native-size-matters';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [postText, setPostText] = useState('');

  const handleChooseImage = async () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const result = await launchCamera(options);

    // ImagePicker.showImagePicker(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('Image selection canceled');
    //   } else if (response.error) {
    //     console.error('ImagePicker Error:', response.error);
    //   } else {
    //     setSelectedImage(response);
    //   }
    // });
  };

  const handlePostSubmit = () => {
    console.log('Post Text:', postText);
    console.log('Selected Image:', selectedImage);
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleChooseImage}
          style={styles.selectImageButton}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>

        {selectedImage && (
          <Image
            source={{uri: selectedImage.uri}}
            style={styles.selectedImage}
          />
        )}

        <TextInput
          placeholder="Enter post text"
          onChangeText={text => setPostText(text)}
          value={postText}
          style={styles.textInput}
        />

        <TouchableOpacity onPress={handlePostSubmit} style={styles.postButton}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: verticalScale(20)
  },
  selectImageButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginVertical: 10,
  },
  postButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
