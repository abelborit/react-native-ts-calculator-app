/* estos son mis estilos globales */
import {StyleSheet} from 'react-native';

export const stylesThemeApp = StyleSheet.create({
  featureBackgroundApp: {
    flex: 1,
    backgroundColor: '#111',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  listNumberTextToOperate: {
    color: 'rgba(220, 220, 220, 0.5)',
    fontSize: 35,
    textAlign: 'right',
  },
  resultTextCalculator: {
    color: '#efefef',
    fontSize: 65,
    textAlign: 'right',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(220, 220, 220, 0.2)',
  },
  digitsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 12,
  },
});
