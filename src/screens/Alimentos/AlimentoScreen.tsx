import React, {useContext, useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, StyleSheet, Image} from 'react-native';
import {AlimentosStackParams} from '../../navigator/AlimentosNavigator';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//import { FadeInImage } from '../components/FadeInImage';
import {AlimentosContext} from '../../context/AlimentosContext';
import {FadeInImage} from '../../components/FadeInImage';
import { Alimento } from '../../interfaces/IAlimentos';

interface Props extends StackScreenProps<AlimentosStackParams, 'AlimentoScreen'> {}

export const AlimentoScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;
  const {getById,alimento} = useContext(AlimentosContext);
  //const [alimento, setalimento] = useState<Alimento>();
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: name,
  //   });
  // }, []);
  //un useefect para una tarea en especifico
  useEffect(() => {
    loadAlimento();
  }, []);

  const loadAlimento = async () => {
    const res = await getById(id);
    // //setalimento(res);
    // console.log(alimento)
  };

  //const { id,name, picture } = alimento;
  const {top} = useSafeAreaInsets();
  //const { isLoading, alimentoItem } = useAlimento(id)
  return (
    <View>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: '#C6E2CF',
        }}>
        {/* <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.5}
          style={{
            ...styles.backButton,
            top: top + 10,
          }}>
          <Icon name="arrow-back-outline" color="white" size={40} />
        </TouchableOpacity> */}
        <Text
          style={{
            ...styles.alimentoName,
            top: top + 40,
          }}>
          {name}
        </Text>
        <Image
          source={require('../../assets/pokebola-blanca.png')}
          style={{
            ...styles.imagenBack,
          }}
        />
        <FadeInImage
          uri="../assets/pokebola.png"
          style={{
            ...styles.imagen,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {},
  alimentoName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  imagenBack: {
    width: 250,
    height: 250,
    bottom: -25,
    opacity: 0.5,
    left: 78,
  },
  imagen: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
    left: 40,
  },
});
