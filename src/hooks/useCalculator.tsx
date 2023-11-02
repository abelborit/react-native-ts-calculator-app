import {useRef, useState} from 'react';

export enum Operators {
  sum,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  /* se crean en string para poder concatener los números */
  const [currentNumber, setCurrentNumber] = useState('0'); // trabajará como el número actual y como el resultado
  const [prevNumber, setPrevNumber] = useState('0');
  // const [listNumberToOperate, setListNumberToOperate] = useState(['']);

  /* evitar que se renderice de nuevo la aplicación si se cambia entre los operadores: /, x, -, + ya que si se crea un estado para almacenar esos operadores y cuando se manden a llamar desde otro componente a estas funciones entonces se volverá a renderizar la aplicación innecesariamente */
  const lastOperatorRef = useRef<Operators>();

  const handleReset = () => {
    setCurrentNumber('0');
    setPrevNumber('0');
    // setListNumberToOperate([]);
  };

  const handleDeleteLastNumber = () => {
    if (currentNumber === '0' || currentNumber === '-0') {
      /* si es 0 o -0 */
      setCurrentNumber('0');
      // setPrevNumber('0');
    } else if (currentNumber.length === 1 && !currentNumber.includes('-')) {
      /* si tiene un dígito pero sin el signo - */
      setCurrentNumber('0');
      // setPrevNumber('0');
    } else if (currentNumber.length === 2 && currentNumber.includes('-')) {
      /* si tiene un dígito pero con el signo - */
      setCurrentNumber('0');
      // setPrevNumber('0');
    } else if (currentNumber.length > 1) {
      /* si tiene más de un dígito entonces ir borrando el último caracter */
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      // setPrevNumber(prevNumber.substring(0, prevNumber.length - 1));
    }

    /* otra forma de hacerlo */
    // let negativeDigit = '';
    // let temporalNumber = calcResultState;

    // if (calcResultState.includes('-')) {
    //   negativeDigit = '-';
    //   temporalNumber = calcResultState.substring(1); // quitar la primera posición, es decir el signo negativo
    // }

    // if (temporalNumber.length > 1) {
    //   setListNumberToOperate(negativeDigit + temporalNumber.slice(0, -1));
    //   setCalcResultState(negativeDigit + temporalNumber.slice(0, -1));
    // } else {
    //   setListNumberToOperate('0');
    //   setCalcResultState('0');
    // }
  };

  const handleMakeListNumberToOperate = (numberText: string) => {
    /* no aceptar doble punto decimal */
    if (currentNumber.includes('.') && numberText === '.') return;

    /* para solo aceptar un cero al inicio */
    if (currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
      /* primer punto decimal */
      if (numberText === '.') {
        setCurrentNumber(currentNumber + numberText);
        // setPrevNumber(currentNumber + numberText);
      } else if (numberText === '0' && currentNumber.includes('.')) {
        /* como ya empieza con cero y tiene un punto entonces evaluar si el siguiente número es otro cero para suponer que hará un gran número decimal (0.001, 0.000001, etc....) */
        setCurrentNumber(currentNumber + numberText);
        // setPrevNumber(currentNumber + numberText);
      } else if (numberText !== '0' && !currentNumber.includes('.')) {
        /* evaluar si el número a colocar es diferente de 0 y el número actual (que sería un 0) no tiene un punto entonces reemplazarlo por el número seleccionado */
        setCurrentNumber(numberText);
        // setPrevNumber(numberText);
      } else if (numberText === '0' && !currentNumber.includes('.')) {
        /* evaluar para no colocar 000000.000 porque si se coloca solo un else con la última condición entonces permitirá colocar varios ceros al principio y luego recién reemplazar el número que seleccionemos entonces con esta condición se evita eso y solo toma el valor actual que sería "0" */
        setCurrentNumber(currentNumber);
        // setPrevNumber(currentNumber);
      } else {
        setCurrentNumber(currentNumber + numberText);
        // setPrevNumber(currentNumber + numberText);
      }
    } else {
      /* si no empieza con cero entonces añadirle los dígitos que uno quiera */
      // handleCalculatorResult();
      setCurrentNumber(currentNumber + numberText);
      // setPrevNumber(currentNumber + numberText);
    }
  };

  const handlePositiveNegative = () => {
    if (currentNumber.includes('-')) {
      setCurrentNumber(currentNumber.replace('-', ''));
      // setPrevNumber(currentNumber.replace('-', ''));
    } else {
      setCurrentNumber('-' + currentNumber);
      // setPrevNumber('-' + currentNumber);
    }
  };

  const handleChangeCurrentNumberForPrevNumber = () => {
    /* evitar que si el último dígito es un punto entonces se mande sin ese punto */
    if (currentNumber.endsWith('.')) {
      setPrevNumber(currentNumber.slice(0, -1));
    } else {
      setPrevNumber(currentNumber);
    }
    setCurrentNumber('0');
  };

  /* se coloca de tipo Operators ya que operatorProp es como el índice de cada opción de Operators */
  const handleMathOperation = (operatorProp: Operators) => {
    handleChangeCurrentNumberForPrevNumber();
    lastOperatorRef.current = operatorProp;
  };

  const handleCalculatorResult = () => {
    /* convertir los números de tipo string a tipo number */
    const number1 = Number(currentNumber);
    const number2 = Number(prevNumber);

    switch (lastOperatorRef.current) {
      case Operators.sum:
        /* convertirlos de nuevo a string */
        setCurrentNumber(`${number1 + number2}`);
        break;

      /* se invierte y se coloca number2 - number1 porque al colocar el segundo número en la calculadora entonces este pasaría a ser el número actual que sería el number1 */
      case Operators.subtract:
        setCurrentNumber(`${number2 - number1}`);
        break;

      /* se invierte y se coloca number2 / number1 porque al colocar el segundo número en la calculadora entonces este pasaría a ser el número actual que sería el number1 */
      case Operators.divide:
        if (number1 === 0 || number2 === 0) {
          setCurrentNumber('No se puede dividir entre cero!');
        }

        setCurrentNumber(`${number2 / number1}`);
        break;

      case Operators.multiply:
        setCurrentNumber(`${number1 * number2}`);
        break;
    }

    setPrevNumber('0');
  };

  return {
    currentNumber,
    prevNumber,
    handleReset,
    handleDeleteLastNumber,
    handleMakeListNumberToOperate,
    handlePositiveNegative,
    handleMathOperation,
    handleCalculatorResult,
  };
};
