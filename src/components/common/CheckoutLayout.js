import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const CheckoutLayout = ({total, items, checkoutNavigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={[styles.totalTxt, {marginLeft: 20}]}>
          {'Items :   ' + items}
        </Text>
        <View style={styles.totalContainer}>
          <Text style={styles.totalTxt}>{'Total :  '}</Text>
          <Text style={[styles.totalTxt, {color: 'green'}]}>
            {'$ ' + total}
          </Text>
        </View>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity
          style={styles.checkout}
          onPress={() => checkoutNavigation()}>
          <Text style={styles.txt}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  totalTxt: {
    fontSize: 20,
    fontWeight: '500',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkout: {
    height: '50%',
    width: '80%',
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default CheckoutLayout;
