import React, {useContext, useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {AlimentosStackParams} from '../../navigator/AlimentosNavigator';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//import { FadeInImage } from '../components/FadeInImage';
import {AlimentosContext} from '../../context/AlimentosContext';
import {FadeInImage} from '../../components/FadeInImage';
import {Alimento} from '../../interfaces/IAlimentos';
import {useForm} from '../../hooks/useForm';
import {Background} from '../../components/login/Background';
import {alimentoTheme} from '../../theme/alimentoTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoader from '../../components/loading/AppLoader';
import { UsuarioContext } from '../../context/UsuarioContext';

interface Props
  extends StackScreenProps<AlimentosStackParams, 'AlimentoScreen'> {}

export const AlimentoScreen = ({navigation, route}: Props) => {
  const {id, name} = route.params;
  const {loading, alimentoDetalle, getById, addAlimento} = useContext(AlimentosContext);
  const {getUsuario} = useContext(UsuarioContext);

  useEffect(() => {
    loadAlimento();
  }, []);
  
  const loadAlimento = async () => {
    const res = await getById(id);
    // //setalimento(res);
    // console.log(alimento)
  };
  const addAlimentoUsuario = async () => {
    Keyboard.dismiss();
    const userId = await AsyncStorage.getItem('userId');
    const res = await addAlimento({UsuarioId:userId,AlimentoId:id,Cantidad:parseInt(cantidad)});
    getUsuario();
    navigation.pop()
  };
  const {cantidad, onChange} = useForm({
    cantidad: '',
  });
  //const { id,name, picture } = alimento;
  const {top} = useSafeAreaInsets();
  //const { isLoading, alimentoItem } = useAlimento(id)
  return (
    <>
    <View>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: '#C6E2CF',
        }}>
        <Text
          style={{
            ...styles.alimentoName,
            top: top + 40,
          }}>
          {alimentoDetalle?.nombre}
        </Text>
        <>
          <KeyboardAvoidingView
            style={{flex: 1,top: top + 40,}}
            // behavior={(Platform.OS === 'ios') ?  'padding' : 'height'}
            >
            <View style={alimentoTheme.container}>
              <Text style={alimentoTheme.label}>Cantidad</Text>
              <TextInput
                placeholder="Ingresar Cantidad"
                placeholderTextColor="#009688"
                //keyboardType='email-address'
                underlineColorAndroid="#009688"
                style={[
                  alimentoTheme.inputField,
                  Platform.OS === 'ios' && alimentoTheme.inputFieldIOS,
                ]}
                selectionColor="white" //al seleccionar texto doble click
                onChangeText={value => onChange(value, 'cantidad')}
                value={cantidad}
                autoCapitalize="none"
                autoCorrect={false}
                />
              <View style={alimentoTheme.buttonContainer}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={alimentoTheme.button}
                  onPress={addAlimentoUsuario}>
                  <Text style={alimentoTheme.buttonText}>Agregar</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={alimentoTheme.newUserContainer}>
            <TouchableOpacity activeOpacity={0.4} onPress={ () => navigation.navigate('RegisterScreen') }>
            <Text style={alimentoTheme.buttonText}>Nueva Cuenta</Text>
            </TouchableOpacity>
          </View> */}
            </View>
          </KeyboardAvoidingView>
        </>

        {/* <Image
          source={require('../../assets/pokebola-blanca.png')}
          style={{
            ...styles.imagenBack,
          }}
        /> */}
        {/* <FadeInImage
          uri="../assets/pokebola.png"
          style={{
            ...styles.imagen,
          }}
        /> */}
      </View>
      <View>
        <Text
          style={{
            ...styles.alimentoProp,
            top: top + 40,
          }}>
          Porción: {alimentoDetalle?.porcion}
        </Text>
        <Text
          style={{
            ...styles.alimentoProp,
            top: top + 40,
          }}>
          Peso: {alimentoDetalle?.pesoGramos}g
        </Text>
        <Text
          style={{
            ...styles.alimentoProp,
            top: top + 40,
          }}>
          Proteína: {alimentoDetalle?.proteina_g}g
        </Text>
        <Text
          style={{
            ...styles.alimentoProp,
            top: top + 40,
          }}>
          Grasas: {alimentoDetalle?.grasaTotal_g}g
        </Text>
        <Text
          style={{
            ...styles.alimentoProp,
            top: top + 40,
          }}>
          Carbohidratos: {alimentoDetalle?.carbohidratos_g}g
        </Text>
      </View>
      
    </View>
    { loading ? <AppLoader/> : null}
    
</>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 350,
    zIndex: 999,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  alimentoName: {
    color: '#009688',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  alimentoProp: {
    color: '#424242',
    fontSize: 25,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
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
