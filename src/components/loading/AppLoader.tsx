import React from 'react'
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
const AppLoader = () => {
  return (
    <View style={[ StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView 
        source={require('../../assets/99680-3-dots-loading.json')} 
        autoPlay loop
        /> 
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex:1000
    }
});
export default AppLoader