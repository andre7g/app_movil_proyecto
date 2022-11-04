import React from 'react'
import { View } from 'react-native';

export const Background = () => {
  return (
    <View
        style={{
            position:'absolute',
            backgroundColor: '#009688',
            //backgroundColor: '#C6E2CF',
            top:-250,
            width:800,
            height:1200,
            transform:[
                { rotate: '-60deg' }
            ]
        }}
    
    />
  )
}
