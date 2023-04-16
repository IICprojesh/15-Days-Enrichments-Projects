import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={{height: 230, width: 290}}>
      <Image source={{uri:"https://iic.edu.np/assets/images/BIT-in-Itahari.png"}} 
      style={{width: "100%", height: "30%" }}/>
      </View>
      <Text style={{fontSize: 24, fontWeight: "500",}}>HAND BOOK 15 Days.. </Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})