import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Colors from './utils/colors';
import {scale, verticalScale} from 'react-native-size-matters';
import Images from './utils/images';
import Feed from './screens/Feed';
import User from './screens/User';
// import Stores from './screens/Stores';
import Upload from './screens/Upload';
import Discovery from './screens/Discovery';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Feed />
      ) : selectedTab == 1 ? (
        <User />
      ) : selectedTab == 2 ? (
        <Upload />
      ) : (
        <Discovery />
      )}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNav2}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(0)}>
            <View
              style={[
                styles.tabIconView,
                {
                  backgroundColor:
                    selectedTab == 0 ? Colors.purple : Colors.gray,
                },
              ]}>
              <Image source={Images.feedIcon} style={styles.tabIcon} />
            </View>
            <Text
              style={{color: selectedTab == 0 ? Colors.purple : Colors.gray}}>
              Feed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(1)}>
            <View
              style={[
                styles.tabIconView,
                {
                  backgroundColor:
                    selectedTab == 1 ? Colors.purple : Colors.gray,
                },
              ]}>
              <Image source={Images.usersIcon} style={styles.tabIcon} />
            </View>
            <Text
              style={{color: selectedTab == 1 ? Colors.purple : Colors.gray}}>
              User
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(2)}>
            <View
              style={[
                styles.tabIconView,
                {
                  backgroundColor:
                    selectedTab == 2 ? Colors.purple : Colors.gray,
                },
              ]}>
              <Image source={Images.uploadIcon} style={styles.tabIcon} />
            </View>
            <Text
              style={{color: selectedTab == 2 ? Colors.purple : Colors.gray}}>
              Upload
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(3)}>
            <View
              style={[
                styles.tabIconView,
                {
                  backgroundColor:
                    selectedTab == 3 ? Colors.purple : Colors.gray,
                },
              ]}>
              <Image source={Images.transactionIcon} style={styles.tabIcon} />
            </View>
            <Text
              style={{color: selectedTab == 3 ? Colors.purple : Colors.gray}}>
              Discovery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bottomNav: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
  },
  bottomNav2: {
    flexDirection: 'row',
    width: '100%',
    height: verticalScale(62),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconView: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: scale(18),
    height: scale(18),
    tintColor: Colors.white,
  },
});
