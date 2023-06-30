import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeIcon from '../../assets/icons/home.png';
import SearchIcon from '../../assets/icons/search.png';
import HomeFillIcon from '../../assets/icons/homeFill.png';
import SearchFillIcon from '../../assets/icons/searchFill.png';
import WishListIcon from '../../assets/icons/wishlist.png';
import WishListFillIcon from '../../assets/icons/wishlistFill.png';
import BellIcon from '../../assets/icons/bell.png';
import UserIcon from '../../assets/icons/user.png';
import BellFillIcon from '../../assets/icons/bellFill.png';
import UserFillIcon from '../../assets/icons/userFill.png';
import Home from './Home';
import Search from './Search';
import WishList from './WishList';
import Notification from './Notification';
import User from './User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <WishList />
      ) : selectedTab === 3 ? (
        <Notification />
      ) : (
        <User />
      )}

      {!isKeyboardVisible && <View style={styles.bottonView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}>
          <Image
            source={selectedTab == 0 ? HomeFillIcon : HomeIcon}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}>
          <Image
            source={selectedTab == 1 ? SearchFillIcon : SearchIcon}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(2)}>
          <Image
            source={selectedTab == 2 ? WishListFillIcon : WishListIcon}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(3)}>
          <Image
            source={selectedTab == 3 ? BellFillIcon : BellIcon}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(4)}>
          <Image
            source={selectedTab == 4 ? UserFillIcon : UserIcon}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 25,
    height: 25,
  },
});

export default HomeScreen;
