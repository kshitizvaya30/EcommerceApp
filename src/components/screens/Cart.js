import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../common/Header';
import BackIcon from '../../assets/icons/left.png';
import {useNavigation} from '@react-navigation/native';
import List from '../common/List';
import {
  addItemToCart,
  emptyCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';
import CheckoutLayout from '../common/CheckoutLayout';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState(items.data);
  const navigation = useNavigation();

  useEffect(() => {
    setCartItem(items.data);
  }, [items]);

  const increaseCartQuantity = item => {
    dispatch(addItemToCart(item));
  };

  const decreseCartQuantity = item => {
    dispatch(removeItemFromCart(item));
  };

  const getTotal = () => {
    let total = 0;
    cartItem.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(2);
  };

  const checkoutNavigation = () => {
    dispatch(emptyCart());
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Cart'}
        leftIcon={BackIcon}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View>
        <FlatList
          data={cartItem}
          renderItem={({item, index}) => {
            return (
              <List
                item={item}
                index={index}
                showQtyBtn={true}
                increaseCartQuantity={increaseCartQuantity}
                decreseCartQuantity={decreseCartQuantity}
              />
            );
          }}
        />
      </View>
      {cartItem.length < 1 && (
        <View style={styles.noItem}>
          <Text style={{fontSize: 17}}>No Items in Cart</Text>
        </View>
      )}
      {cartItem.length > 0 && (
        <CheckoutLayout
          items={cartItem.length}
          total={getTotal()}
          checkoutNavigation={checkoutNavigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Cart;
