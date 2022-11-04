import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DietasStackParams} from '../../navigator/DietasNavigator';

interface Props
  extends StackScreenProps<DietasStackParams, 'PorcionAlimentoScreen'> {}
const PorcionAlimentoScreen = ({navigation, route}: Props) => {
  const {
    proteina_g,
    carbohidratos_g,
    grasaTotal_g,
    energia_KcaL,
    cantidad,
    name,
    porcion_alimento,
  } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <Text style={style.alimentoName}>Porción: {porcion_alimento}</Text>
      <Text style={style.alimentoName}>Cantidad: {cantidad}</Text>
      <Text style={style.alimentoName}>Proteina: {proteina_g}g</Text>
      <Text style={style.alimentoName}>Grasas: {grasaTotal_g}g</Text>
      <Text style={style.alimentoName}>Carbohidratos: {carbohidratos_g}</Text>
      <Text style={style.alimentoName}>
        Total de calorías: {energia_KcaL}kcal
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  alimentoName: {
    fontSize: 20,
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color: '#009688',
  },
  itemseparator: {
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    height: 20,
  },
});
export default PorcionAlimentoScreen;
