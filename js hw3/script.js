document.write("Задание 1 Часть 1 <br/>");
for (let i = 1; i <= 50; i++) {
  document.write(i + "<br/>");
}

document.write("Задание 1 Часть 2 <br/>");
for (let i = 35; i >= 8; i--) {
  document.write(i + "<br/>");
}

document.write("Задание 2 <br/>");
index = 89;
while (index >= 11) {
  document.write(index + "<br/>");
  index--;
}

document.write("Задание 3 <br/>");
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
document.write(sum + "<br/>");

document.write("Задание 4 <br/>");
let c = 5;
let sumNumbers = 0;
for (let i = 1; i <= c; i++) {
  sumNumbers = 0;
  for (let j = 1; j <= i; j++) {
    sumNumbers += j;
  }
  document.write("Сумма " + i + "=" + sumNumbers + "<br/>");
}

document.write("Задание 5 while <br/>");
let v = 8;
while (v <= 56) {
  if (v % 2 == 0) {
   document.write(v + '<br/>');
  }
  v++;
}
document.write("Задание 5 for <br/>");
for(let v = 8; v <= 56; v++){
    if (v % 2 == 0) {
        document.write(v + '<br/>');
    }
}

document.write("Задание 6 <br/>");
document.write('<div style="display: flex; gap: 40px; flex-wrap: wrap;">');
 for (let i = 2; i < 11; i++){
     document.write('<div>');
     for (let j = 2; j < 11; j++){
         document.write(`${i} * ${j} = ${i * j} <br/>`);
     }
     document.write('</div>');
 }
 document.write('</div>');

 document.write("Задание 7 <br/>");
 let n = 1000;
 sum = 0;
 while(n >= 50){
    n = n/2;
    sum++; 
 }
 document.write(n + '<br/>');
 document.write(sum + '<br/>');


 document.write("Задание 8 <br/>");
 let sumNumber = 0;
 let kol = 0;
 let average = 0;
 while(true){
    let number = +prompt('Введмите число');
    if(number == 0 && number == ''){
        break;
    } else{
        sumNumber += number;
        kol++;
        average = sumNumber / kol;
        continue;
    }
 }
 document.write(sumNumber + '<br/>');
 document.write(average + '<br/>');


 document.write("Задание 9 <br/>");
 let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let max = -Infinity;
let min = Infinity;
let bufer = '';
for(let i = 0; i <= str.length; i++){
    if(str[i] !== ' '){
        bufer += str[i];
    }else{
        bufer = +bufer;
        if(bufer > max) max = bufer;
        if(bufer < min) min = bufer;
        bufer = '';
    }
}
document.write(`Max - ${max}` + '<br/>');
document.write(`Min - ${min}` + '<br/>');


document.write("Задание 10 <br/>");
let num = prompt('Введите число');
let sumNum = 0;
let count = 0;
let reverse = '';

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    sumNum += +num[i];
   count += 1;
   reverse = num[i] + reverse;  
}
document.write(`${num}; ${sumNum}; ${count}; ${reverse}`);