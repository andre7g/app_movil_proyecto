import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import {Background} from '../../components/login/Background';
import {WhiteLogo} from '../../components/login/WhiteLogo';
import {loginTheme} from '../../theme/loginTheme';
import {useForm} from '../../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../../context/AuthContext';
import {UsuarioContext} from '../../context/UsuarioContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {singIn, errorMessage, removeError} = useContext(AuthContext);

  const {code, pass, onChange} = useForm({
    code: '',
    pass: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Error:', errorMessage, [
      {text: 'Aceptar', onPress: removeError},
    ]);
  }, [errorMessage]);

  const onLogin = () => {
    singIn({codigo: parseInt(code), pass: pass});
    Keyboard.dismiss();
  };

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        // behavior={(Platform.OS === 'ios') ?  'padding' : 'height'}
      >
        <View style={loginTheme.container}>
          <WhiteLogo />

          <Text style={loginTheme.label}>Código</Text>
          <TextInput
            placeholder="Ingresar Código"
            placeholderTextColor="rgba(255,255,255,0.4)"
            //keyboardType='email-address'
            underlineColorAndroid="white"
            style={[
              loginTheme.inputField,
              Platform.OS === 'ios' && loginTheme.inputFieldIOS,
            ]}
            selectionColor="white" //al seleccionar texto doble click
            onChangeText={value => onChange(value, 'code')}
            value={code}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={loginTheme.label}>Contraseña</Text>
          <TextInput
            placeholder="*****"
            placeholderTextColor="rgba(255,255,255,0.4)"
            //keyboardType='email-address'
            underlineColorAndroid="white"
            secureTextEntry
            style={[
              loginTheme.inputField,
              Platform.OS === 'ios' && loginTheme.inputFieldIOS,
            ]}
            selectionColor="white" //al seleccionar texto doble click
            onChangeText={value => onChange(value, 'pass')}
            value={pass}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={loginTheme.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={loginTheme.button}
              onPress={onLogin}>
              <Text style={loginTheme.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={loginTheme.newUserContainer}>
            <TouchableOpacity activeOpacity={0.4} onPress={ () => navigation.navigate('RegisterScreen') }>
              <Text style={loginTheme.buttonText}>Nueva Cuenta</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
