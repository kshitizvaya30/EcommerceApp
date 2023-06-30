import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

const QuantityButton = ({item, increaseCartQuantity, decreseCartQuantity}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.qtyContainer}>
      <Text style={styles.price}>{'$ ' + item.price}</Text>
      <View style={styles.BtnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => decreseCartQuantity(item)}>
          <Text style={styles.BtnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qty}>{item.qty}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => increaseCartQuantity(item)}>
          <Text style={styles.BtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green'
  },
  qtyContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: 240,
  },
  BtnContainer:{
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

export default QuantityButton;
