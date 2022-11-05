import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AlimentosContext } from '../../context/AlimentosContext';
import { AlimentosStackParams } from '../../navigator/AlimentosNavigator';

interface Props extends StackScreenProps<AlimentosStackParams, 'AlimentosScreen'> {}

const AlimentosScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;

  const {alimentos,getAlimentos} = useContext(AlimentosContext);

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  useEffect(() => {
    getAlimentos(id);
  }, []);

  return (
    <View style={{flex:1,marginHorizontal:10,marginBottom:80,marginTop:20}}>
      <FlatList
        data={alimentos}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AlimentoScreen',{
              id: item.id,
              name: item.nombre
            })
          }
          >
            <Text style={style.alimentoName}>{item.porcion} de {item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={style.itemseparator} />
        )}
      />
    </View>
  )
}
const style = StyleSheet.create({
  alimentoName: {
    fontSize: 20,
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color:"#212121",
  },
  itemseparator: {
    borderBottomWidth: 1,
    marginBottom:20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    height:20,
  },
});
export default AlimentosScreen