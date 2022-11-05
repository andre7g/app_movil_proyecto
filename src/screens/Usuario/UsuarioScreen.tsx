// import { StatusBar } from 'expo-status-bar';
import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../context/AuthContext';
import {loginTheme} from '../../theme/loginTheme';

// import profile from './assets/profile.png';
// Tab ICons...
// import home from './assets/home.png';
// import search from './assets/search.png';
// import notifications from './assets/bell.png';
// import settings from './assets/settings.png';
// import logout from './assets/logout.png';
// Menu
// import menu from './assets/menu.png';
// import close from './assets/close.png';

// Photo
// import photo from '../../assets/pokebola.png';

const UsuarioScreen = () => {
  const {user, logOut} = useContext(AuthContext);
  const [currentTab, setCurrentTab] = useState('Calorias');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
let numero = 4;
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Icon
          name="person-circle-sharp"
          color="white"
          size={60}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        />

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>
          {user?.usuario}
        </Text>

        {/* <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity> */}
        <View style={loginTheme.buttonLogOutContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={loginTheme.buttonLogOut}
            onPress={logOut}>
            <Text style={loginTheme.buttonText}>Salir</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab Bar Buttons....
          }

          {/* {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)} */}
        </View>

        <View>
          {/* {TabButton(currentTab, setCurrentTab, "LogOut", logout)} */}
        </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <Icon
              name={showMenu ? 'close-sharp' : 'person-circle-sharp'}
              color="#009688"
              size={40}
              style={{
                width: 40,
                height: 40,
                marginTop: 20,
              }}
            />

            {/* <Image source= style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,
              
            }}></Image> */}
          </TouchableOpacity>
          <Text
            style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black',
                marginTop: -35,
                marginLeft: 50,
                //   paddingTop: 20,
            }}>
            {user?.usuario}
          </Text>
          <View
            style={{
                alignItems: 'center',
                
                //   paddingTop: 20,
            }}>
            <Text
              style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 35,
                  //   paddingTop: 20,
                }}>
              Proteinas: 180g
            </Text>
            <Text
              style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'black',
                  //   paddingTop: 20,
              }}>
              Grasas: 180g
            </Text>
            <Text
              style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'black',
                  //   paddingTop: 20,
                }}>
              Carbohidratos: 180g
            </Text>
            <Text
              style={{
                  alignItems: 'center',
                  fontSize: 70,
                  fontWeight: 'bold',
                  color: 'green',
                  marginTop: 30,
                  //   paddingTop: 20,
                }}>
              1,500kcal
            </Text>
            {/* <Image
            source={require('../../assets/pokebola.png')}
            style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25,
            }}></Image> */}



                <Icon
                name={'star'}
                color="grey"
                size={40}
                style={{
                  width: 40,
                  height: 40,
                  marginTop: 20,
                }}
              />
            <Text
              style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingTop: 15,
                  paddingBottom: 5,
                }}>
              180lbs
            </Text>
            <Text
              style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingTop: 15,
                  paddingBottom: 5,
                }}>
              168cms
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 15,
                paddingBottom: 5,
              }}>
              Imc = 28.9
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 15,
                paddingBottom: 5,
              }}>
              Pre-obesidad o Sobrepeso
            </Text>
          </View>
          {/* <Text style={{
          }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text> */}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

// // For multiple Buttons...
// const TabButton = (currentTab, setCurrentTab, title, image) => {
//   return (

//     <TouchableOpacity onPress={() => {
//       if (title == "LogOut") {
//         // Do your Stuff...
//       } else {
//         setCurrentTab(title)
//       }
//     }}>
//       <View style={{
//         flexDirection: "row",
//         alignItems: 'center',
//         paddingVertical: 8,
//         backgroundColor: currentTab == title ? 'white' : 'transparent',
//         paddingLeft: 13,
//         paddingRight: 35,
//         borderRadius: 8,
//         marginTop: 15
//       }}>

//         <Image source={image} style={{
//           width: 25, height: 25,
//           tintColor: currentTab == title ? "#5359D1" : "white"
//         }}></Image>

//         <Text style={{
//           fontSize: 15,
//           fontWeight: 'bold',
//           paddingLeft: 15,
//           color: currentTab == title ? "#5359D1" : "white"
//         }}>{title}</Text>

//       </View>
//     </TouchableOpacity>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    color: 'red',
  },
  button: {},
});
export default UsuarioScreen;
