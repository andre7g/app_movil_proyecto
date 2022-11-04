import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Alimento} from '../interfaces/IAlimentos';
import {FadeInImage} from './FadeInImage';
import {useState, useEffect, useRef} from 'react';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
//import { AlimentoParams } from '../navigator/Navigator';

const windowWidth = Dimensions.get('window').width;
interface Props {
  alimento: Alimento;
}
export const AlimentoCard = ({alimento}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  //const navigation = useNavigation();
  //const navigation = useNavigation<StackNavigationProp<AlimentoParams>>();
  useEffect(() => {
    ImageColors.getColors("../assets/pokebola.png", {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) return;

      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'red');
      } else {
        setBgColor('grey');
      }
    });
    return () => {
      isMounted.current = false;
    }
  }, []);

  return (
    <View>
      <TouchableOpacity 
      activeOpacity={0.9}
        // onPress={ 
        //   () => navigation.navigate('AlimentoScreen',{alimento:alimento,color:bgColor}) 
        // }
      >
        <View
          style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor,
          }}>
          <View>
            <Text style={styles.name}>
              nombre alimento
              {'\n#' + alimento.id}
            </Text>
          </View>
          <View style={styles.alimentoContainer}>
            <Image
              source={require('../assets/pokebola-blanca.png')}
              style={styles.alimentoImgBack}
            />
          </View>
        </View>

        <FadeInImage uri="../assets/pokebola.png" style={styles.alimentoImage} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  alimentoImgBack: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  alimentoImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -2,
    bottom: -0.5,
  },
  alimentoContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});
