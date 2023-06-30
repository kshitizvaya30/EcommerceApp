import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import LeftIcon from '../../assets/icons/left.png';
import CartIcon from '../../assets/icons/cart.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../common/Button';
import wishlistIcon from '../../assets/icons/wishlist.png';
import wishlistFillIcon from '../../assets/icons/wishlistFill.png';
import {useDispatch} from 'react-redux';
import {
  addItemToWishList,
  isItemInWishlist,
  removeFromWishlist,
} from '../../redux/slices/WishlistSlice';
import {addItemToCart} from '../../redux/slices/CartSlice';
import QuantityButton from '../common/QuantityButton';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [wishListItem, setWishListItem] = useState(false);

  const addToWishList = item => {
    if (wishListItem) {
      setWishListItem(false);
      dispatch(removeFromWishlist(item));
    } else {
      setWishListItem(true);
      dispatch(addItemToWishList(item));
    }
  };

  const addToCart = item => {
    dispatch(
      addItemToCart({
        category: route.params.data.category,
        description: route.params.data.description,
        id: route.params.data.id,
        image: route.params.data.image,
        price: route.params.data.price,
        qty: qty,
        rating: route.params.data.rating,
        title: route.params.data.title,
      }),
    );
    setQty(1);
  };

  const increaseCartQuantity = () => {
    setQty(qty + 1);
  };

  const decreseCartQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={LeftIcon}
        title={
          route.params.data.title.length > 10
            ? route.params.data.title.substring(0, 20) + '...'
            : route.params.data.title
        }
        rightIcon={CartIcon}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        onClickRightIcon={() => {
          navigation.navigate('Cart');
        }}
        showCartCount={true}
      />
      <Image style={styles.banner} source={{uri: route.params.data.image}} />
      <Text style={styles.title}>{route.params.data.title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Price : </Text>
        <View style={styles.qtyContainer}>
          <Text style={styles.price}>{'$ ' + route.params.data.price}</Text>
          <View style={styles.BtnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => decreseCartQuantity(route.params.data)}>
              <Text style={styles.BtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => increaseCartQuantity(route.params.data)}>
              <Text style={styles.BtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Description : </Text>
        <Text style={styles.description}>{route.params.data.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.wishlist}
        onPress={() => {
          addToWishList(route.params.data);
        }}>
        {!wishListItem && (
          <Image source={wishlistIcon} style={styles.wishlistIcon} />
        )}
        {wishListItem && (
          <Image source={wishlistFillIcon} style={styles.wishlistIcon} />
        )}
      </TouchableOpacity>
      <Button
        bg="skyblue"
        title="Add To Cart"
        color="#fff"
        onClick={() => {
          addToCart(route.params.data);
        }}
      />
      {/* <Button bg="skyblue" title="WishList" color="#fff" onClick={() => { }} />*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    height: 300,
    width: '100%',
    resizeMode: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginHorizontal: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
  },
  textContainer: {
    fontSize: 10,
    fontWeight: '500',
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  wishlist: {
    position: 'absolute',
    right: 20,
    top: 80,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistIcon: {
    width: 24,
    height: 24,
  },
  qtyContainer: {
    marginLeft: 10,
  },
  qtyContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: 240,
  },
  BtnContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
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

export default ProductDetail;
