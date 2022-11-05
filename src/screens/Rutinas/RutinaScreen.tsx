import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { RutinasContext } from '../../context/RutinasContext';
import { RutinasStackParams } from '../../navigator/RutinasNavigator';

interface Props extends StackScreenProps<RutinasStackParams, 'RutinaScreen'> {}
const RutinaScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;

  const {series,getSeries} = useContext(RutinasContext);

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  useEffect(() => {
    getSeries(id);
  }, []);
  return (
    <View style={{flex:1,marginHorizontal:10,marginBottom:80,marginTop:20}}>
      <FlatList
        data={series}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SerieScreen',{
              id: item.id,
              name: item.tipo
            })
          }
          >
            <Text style={style.alimentoName}>{item.tipo}</Text>
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
export default RutinaScreen