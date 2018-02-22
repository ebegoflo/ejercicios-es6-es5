// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

// // var array = [2, 4, 6];
// // var array = [-3, 2, -8, 12, 5];
// var array = [ 1, 2, 3, 4, 5];


// declaración de la funcion

// function square () {
//   // escribe tu código aqui...
//   var newArreglo = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > 0 || array[i] % 2 == 0) {
//       var operation = array [i] * array [i];
//       newArreglo.push(operation);
//       console.log(operation);
//     }else {
//       return array[i];
//     }
//     console.log(newArreglo);
//   }
// }
//
// square(array);


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6
// let array = [2, 4, 6];
const array = [-3, 2, -8, 12, 5];
// const array = [ 1, 2, 3, 4, 5];

// declara la funcion y ejecuta el código

const square = array => {
  const operation = array.map(array => {
    if (array > 0 || array % 2 == 0) {
      return array*array
    } else {
      return array
    }
  });
  console.log(operation);
};
  // escribe tu código aqui...

square(array);








// ejecuta la funcion
