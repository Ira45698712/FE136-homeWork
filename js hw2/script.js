let yourName = prompt('Ваше имя');
document.write(`Маня зовут  ${yourName}.`);
let age = prompt('Ваш возраст');
document.write(` Мне ${age}.`);
let city = prompt('Ваш город');
let company = prompt('В какой компании Вы работаете');
document.write(` Я проживаю в городе ${city} и работаю в компании ${company}.`);
let phone = prompt('Ваш телефон');
let email = prompt('Ваш email');
document.write(` Мои контактные данные ${phone} и ${email}.`);


/*Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.». */

let year = 2023 - age;
document.write(`<br \/> ${yourName} родился/родилась в ${year} году.`);



/*Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */

let str = '2 0 5 6 5 5'

if(+s[1] +s[2] + +s[3] === +s[4] + +s[5] + +s[6]){
    console.log('Да');
}else{
    console.log('Нет');
}

/*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3. */
let a1 = prompt('Введите значение a')
if (a1 > 0) console.log('Верно');

/*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат. */
let a = 10;
let b = 2;
let sum = a + b;
let raznost = a - b;
let proizv = a * b;
let chastnoe = a / b;
console.log(sum, raznost, proizv, chastnoe);
if (sum > 1) console.log(sum ** 2);

/*Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'. */
if(a > 2 && a < 11 || b == 6 && b < 14){
    console.log('Верно');
}else{
    console.log('Неверно');
}

/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую). */
let n = prompt('Введите число от 0 до 59')
if (n < 15){
    console.log('Первая четверть часа');
}else if (n < 30){
    console.log('Вторая четверть часа');
}else if (n < 45){
    console.log('Третья четверть часа');
}else{
    console.log('Четвертая четверть часа');
}


/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью). */
let day = prompt('Введите число от 1 до 31')
if (day < 10){
    console.log('Первая декада');
}else if (day < 20){
    console.log('Вторая декада');
}else{
    console.log('Третья декада');
}

/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно. */
let someDay = prompt('Введите любое число для перевода');
let someYear = someDay / 365;
if(someDay > 365){
    console.log(someYear);
}else {
    console.log('Меньше года');
}
let someMonth = someDay / 31;
if(someDay > 31){
    console.log(someMonth);
}else {
    console.log('Меньше месяца');
}
let someWeek = someDay / 31;
if(someWeek > 7){
    console.log(someWeek);
}else {
    console.log('Меньше недели');
}
let someHour = someDay * 24;
console.log(someHour);
let someMinute = someDay * 24 * 60;
console.log(someMinute);
let someSecond = someDay * 24 * 60 * 60;
console.log(someSecond);


/*Напишите скрипт, который по введенному дню в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch. */

let days = prompt('Введите день от 1 до 365');
if(days < 31){
    console.log('Январь');
} else if(days < 60){
    console.log('Февраль');
}else if(days < 91){
    console.log('Март');
}else if(days < 121){
    console.log('Апрель');
}else if(days < 152){
    console.log('Апрель');
}else if(days < 182){
    console.log('Июнь');
}else if(days < 213){
    console.log('Июль');
}else if(days < 244){
    console.log('Август');
}else if(days < 274){
    console.log('Сентябрь');
}else if(days < 305){
    console.log('Октябрь');
}else if(days < 335){
    console.log('Ноябрь');
}else if(days < 366){
    console.log('Декабрь');
}
switch (days) {
    case 'Январь':
    case 'Февраль':
    case 'Декабрь':
        console.log('Зима');
    break;
    case 'Март':
    case 'Апрель':
    case 'Май':
        console.log('Весна');
    break;
    case 'Июнь':
    case 'Июль':
    case 'Август':
        console.log('Лето');
    break;
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        console.log('Осень');
    break;
    default:
        break;
}