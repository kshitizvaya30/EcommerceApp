import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SuccessImg from '../../assets/icons/Success.jpeg';
import SuccessIcon from '../../assets/icons/SuccessIcon.png';
import Button from '../common/Button';
import { useNavigation } from '@react-navigation/native';

const Success = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.successContainer}>
        <Image source={SuccessIcon} />
        <Text style={styles.txt}>Ordered Successfully</Text>
      </View>
        <Image source={SuccessImg} style={styles.image} />
        <Button bg="skyblue" title="Return To Home" color="#fff" onClick={() => {navigation.navigate('HomeScreen')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  successContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginVertical: 50,
    height: 250,
    width: 250,
    resizeMode: 'contain',
  },
  txt: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
});

export default Success;
