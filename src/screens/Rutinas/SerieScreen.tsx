import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { RutinasContext } from '../../context/RutinasContext';
import { RutinasStackParams } from '../../navigator/RutinasNavigator';

interface Props extends StackScreenProps<RutinasStackParams, 'SerieScreen'> {}
const SerieScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;

  const {ejercicios,getEjercicios} = useContext(RutinasContext);

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  useEffect(() => {
    getEjercicios(id);
  }, []);
  return (
    <View style={{flex:1,marginHorizontal:10,marginBottom:80,marginTop:20}}>
      <FlatList
        data={ejercicios}
        renderItem={({item}) => (

            <Text style={style.alimentoName}>{ item.repeticiones } reps | {item.nombre} | {item.metodo} | { item.peso }</Text>

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
    fontSize: 16,
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
export default SerieScreen