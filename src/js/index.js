import "../scss/styles.scss";

//- Escribe una función que reciba un número y lo devuelva sumando 2.

const addition = (a) => {
  //   let operation = a + 2;
  //   console.log(operation);

  return a + 2;
};

const result = addition(2);
console.log(result);

//- Escribe una función que reciba un número y devuelva el doble de ese número.

const double = (b) => {
  //   let multiply = b * 2;
  //   console.log(multiply);

  return b * 2;
};

const results = double(5);
console.log(results);

//- Escribe una función que reciba una palabra y devuelva su longitud.

const wordLongevity = (word) => {
  return word.length;
};

const give = wordLongevity("carantoñas");
console.log(give);

//- Escribe una función que reciba una palabra y la imprima en mayúsculas.

const wordInCapitals = (word) => {
  console.log(word.toUpperCase());
};
wordInCapitals("cola-cao");

//- Escribe una función que reciba dos palabras e imprima si son iguales o no

const areThisWordsEqual = (wordA, wordB) => {
  if (wordA === wordB) {
    console.log("Estas palabras son iguales");
  } else {
    console.log("Estas palabras no son iguales");
  }
};

areThisWordsEqual("keko", "andrea");

//- Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const multiplyTwo = (num1, num2) => {
  return num1 * num2;
};

const multiplyTwoResults = multiplyTwo(3, 4);
console.log(multiplyTwoResults);

//- Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = (number) => {
  //   return number.charAt(0) + number.charAt(1) + number.charAr(2);

  const operation =
    Number(number.charAt(0)) +
    Number(number.charAt(1)) +
    Number(number.charAt(2));
  return operation;
};

const sumDigitsResults = sumDigits("343");
console.log(sumDigitsResults);

//- Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    return word1;
  } else {
    return word2;
  }
};

const longestWordResults = longestWord("absuelto", "azul");
console.log(longestWordResults);

//- Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getFirstElement = (array) => {
  return array[0];
};

const getFirstElementResults = getFirstElement([4, 3, 2]);
console.log(getFirstElementResults);

//- Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, index) => {
  return array[index];
};

const arrayElementResults = getArrayElement(["a", "b", "c"], 2);
console.log(arrayElementResults);

//- Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (wordA, wordB) => {
  if (wordA.length < wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};

const shortestWordPosition = shortestWord("casa", "azucar");
console.log(shortestWordPosition);

//- Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven = (numA, numB, numC) => {
  if (numA % 2 === 0) {
    console.log(numA);
  }
  if (numB % 2 === 0) {
    console.log(numB);
  }
  if (numC % 2 === 0) {
    console.log(numC);
  } else {
    console.log("Ninguno es par");
  }
};

onlyEven(2, 4, 5);

//- Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const getTheSquare = (num) => {
  return Math.pow(num, 2), Math.pow(num, 3);
};

const getTheSquareResults = getTheSquare(3);
console.log(getTheSquareResults);

//- Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const fiveChars = (word) => {
  console.log(
    `${word.charAt(0)},${word.charAt(1)},${word.charAt(2)},${word.charAt(
      3
    )},${word.charAt(4)}`
  );
};

fiveChars("maria");

//- Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const duplicateThem = (array) => {
  console.log(
    `${array[0]},${array[1]},${array[2]},${array[0]},${array[1]},${array[2]}`
  );
};

duplicateThem([1, 2, 3]);

//- Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const eliminateThem = (array) => {
  array.shift();
  array.pop();
  console.log(array);
};

eliminateThem([1, 2, 3, 4, 5]);

//- Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

const unitedChars = (array) => {
  console.log(`${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}`);
};

unitedChars(["g", "u", "s", "t", "a"]);

//- Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = (words) => {
  if (words[0].length > words[1].length && words[0].length > words[2].length) {
    console.log(words[0]);
  } else if (
    words[1].length > words[0].length &&
    words[1].length > words[2].length
  ) {
    console.log(words[1]);
  } else {
    console.log(words[2]);
  }
};

longestWordArray(["hola", "qué", "PANQUEQUE"]);

//- Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

//- Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

const printMiddleArray = (numbers) => {
  if (numbers.length % 2 === 0) {
    console.log("El array no es válido");
    return;
  }

  const middleValue = numbers[Math.floor(numbers.length / 2)];
  console.log(middleValue);
};

printMiddleArray([1, 2, 5]);

//- Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"
const onlyVowels = (word) => {
  const vowels = "aeiou";
  let newString = "";

  if (vowels.includes(word.charAt(0))) {
    newString += word.charAt(0);
  }
  if (vowels.includes(word.charAt(1))) {
    newString += word.charAt(1);
  }
  if (vowels.includes(word.charAt(2))) {
    newString += word.charAt(2);
  }
  if (vowels.includes(word.charAt(3))) {
    newString += word.charAt(3);
  }
  if (vowels.includes(word.charAt(4))) {
    newString += word.charAt(4);
  }

  console.log(newString);
};

onlyVowels("Celia");
