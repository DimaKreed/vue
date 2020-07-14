//1
let str1='hello';
let str2='owu';
let str3='com';
let str4='ua';
let num1=1;
let num2=10;
let num3=-999;
let num4=123;
let num5=3.14;
let num6=2.7;
let num7=16;
let bool1=true;
let bool2=false;
console.log(str1,str2,str3,str4,num1,num2,num3,num4,num5,num6,num7,bool1,bool2);
document.write(str1 +' '+ str2+' '+ str3+' '+ str4+' '+ num1+' '+ num2+' '+ num3+' '+ num4+' '+ num5+' '+ num6+' '+ num7+' '+ bool1+' '+ bool2+'\n');
alert(str1 +' '+ str2+' '+ str3+' '+ str4+' '+ num1+' '+ num2+' '+ num3+' '+ num4+' '+ num5+' '+ num6+' '+ num7+' '+ bool1+' '+ bool2);
//2
 str1='q';
 str2='w';
 str3='we';
 str4='er';
 num1=Math.random();
 num2=Math.random();
 num3=Math.random();
 num4=Math.random();
 num5=Math.random();
 num6=Math.random();
 num7=Math.random();
 bool1='I have changed boolean into string';
 bool2=354;
 console.log(str1,str2,str3,str4,num1,num2,num3,num4,num5,num6,num7,bool1,bool2);
 document.write(str1 +' '+ str2+' '+ str3+' '+ str4+' '+ num1+' '+ num2+' '+ num3+' '+ num4+' '+ num5+' '+ num6+' '+ num7+' '+ bool1+' '+ bool2+'\n');
 alert(str1 +' '+ str2+' '+ str3+' '+ str4+' '+ num1+' '+ num2+' '+ num3+' '+ num4+' '+ num5+' '+ num6+' '+ num7+' '+ bool1+' '+ bool2);
 //3
const numConst1=1;
const numConst2=2;
const numConst3=3;

const strConst1='qwerty';
const strConst2='uiop';
const strConst3='asdfghj';

console.log(numConst1,numConst2,numConst3,strConst1,strConst2,strConst3);
document.write(numConst1+' '+numConst2+' '+numConst3+' '+strConst1+' '+strConst2+' '+strConst3+'\n');
alert(numConst1+' '+numConst2+' '+numConst3+' '+strConst1+' '+strConst2+' '+strConst3);
//4
let name=prompt("Enter your name");
let surname=prompt("Enter your surname");
let patronymic=prompt("Enter your patronymic");

console.log(name,surname,patronymic);
document.write(name+' '+surname+' '+patronymic+'\n');
alert(name+' '+surname+' '+patronymic);
//5
personMe=name+' '+surname+' '+patronymic;
//6
let nameMom=prompt("Enter your mom's name");
let surnameMom=prompt("Enter your mom's surname");
let patronymicMom=prompt("Enter your mom's patronymic");
let personMom=nameMom+' '+surnameMom+' '+patronymicMom;

let nameDad=prompt("Enter your dad's name");
let surnameDad=prompt("Enter your dad's surname");
let patronymicDad=prompt("Enter your dad's patronymic");
let personDad=nameDad+' '+surnameDad+' '+patronymicDad;

let nameBro=prompt("Enter your bro's name");
let surnameBro=prompt("Enter your bro's surname");
let patronymicBro=prompt("Enter your bro's patronymic");
let personBro=nameBro+' '+surnameBro+' '+patronymicBro;

console.log(personMe,personMom,personDad,personBro);
document.write(personMe+' '+personMom+' '+personDad+' '+ personBro+'\n');
alert(personMe+' '+personMom+' '+personDad+' '+ personBro);
//7
console.log(+prompt("Enter first number"),+prompt("Enter second number"),+prompt("Enter third number"));
//8
let result=parseInt(prompt("Enter number1"))+parseInt(prompt("Enter number2"))+parseInt(prompt("Enter number3"))+parseInt(prompt("Enter number4"));
console.log(result);
//9
result=parseFloat(prompt("Enter floating-point number1 "))+parseFloat(prompt("Enter floating-point number2"))+parseFloat(prompt("Enter floating-point number3"));
console.log(result);
//10
result=Math.round( parseFloat(prompt("Enter floating-point number1 (round) "))+parseFloat(prompt("Enter floating-point number2(round)"))+parseFloat(prompt("Enter floating-point number3 (round)")));
console.log(result);
//11
let numberInDegree=+prompt("Enter number to make it in degree");
let degree=+prompt("Enter degree");
console.log(Math.pow(numberInDegree,degree));

//12
let a = 100; let b = '100'; let c = true; let d = undefined;
console.log(typeof(a),typeof(b),typeof(c),typeof(d));

//13
let A1=5<6;//true
let A2=5>6;//false
let A3=5==6;//false
let A4=5>=6;//fasle

let B1=10==10;//true
let B2=10>=10;//true
let B3=10<10;//false
let B4=10>10;//false
let B5=10!=10;//false

let C1=123==='123';//false
let C2=123=='123';//true

console.log(A1,A2,A3,A4,B1,B2,B3,B4,B5,C1,C2);

//28

// console.log(132 > 100 && 45 < 12 ); //f
// console.log(34 > 33 && 23 < 90 ); //t
// console.log(99 > 100 && 45 > 12 ); //f
// console.log(132 > 100 || 45 < 12 ); //t
// console.log(111 > 11 || 45 < 111 ); //t
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//t
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//t
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//f
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//t
// console.log(!!'-1');//t
// console.log(!!-1);//t
// console.log(!!'0');//t
// console.log(!!'null');//t
// console.log(!!'undefined');//t
// console.log(!!(3/'owu'));//f
// console.log((111 > 11 || 45 < 111) ||  !!'0');//t
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//f

//CLASS

//1
let str="Привет";
let num=123;
let flag=true;
let txt='true';
console.log(typeof(str),typeof(num),typeof(flag),typeof(txt));

//2
let a1=5+3;
let a2=5-3;
let a3=5*3;
let a4=5/3;
let a5=5%3;

//3
let a6=5%3;
let a7=3%5;
let a8=5+'3';
let a9='5'-3;
let a10=75+'kg';
console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)

//4
let height=23;
let width=10;
let s=height*width;
console.log(s);

//5
let heightC=10;
let dC=4;
let V=(Math.PI/4)*Math.pow(dC,2)+heightC;
console.log(V);

//6
let n=3;
let m=4;
let k=Math.pow(n**2+m**2,0.5);
console.log(k); 

//7
str='Hello world';
document.write(str);

//8
alert('Varchuk Dmytro Antonovych \n19 \nMy hobby is numismatic' )

//9
str1='Who';
str2='are';
str3='you?';
let concatenation=str1+str2+str3;
document.write(concatenation);

// 10
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); 205 бо приводить до типу стрінг
// document.write(str - a + "<br/>"); 15 бо приводиить до типу інт
// document.write(str * "2" + "<br/>"); 40 бо перетворює стрінги в інти
// document.write(str / 2 + "<br/>"); 10 бо переводить в інт

//11
// parseInt("3.14")  3
//     parseInt("-7.875") -7
//     parseInt("435") 435
//     parseInt("Вася") NaN

//12
let STR = prompt("Enter something", "ho-ho")
    console.log(STR);

//13
alert(+prompt('First Number')+ +prompt('Second Number'));

//14
let userName=prompt("Вкажіть ваше ім'я");
let userSurname=prompt("Вкажіть ваше прізвище");
let userAge=+prompt("Вкажіть ваш вік ");
alert("Доброго вечора "+userName+" "+userSurname+",мої привітання що вам "+userAge);

//DODATKOVE

//1
let number_one=+prompt("Enter 1 number");
let number_two=+prompt("Enter 2 number");
let number_three=+prompt("Enter 3 number");
let temp;

if(number_one>number_two)
{
temp=number_one;
number_one=number_two;
number_two=temp;
}
 
if(number_one>number_three)
{
temp=number_one;
number_one=number_three;
number_three=temp;
}

if(number_two>number_three)
{
temp=number_two;
number_two=number_three;
number_three=temp;
}
 
console.log(number_one,number_two,number_three);

//2
if(confirm('It is green?'))
{
    console.log('go');
}
else if(confirm('Is is yellow?'))
{
    console.log('wait');
}
else if(confirm('Red?'))
{
    console.log('stop');
}
else{
    alert('traffic lights is crashed');
    console.log('Do what you want.');
}

//3

if(confirm('It is green?'))
{
    if(confirm("Are there any cars?"))
    {console.log('wait till intruders go away');}
    else{console.log('go');}
    
}

else if(confirm('Is is yellow?'))
{
    if(confirm("Are there any cars?"))
    {console.log('wait');}
    else{console.log('still wait');}
}
else if(confirm('Red?'))
{
    if(!confirm("Are there any cars?"))
    {console.log('stop anyway ');}
    else{console.log('stop.DO NOT MOVE');}
}
else{
    alert('traffic lights is crashed');
    console.log('Do what you want.');
}