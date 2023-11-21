document.write('Задание 1 </br>');
function getResult(a, b, c){
    return (a - b)/c;
}
document.write(getResult(8, 2, 3) + '</br>')
/**
\Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.
 */
document.write('Задание 2 </br>');
let a = function(number){
    document.write(number ** 2 + '</br>');
    document.write(number ** 3 + '</br>');
}
a(5);

/**
 * Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.
 */
document.write('Задание 3 </br>');
function min(a, b){
    if(a < b){
        return a;
    }else {
       return b
    }
}
let minNumb = min(5, 8);
document.write('Минимальное число: ' + minNumb + '</br>');
function max(a, b){
    if(a > b){
        return a;
    }else {
       return b
    }
}
let maxNumb = min(7, 4);
document.write('Максимальное число: ' + maxNumb + '</br>');

/**
 * Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.
 */
document.write('Задание 4 </br>');
function getMassiv(num1, num2) {
    let arr = [];
    for(let i = num1; i <= num2; i++){
        rez = arr.push(arr[i])
       document.write(rez + '</br>');
    }
}
document.write(getMassiv(5, 9) + '</br>')
/**
 * Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.
 */
document.write('Задание 5 </br>');
function isEven(number){
    if(number % 2 == 0){
        return true
    }else{
        return false
    }
}
let even = isEven(5);
document.write(even + '</br>');

/**
 * Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.
 */
document.write('Задание 6 </br>');
function getArray(array) {
    arr6 = [];
    for(let i = 0; i < array.length; i++){
        if (isEven(array[i])) {
            arr6.push(array[i])
        }
    }
    return arr6
}
document.write(getArray([8, 9, 6, 50]) + '</br>');


document.write('Задание 7 </br>');
/**
 *
 * @param {number} h
 */
function func7(h) {
    for (let i = 1; i <= h; i++) {
      let s = "";
      for (let j = 0; j < i; j++) {
        /*if (arguments[1]) {
          s += arguments[1];
        } else {
          s += i;
        }*/
        s += (arguments[1] !== ' ' && arguments.length > 1) ? arguments[1] : i;
      }
      document.write(s + "</br>");
    }
  }
  func7(7, '0');
  

  document.write('Задание 8 </br>');
  
  function getPiramida() {
    let h = +prompt('Введите высоты пирамиды');
    for(let i = 1; i <= h; i++){
        document.write(`<pre>${(' ').repeat(h -i) + ('*').repeat(i * 2 - 1)}</pre>`)
  }}
  getPiramida();

  document.write('Задание 9 </br>');
  function fib(num){
    if(num <= 1) return num;//провека нужно ли вообще начинать рекурсию
    return fib(num - 1) + fib(num - 2);
}
//fib(3) -> (fib(2) + fib(1)) -> ()
let num = 0;
let array9 = [];
while(1){
    let buff = fib(num);
    num++;
    if(buff >= 1000) break;
    array9.push(buff);

}
document.write(array9 + '/br');
fib(2);

document.write('Задание 10 </br>');
function func10(num){
    if(num <= 9) return num;
    let rez = 0;
    for(let n of num.toString()){
        //преобразов в стрку
    rez += +n; //rez = rez + Number(n)
}
if(rez > 9){
    return func10(rez);
} else{
    return rez;
}
}


/**Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл. */
document.write('Задание 11 </br>');
function func11(massivNumb) {
    document.write(massivNumb + "</br>")
}
func11([1, 2, 3]);
 
document.write('Задание 12' + '<br>');

function f4(str, l){
    for (let i = str.length; i < l; i++){
        str += ' ';
    }
    str = '* ' + str + ' *';
    return str;
}

function f12(name, suraname, lastName, groupNum){
    let title = 'Домашняя работа: «Функции»';
    let subTitle = `Выполнил: студент гр. ${groupNum}`;
    let nameText = `${lastName} ${name} ${suraname}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;  

    title = f4(title, maxStr);
    subTitle = f4(subTitle, maxStr);
    nameText = f4(nameText, maxStr);

    
    let ramka = '*';

    for (let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }

    console.log(`${ramka}\n${title}\n${subTitle}\n${nameText}\n${ramka}`);
}


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 13' + '<br>');

function mail(str){
    let point = str.lastIndexOf('.');
    if (point === str.length - 1 || point === -1 || point === 0) return 'Не почтовый адресс';
    let dog = str.lastIndexOf('@');
    if (dog !== str.indexOf('@')) return 'Не почтовый адресс';
    if (dog === str.length - 1 || dog === -1 || dog === 0 || dog < 3) return 'Не почтовый адресс';
    let defis = str.lastIndexOf('-');
    if (defis === str.length - 1 || defis === 0) return 'Не почтовый адресс';
    let n = str.lastIndexOf('_');
    if (n === str.length - 1 || n === 0) return 'Не почтовый адресс';

    let symbols = `абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!"#$%&'()*+,/:;<=>?[\\]^{|}~ ` ;
    let nameSymbols = '!"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~';
    let nums = '1234567890.';

    for (let i = 0; i < str.length - 1; i++){
        if(str[i] === '.' && str[i + 1] === '.' || 
            str[i] === '@' && str[i + 1] === '.' ||
            str[i] === '.' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '@' ||
            str[i] === '_' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '-' ||
            str[i] === '-' && str[i + 1] === '-' ||
            str[i] === '_' && str[i + 1] === '_' ) return 'Не почтовый адресс';
        if(symbols.includes(str[i])) return 'Не почтовый адресс';
    }

    let name = str.slice(0, dog);

    if(nums.includes(name[0])) return 'Не почтовый адресс';
    for (let i = 0; i < name.length; i++){
        if (nameSymbols.includes(name[i])) return 'Не почтовый адресс';
    }

    let dom = str.slice(point);
    let domName = str.slice(dog, point);

    if(dom.length < 2 || dom.length > 11) return 'Не почтовый адресс';
    if(domName.length < 2 || domName.length > 11) return 'Не почтовый адресс';
    
    return 'Почтовый адресс верен';
}