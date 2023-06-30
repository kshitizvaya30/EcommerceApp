import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  showCartCount,
}) => {
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems.data.length);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
        {leftIcon && <Image source={leftIcon} style={styles.icon} />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn} onPress={onClickRightIcon}>
        {rightIcon && (
          <View>
            {showCartCount && (
              <View style={styles.count}>
                <Text style={{color: 'black'}}>{cartItems.data.length}</Text>
              </View>
            )}
            <Image source={rightIcon} style={styles.icon} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  count: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: -5,
    right: -8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  },
});

export default Header;
