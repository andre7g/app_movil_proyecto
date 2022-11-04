import React from 'react';

export const HomeScreen = () => {
  return (
    <div>HomeScreen</div>
  )
}

// import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
// import {style} from '../theme/appTheme';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// //import {useAlimentos} from '../hooks/useAlimentos';
// import {AlimentoCard} from '../components/AlimentoCard';

// export const HomeScreen = () => {
//   const {top} = useSafeAreaInsets();
//   const {isLoading, alimentos, loadAlimentos} = useAlimentos();
//   return (
//     <>
//       <Image
//         source={require('../assets/pokebola.png')}
//         style={style.imgFondo}
//       />
//       <View
//         style={{alignItems:'center'}}
//       >
//         <FlatList
//           data={alimentos}
//           keyExtractor={alimento => alimento.id}
//           showsVerticalScrollIndicator={false}
//           numColumns={2}
//           //Header
//           ListHeaderComponent={
//             <Text
//               style={{
//                 ...style.titulo,
//                 ...style.globalMargin,
//                 top: top + 20,
//                 marginBottom: top + 40,
//               }}>
//               Conteo Calorías Diarias
//             </Text>
//           }
//           renderItem={({item}) => <AlimentoCard alimento={item} />}
//           //infinie scroll
//           onEndReached={loadAlimentos}
//           onEndReachedThreshold={0.4}
//           ListFooterComponent={
//             <ActivityIndicator style={{height: 100}} size={20} color="black" />
//           }
//         />
//       </View>
//     </>
//   );
// };
