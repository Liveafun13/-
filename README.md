Задание 1
МЕНЯЕТ МЕСТАМИ ЭЛЕМЕНТЫ

const swap = (array) =>
{
    let i = array.length-1;
    let result = [];
    
    if(i < 1)
    
    {
        return array;
    }
    
    result = array[0];
    array[0] = array[i];
    array[i] = result;
    
    return array;
}

let array = ["one", "two", "three"];
console.log(swap(array));


2 Задание
функцию, которая извлекает из массива элемент по указанному индексу

const get = (array, index, defaultvalue = null) =>
{
    if (index >= 0 && index < array.length) {
        return array[index];
    }
 
    else{
        return defaultvalue;
    }
}

let array = ["one", "two", "three"];
console.log(get(array,1));


3 задание 
Эта функция должна возвращать новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс.

const addPrefix = (array, prefix) =>
{
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[i] = prefix + " " + array[i];
    }
    return result;
}

let array = ["one", "two", "three"];
console.log(addPrefix(array,"MR"));


4 Задание
Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке

const reverse = (array) =>
{
    let result = [];
    let b = 0;
    
    for(let i = array.length-1; i >= 0; i--){
        result[b] = array[i];
        b++;
    }
    
     for(let i = 0; i < array.length; i++){
         array[i] = result[i];
     }
     
    return array;
}

let array = ["one", "two", "three"];
console.log(reverse(array));


5 Задание
Она должна высчитывать сумму всех элементов массива, которые делятся без остатка на три.

const calculateSum = (array) =>
{
    let result = 0;
    if(array.length < 1){
        return null;
    }
    else{
    for(let i = 0; i < array.length; i++){
        if(array[i] % 3 === 0){
            result = result + array[i];
        }
    }
    return result;
}
}
let array = [ 2,0,17,3,9,15,4 ];
console.log(calculateSum(array));


6 Задание
Высчитывает среднее арифметическое элементов переданного массива

const calculateSum = (array) =>
{
    let result = 0;
    if(array.length <= 0){
        return null;
    }
    else{
    for(let i = 0; i < array.length; i++){
        result = result + array[i];
    }
    return result / array.length;
}
}
let array = [ 36,37.4,39,41,36.6 ];
console.log(calculateSum(array));


7 Задание
Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку.
При отсутствии элементов в массиве функция возвращает пустую строку.

const buildDefinitionList = (array) =>
{
    let result = "";
    let htm = "<dl>";
    if(array.length < 1){
        return null;
    }
    else{
       for(let i = 0; i < array.length; i++){
           result += htm + "<dt>" + array[i][0] + "</dt>" + "<dd>" + array[i][1] + "</dd>" + "</dl>" + "\n";
       }
    }
    return result;
}

let array = [["Блямда","Выпуклость,утолщение на поверхности чего либо"], ["Бобр","Животное из отряда грызунов"]];
console.log(buildDefinitionList(array));


8 Задание
функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%!

const makeCensored = (text, censored) => {
    let result = "";
    let opa = "#$%@";
    let textArr = text.split(" ");
    for(let i = 0; i < textArr.length; i++) {
        if(censored.includes(textArr[i])) {
            textArr[i] = opa;
        }
        result += textArr[i] + " ";
    }
return result;
}

let text = "Я получил силу, которая и не снилась моему отцу";
console.log(makeCensored(text, "отцу"));


9 Задание
которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. 
Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !.

const countU = (str) => {
    let result = "";
    let chrs = 0;
    for(let i = 0; i < str.length; i++) {
        if(result.indexOf(str[i]) === -1) {
            result += str[i];
            chrs++;
        }
    }
return chrs;
}

let str = "you know nothing jhon snow";
console.log(countU(str));


10 задание
которая "нормализует" данные переданного урока

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

 const nomalize = (lesson) => {
    letresult = "";
    lesson.name = capitalize(lesson.name);
    lesson.descprition = lesson.descprition.toLowerCase();
    return lesson;
}

let lesson = {
    name: "амОГуС",
    descprition: "АБОБУС",
};
console.log(nomalize(lesson));


11 задание
Функциякоторая принимает на вход массив чисел и возвращает новый, состоящий из элементов, 
у которых такая же чётность, как и у первого элемента входного массива.

const getSameParity = (arr) =>{
let result = [];

if(arr.length === 0){
  return arr;
}

else{
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === arr[0] % 2)
    {
      result.push(arr[i]);
    }
  }
  return result;
}
};

let arr = [1,2,3];

console.log(getSameParity(arr))


12  задание
функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.
const getTotalA = (wallet, money) =>{
let result_num = 0;
  for(let i = 0; i < wallet.length; i++){
    let result_val = wallet[i];
    if(result_val.slice(0,3) === money){
      result_num += wallet[i].slice(3) * 1;
    }
  }
return result_num;
};

let arr = ["eur 10", "usd 1", "usd 10","rub 50", "usd 5"];

console.log(getTotalA(arr, "usd"))



13  задание
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его.

const getDistance = (pointA, pointB) => {
  const xDistance = pointA[0] - pointB[0];
  const yDistance = pointA[1] - pointB[1];
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

const getTotalA = (locations, currentP) =>{
  let result;
  let result_point;
  let result_name;
  
  if(locations === null){
    return null;
  }
    
  else{
    for(let i = 0; i < locations.length; i++){
      let points = locations[i];
      let point = points[1];
      let name_l = points[0];
      
      result = getDistance(point, currentP);
      
      if(result < 99999999){
        result_name = name_l;
        result_point = point;
      }   
    }
  }
  return result_name;
};

let current = [5,5];
let arr = [
  ["Park",[10,5]],
  ["Sea",[1,3]],
  ["Museum",[8,4]],
];

console.log(getTotalA(arr, current))


14  задание
Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его

const getMax = (arr) =>{
  let result = arr[0];
  if(arr === null){
    return arr;
  }
  else{
    for(const i of arr){
      if(result < i){
        result = i;
      }
    }
  }
  return result;
};

let arr = [1,10,8,7];

console.log(getMax(arr))


15  задание
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает объект, соответствующий JSON из файла example.json в этом упражнении.
const exampleObject = () => {
  return {
    "name": "John Doe",
    "age": 35,
    }
};

