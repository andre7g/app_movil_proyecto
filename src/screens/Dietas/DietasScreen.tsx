import React,{useContext, useEffect} from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DietasStackParams } from '../../navigator/DietasNavigator';
import { DietasContext } from '../../context/DietasContext';

interface Props extends StackScreenProps<DietasStackParams, 'DietasScreen'> {};

const DietasScreen = ({navigation, route}: Props) => {

  const { dietas } = useContext( DietasContext )

  useEffect(() => {
    navigation.setOptions({
      title: "Dietas",
    });
  }, []);

  return (
    <View style={{flex:1,marginHorizontal:10}}>
      <FlatList
        data={dietas}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('IngestasScreen',{
              id: item.dietasId,
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
export default DietasScreen