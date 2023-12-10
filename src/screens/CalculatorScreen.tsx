import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {stylesThemeApp} from '../theme/appTheme';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {Operators, useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    currentNumber,
    prevNumber,
    handleReset,
    handleDeleteLastNumber,
    handleMakeListNumberToOperate,
    handlePositiveNegative,
    handleMathOperation,
    handleCalculatorResult,
  } = useCalculator();

  useEffect(() => {
    /* si no se llama a este código entonces el SplashScreen se quedaría de forma permanente en la pantalla del dispositivo por las configuraciones que hicimos en la parte de Android y este código lo que hace es ocultar el SplashScreen */
    SplashScreen.hide();
  }, []);

  return (
    <View style={stylesThemeApp.calculatorContainer}>
      {/* hay que cambiarlo por la lista de números a operar */}
      {prevNumber !== '0' ? (
        <Text style={stylesThemeApp.listNumberTextToOperate}>{prevNumber}</Text>
      ) : null}

      {/* en el componente Text hay una propiedad llamada "adjustsFontSizeToFit" que es un boolean para que a medida que se vayan aumentando la longitud de los datos y ya no entre en la pantalla entonces se vaya reduciendo su tamaño. También se puede colocar el número de líneas que quiero que tenga que en este caso será de 2 líneas con "numberOfLines={2}" */}
      <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        style={stylesThemeApp.resultTextCalculator}>
        {currentNumber === '0' ? currentNumber : '= ' + currentNumber}
      </Text>

      {/* Row Buttons */}
      <View style={stylesThemeApp.digitsRowContainer}>
        <ButtonCalculator
          btnColor="#9B9B9B"
          text="C"
          textColor="#eee"
          action={handleReset}
        />
        <ButtonCalculator
          btnColor="#9B9B9B"
          text="+/-"
          textColor="#eee"
          action={handlePositiveNegative}
        />
        <ButtonCalculator
          btnColor="#9B9B9B"
          text="del"
          textColor="#eee"
          action={handleDeleteLastNumber}
        />
        <ButtonCalculator
          btnColor="#FF9427"
          btnColorDisabled="rgba(255, 148, 39, 0.5)"
          text="÷"
          textColor="#eee"
          isDisabled={currentNumber === '0' ? true : false}
          action={() => handleMathOperation(Operators.divide)}
        />
      </View>

      {/* Row Buttons */}
      <View style={stylesThemeApp.digitsRowContainer}>
        <ButtonCalculator
          text="7"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="8"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="9"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          btnColor="#FF9427"
          btnColorDisabled="rgba(255, 148, 39, 0.5)"
          text="x"
          textColor="#eee"
          isDisabled={currentNumber === '0' ? true : false}
          action={() => handleMathOperation(Operators.multiply)}
        />
      </View>

      {/* Row Buttons */}
      <View style={stylesThemeApp.digitsRowContainer}>
        <ButtonCalculator
          text="4"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="5"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="6"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          btnColor="#FF9427"
          btnColorDisabled="rgba(255, 148, 39, 0.5)"
          text="-"
          textColor="#eee"
          isDisabled={currentNumber === '0' ? true : false}
          action={() => handleMathOperation(Operators.subtract)}
        />
      </View>

      {/* Row Buttons */}
      <View style={stylesThemeApp.digitsRowContainer}>
        <ButtonCalculator
          text="1"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="2"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="3"
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          btnColor="#FF9427"
          btnColorDisabled="rgba(255, 148, 39, 0.5)"
          text="+"
          textColor="#eee"
          isDisabled={currentNumber === '0' ? true : false}
          action={() => handleMathOperation(Operators.sum)}
        />
      </View>

      {/* Row Buttons */}
      <View style={stylesThemeApp.digitsRowContainer}>
        <ButtonCalculator
          text="0"
          textColor="#eee"
          isStreach
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          text="."
          textColor="#eee"
          action={handleMakeListNumberToOperate}
        />
        <ButtonCalculator
          btnColor="#FF9427"
          btnColorDisabled="rgba(255, 148, 39, 0.5)"
          text="="
          textColor="#eee"
          isDisabled={currentNumber === '0' ? true : false}
          action={handleCalculatorResult}
        />
      </View>
    </View>
  );
};
