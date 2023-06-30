import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../../redux/slices/CartSlice';
import QuantityButton from './QuantityButton';

const List = ({item, index, showQtyBtn, increaseCartQuantity, decreseCartQuantity}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => {
        navigation.navigate('ProductDetail', {data: item});
      }}>
      <Image source={{uri: item.image}} style={styles.productImg} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title.length > 20
            ? item.title.substring(0, 20) + '...'
            : item.title}
        </Text>
        <Text style={styles.description}>
          {item.description.length > 30
            ? item.description.substring(0, 30) + '...'
            : item.description}
        </Text>
        {showQtyBtn && <QuantityButton item={item} increaseCartQuantity={increaseCartQuantity} decreseCartQuantity={decreseCartQuantity} /> }       
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 20,
    padding: 10,
  },
  productImg: {
    width: 70,
    height: 70,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green'
  },
  qtyContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  btn: {
    padding: 5,
    width: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  BtnText: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default List;
