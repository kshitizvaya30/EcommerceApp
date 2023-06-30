import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Header from '../common/Header';
import List from '../common/List';

const WishList = () => {
  const items = useSelector(state => state.wishlist);
  const [wishlistItems, setWishListItems] = useState(items.data);

  
  return (
    <View style={styles.container}>
      <Header title={'WishList'} />
      <View>
        <FlatList
          data={wishlistItems}
          renderItem={({item, index}) => {
            return <List item={item} index={index} showQtyBtn={false} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default WishList;
