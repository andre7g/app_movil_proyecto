import React,{useContext, useEffect} from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AlimentosStackParams } from '../../navigator/AlimentosNavigator';
import { AlimentosContext } from '../../context/AlimentosContext';

interface Props extends StackScreenProps<AlimentosStackParams, 'GruposAlimenticiosScreen'> {};

const GruposAlimenticiosScreen = ({navigation, route}: Props) => {

  const { grupos } = useContext( AlimentosContext )

  useEffect(() => {
    navigation.setOptions({
      title: "Grupos Alimenticios",
    });
  }, []);

  return (
    <View style={{flex:1,marginHorizontal:10,marginBottom:80,marginTop:20}}>
      <FlatList
        data={grupos}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AlimentosScreen',{
              id: item.id,
              name: item.grupo
            })
          }
          >
            <Text style={style.alimentoName}>{item.grupo}</Text>
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
    color:"#212121",
    fontWeight: 'bold',
  },
  itemseparator: {
    borderBottomWidth: 1,
    marginBottom:20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    height:20,
  },
});
export default GruposAlimenticiosScreen