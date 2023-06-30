import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import MenuIcon from '../../assets/icons/menu.png';
import CartIcon from '../../assets/icons/cart.png';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductSlice';
import List from '../common/List';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        json.map(item => {
          item.qty = 1;
        });
        dispatch(addProducts(json));
      });
  };
  return (
    <View style={styles.container}>
      <Header
        title="Home"
        leftIcon={MenuIcon}
        rightIcon={CartIcon}
        onClickRightIcon={() => {
          navigation.navigate('Cart');
        }}
        showCartCount={true}
      />
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return <List item={item} index={index} showQtyBtn={false} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginTop: 5,
  },
});
export default Home;
