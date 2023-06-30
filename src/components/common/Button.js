import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: bg}]} activeOpacity={1} onPress={() => {onClick()}}>
      <Text style={{color: color, fontSize: 20, fontWeight: '500'}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15,
    }
})

export default Button