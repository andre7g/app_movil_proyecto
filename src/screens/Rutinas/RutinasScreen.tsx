import React,{useContext, useEffect} from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { RutinasStackParams } from '../../navigator/RutinasNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { RutinasContext } from '../../context/RutinasContext';

interface Props extends StackScreenProps<RutinasStackParams, 'RutinasScreen'> {};

const RutinasScreen = ({navigation, route}: Props) => {

  const { rutinas } = useContext( RutinasContext )

  useEffect(() => {
    navigation.setOptions({
      title: "Rutinas",
    });
  }, []);

  return (
    <View style={{flex:1,marginHorizontal:10}}>
      <FlatList
        data={rutinas}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('RutinaScreen',{
              id: item.rutinaId,
              name: item.nombre
            })
          }
          >
            <Text style={style.alimentoName}>{item.dia}</Text>
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
    color:"#009688",
    fontWeight: 'bold'
  },
  itemseparator: {
    borderBottomWidth: 1,
    marginBottom:20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    height:20,
  },
});
export default RutinasScreen