//RESUELVE LOS EJERCICIOS AQUÍ
//Destructuring arrays//
//Ejercicio 1//

const empleados1 = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [luis, ana, andrea] = empleados1;

console.log(ana);
console.log(luis);
console.log(andrea);

//Ejercicio 2//
const empleados2 = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [{ email }] = empleados2.filter(({ name }) => name === "Luis");
console.log(email);

//Ejercicio 3//
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log(a);

//Ejercicio 4//
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

//Ejercicio 5//
//Spread/rest metodo//

function sumEveryOther(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

//Ejercicio 6//

function addOnlyNums(...args) {
  const nums = args.filter((arg) => typeof arg === "number");
  return nums.reduce((acc, num) => acc + num, 0);
}

addOnlyNums(1, "perro", 2, 4);

//Ejercicio 7//

function countTheArgs(...args) {
  return args.length;
}

countTheArgs("gato", "perro");
countTheArgs("gato", "perro", "pollo", "oso");

//Ejercicio 8//

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

//Ejericicio 9//

function onlyUniques(...args) {
  return args.filter((item, index, arr) => arr.indexOf(item) === index);
}
onlyUniques("gato", "pollo", "cerdo", "cerdo");
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8);

//Ejercicio 10//

function combineAllArrays(...arrays) {
  return arrays.reduce((acc, arr) => [...acc, ...arr], []);
}
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]);
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);

//Ejercicio 11//

function sumAndSquare(...nums) {
  return nums.reduce((acc, curr) => acc + curr ** 2, 0);
}
