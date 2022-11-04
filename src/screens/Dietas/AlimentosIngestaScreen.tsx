import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { DietasContext } from '../../context/DietasContext';
import { DietasStackParams } from '../../navigator/DietasNavigator';

interface Props extends StackScreenProps<DietasStackParams, 'AlimentosIngestaScreen'> {}
const AlimentosIngestaScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;

  const {alimentos,getAlimentos} = useContext(DietasContext);

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  useEffect(() => {
    getAlimentos(id);
  }, []);
  return (
    <View style={{flex:1,marginHorizontal:10}}>
      <FlatList
        data={alimentos}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('PorcionAlimentoScreen',{
            name: item.nombre_alimento,
            cantidad: item.cantidad,
            proteina_g: item.proteina_g,
            carbohidratos_g: item.carbohidratos_g,
            grasaTotal_g: item.grasaTotal_g,
            energia_KcaL: item.energia_KcaL,
            porcion_alimento: item.porcion_alimento
            })
          }
          >
            <Text style={style.alimentoName}>{item.nombre_alimento}</Text>
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
    color:"#009688",
  },
  itemseparator: {
    borderBottomWidth: 1,
    marginBottom:20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    height:20,
  },
});
export default AlimentosIngestaScreen