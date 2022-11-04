import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const WhiteLogo = () => {
  return (
    <View style={{
        alignItems:'center',
    }}>
        <Icon style={{top:-30}} name="fitness-outline" color="white" size={180} />
        <Text style={{ top:-50, 
        color:'white', 
        fontSize:30,
        fontWeight: "bold", 
        }}>Marcello´s Gym</Text>
    </View>
  )
}
