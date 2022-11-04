import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { DietasContext } from '../../context/DietasContext';
import { DietasStackParams } from '../../navigator/DietasNavigator';

interface Props extends StackScreenProps<DietasStackParams, 'IngestasScreen'> {}
const IngestasScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;

  const {ingestas,getIngestas} = useContext(DietasContext);

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  useEffect(() => {
    getIngestas(id);
  }, []);
  return (
    <View style={{flex:1,marginHorizontal:10}}>
      <FlatList
        data={ingestas}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AlimentosIngestaScreen',{
              id: item.id,
              name: item.nombre
            })
          }
          >
            <Text style={style.alimentoName}>{item.nombre}</Text>
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
export default IngestasScreen