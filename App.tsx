import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {stylesThemeApp} from './src/theme/appTheme';

export const App = () => {
  return (
    /* con el SafeAreaView en iOS ignora los paddings que se le dan: https://reactnative.dev/docs/safeareaview#view-props es por eso que no se colocará el padding aquí sino en el container de su hijo */
    <SafeAreaView style={stylesThemeApp.featureBackgroundApp}>
      {/* el StatusBar es para la barra de estado que aparecen en los celulares (wifi, señal, batería, etc.) En este caso se le coloca el mismo color o similar al del fondo de la aplicación y se le cambia el color de las letras de esa barra de estado */}
      <StatusBar backgroundColor={'#222'} barStyle={'light-content'} />

      <CalculatorScreen />
    </SafeAreaView>
  );
};
