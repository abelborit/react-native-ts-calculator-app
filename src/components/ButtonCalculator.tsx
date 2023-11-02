import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonCalculatorProps {
  text: string;
  btnColor?: string;
  btnColorDisabled?: string;
  textColor?: string;
  isStreach?: boolean;
  isDisabled?: boolean;
  action: (numberText: string) => void;
}

/* si no viene la propiedad entonces este es su valor por defecto */
export const ButtonCalculator = ({
  text,
  btnColor = '#2D2D2D',
  btnColorDisabled = '#2D2D2D',
  textColor = '#121212',
  isStreach = false,
  isDisabled = false,
  action,
}: ButtonCalculatorProps) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      /* si se coloca la propiedad pero viene un string vacío (btnColor = "") este es su valor por defecto */
      style={{
        ...styles.buttonContainer,
        backgroundColor:
          btnColor !== ''
            ? !isDisabled
              ? btnColor
              : btnColorDisabled
            : '#2D2D2D',
        flex: isStreach ? 2 : 1,
      }}
      /* la función recibe como argumento el texto que se le está mandando como propiedad */
      onPress={() => action(text)}>
      <View>
        <Text
          style={{
            ...styles.buttonText,
            color: textColor !== '' ? textColor : '#121212',
          }}>
          {/* para obtener solo los primeros 3 caracteres en caso la palabra sea muy larga */}
          {text.length > 3 ? text.substring(0, 3) : text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 35,
    color: '#121212',
    fontWeight: '400',
  },
});
