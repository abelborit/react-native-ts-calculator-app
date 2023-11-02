module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    /* evitar que aparezcan warnings cuando se colocan estilos en línea */
    'react-native/no-inline-styles': 'off',
    /* especificar cómo deben utilizarse las llaves en las estructuras de control (if, else, while, etc...) en JavaScript, TypeScript para que se puedan aceptar con llaves para bloques de código y también sin llaves cuando es solo una declaración de código */
    curly: ['error', 'multi-line'],
  },
};
