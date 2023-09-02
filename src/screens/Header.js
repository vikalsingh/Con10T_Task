import React from 'react';
import {Image, View, Text, StatusBar, StyleSheet} from 'react-native';
import Colors from '../utils/colors';
import Images from '../utils/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.purple} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headrer2}>
          <View style={styles.headerLeftView}>
            <View>
              <Image source={Images.userIcon} style={styles.userIcon} />
            </View>
            <View style={styles.menuView}>
              <View style={styles.headerMenu}>
                <Text style={styles.homeText}>Tom Smith</Text>
              </View>
            </View>
          </View>
          <View style={styles.headerRightView}>
            <Image source={Images.helpIcon} style={styles.icons} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: Colors.purple,
    justifyContent: 'flex-end',
  },
  headrer2: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: scale(40),
    height: scale(40),
  },
  menuView: {
    marginLeft: moderateScale(15),
    alignSelf: 'center',
  },
  headerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeText: {
    fontSize: moderateScale(18),
    color: Colors.white,
    fontWeight: '600',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: scale(24),
    height: scale(24),
    tintColor: Colors.white,
  },
});
