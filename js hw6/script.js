/**
 * 
 * Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.
2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.
3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).
 */
console.log('Задание 1');
function replace(str) {
    return str.replaceAll('@', '!');
}
console.log(replace('aaa@bbb@ccc'));

function replace2(str) {
    return str.replace(/@/g, '!');
}
console.log(replace2('aaa@bbb@ccc'));

console.log('Задание 2');
let date2 = '2025-12-31';
let rez = date2.split('-').reverse().join('/');
console.log(rez);

console.log('Задание 3');
function getWords1(str) {
    return str.slice(-15, -1);
}
console.log(getWords1('Я учу javascript!'));

function getWords2(str) {
    return str.substring(2, 16);
}
console.log(getWords2('Я учу javascript!'));

function getWords3(str) {
    return str.substr(2, 14);
}
console.log(getWords3('Я учу javascript!'));

console.log('Задание 4');
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
let sqrt = Math.sqrt(sum);
console.log(sqrt);

console.log('Задание 5');
function calc(a, b) {
    c = Math.abs(a-b);
    return c;
}

console.log(calc(3, 5));
console.log(calc(6, 1));

console.log('Задание 6');

/**
 * Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).
 */

var date = new Date();
function addNumber(num) {
    if (num <= 9) {
      return num = '0' + num;  
    } else {
        return num;
    }
}
var newDate = addNumber(date.getDate()) + '.' + addNumber(date.getMonth() + 1) + '.' + date.getFullYear();
var numbers = addNumber(date.getHours()) + ':' + addNumber(date.getMinutes()) + ':' + addNumber(date.getSeconds());
console.log(numbers + ' ' + newDate);


//6
/*let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let month = date.getMonth();
let opt = {
    
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
}
console.log(date.toLocaleString('ru', opt));

console.log(month);
function two(month){
    if(month < 100) console.log('0' + month);
}
two(month);*/


console.log('Задание 7');
function getStr(str) {
   let regExp = /ab+a/gi;
   let rez = str.match(regExp);
   return rez;
}
console.log(getStr('aa aba abba abbba abca abea'));


/**
 * Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.
 */
console.log('Задание 8');
function checkTel(tel) {
    let rightTel = /[+]*[0-9]{0,3}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/gi;
    //let rightTel = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    console.log(rightTel.test(tel));
}
checkTel('+375(29)358-98-89');
checkTel('(123) 456-7890')

console.log('Задание 9');
const emailTest = (mail) =>{
    const regExp = /^[a-z]{1}[a-z0-9_\.\-]{1,}@[a-z]{1}[a-z0-9_\.\-]{1,10}\.[a-z]{2,11}$/gi;
    return regExp.test(mail);
}
console.log(emailTest('ящик@почта.бел'));
console.log(emailTest('user_top@yandex.ru'));
console.log(emailTest('t1@.r'));

console.log('Задание 10');
/**
 * @param {string} url
 */
const adress = (url) => {
    const regExp =
        /(https?:\/\/[a-z][a-z0-9]+(?:\.[a-z0-9]+)*\.[a-z]{2,11})(\/(?:[^#\?\s])+)?(\?[^#]+)?(#\w+)?/gi;
    let group = regExp.exec(url) || [];

    return [...group].filter((item, index) => (index !== 0 ? item : null));
    /**
     * function(item, index) {
     *  if (index !== 0) {
     *      return item;
     *  } else {
     *      return null;
     *  }
     * }
     */
};
console.log(adress('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));