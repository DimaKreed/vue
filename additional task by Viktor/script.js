//Потрібно знайти чи одне слово складається з тих самих букв шо друге. Букви перевикорситосуватись не можуть.
// Ніяких пробілів, цифер і так далі. Тільки букви малого регістру
function isAnagram(str1,str2) {
    return (str1.split("").sort((a, b) => (a < b) ? -1 : 1).join("") === str2.split("").sort((a, b) => (a < b) ? -1 : 1).join(""));
}
//Треба знайти чи перший масив має в собі квадрати іншого масиву. Порядок циферок не важливий. І якщо це так, то вивести true, якщо ні, вивести false
function isSquare(nums1,nums2){
     if (nums1.length!==nums2.length) return false;
    else {
         let counter=0;
         for (let i = 0; i < nums1.length; i++) {
             if (nums1.map(value=>value*value).sort((a, b) => a-b)[i]===nums2.sort((a, b) => a-b)[i]) counter++;
         }
         return (counter===nums1.length);
         }
     }

console.log(isSquare([1,2,3],[9,1,4]));
console.log(isSquare([2,1,2],[1,1,4]));
console.log(isSquare([1,2,3,5],[25,9,1,4,4]));



console.log(isAnagram('dima','aimd'));
console.log(isAnagram('okten','token'));
console.log(isAnagram('test','rest'));



//Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".
//
// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд.
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !


// function sleep(ms){
//   return new Promise(resolve => setTimeout(resolve,ms));
// }


 async function printMachine(string)
 {
   let p=document.createElement("p");
   document.body.appendChild(p);
   string=string.split('');
   let res=p.innerText;
   let i=0;
   while (i<string.length)
{
  res+=string[i];
  p.innerText=res;
  i++;
  await new Promise(resolve => setTimeout(resolve,100+Math.random()*400));
    //await sleep(100+Math.random()*400)
}

 }

(async  () =>
  {
    await printMachine('Hi I am Dima ')
    await printMachine("And I'm studying hard on JS courses, because I wanna be a cool developer");
  }
)()

//Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

function printFrom_AtoB(a,b)
{
  // if(a===b) console.log('nums are equal');
  //  if(a<b)
  // {
  //   for (let i = a; i <= b; i++) {
  //     console.log(i);
  //   }
  // }
  // if(a>b)
  //   {
  //   for (let i = a; i>=b; i--)
  //   {
  //     console.log(i);
  //   }
  // }
 if(a<b){
   printFrom_AtoB(a,b-1);
   console.log(b);
 }
 else if(a>b)
 {
   console.log(a)
   printFrom_AtoB(a-1,b)
 }
 else console.log(a);
}

printFrom_AtoB(10,3);

//Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function isPowOF2(num)
{
  if(num===1) return 'yes';
  else if(num>1) {num/=2; return isPowOF2(num)}
  else if(num<1) return 'no';
}

console.log(isPowOF2(64));

//Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.

function sumOfDigitsInNumber(num,res=0) {
  if(num<10)
  {
    return res+num;
  }
  else{
     res+=num%10;
     num=Math.floor(num/10);
     return sumOfDigitsInNumber(num,res)

    }
}
console.log(sumOfDigitsInNumber(123456));


//Цифры числа справа налево
// Дано натуральное число N.
// Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.
function reverseNumber(num,res='') {
  if(num<10)
  {
    return +(res+num);
  }
  else{
    res+=num%10;
    num=Math.floor(num/10);
    return reverseNumber(num,res)
  }
}

console.log(reverseNumber(1234237838))

//Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

function isPalindrom(str,i=0,reversedWord='') {
   if (i===str.length){
     return str===reversedWord;
   }
   else{
     reversedWord+=str[str.length-1-i];
     i++;
     return isPalindrom(str,i,reversedWord);
   }
}

console.log(isPalindrom('momjjmom'))
console.log(isPalindrom('dima'));

//Вывести нечетные числа последовательности
// Дана последовательность натуральных чисел (одно число в строке), завершающаяся числом 0. Выведите все нечетные числа из этой последовательности, сохраняя их порядок.
// В этой задаче нельзя использовать глобальные переменные и передавать какие-либо параметры в рекурсивную функцию. Функция получает данные, считывая их с клавиатуры. Функция не возвращает значение, а сразу же выводит результат на экран.

function oddNumbers() {
  let num=+prompt("Enter string");
    if(num===0) return;
    if(num%2) console.log(num);
    return oddNumbers();
}

oddNumbers();

//Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

function numOf1(str,i=0,counter=0) {
  str.length=str.indexOf('00')+2;
  if(i===str.length) return counter;
  else
    {
      if(+str[i]===1) {counter++;}
      i++;
      return numOf1(str,i,counter);
    }


}
console.log(numOf1('121231 3434341 00'));

//Заданная сумма цифр
// Даны натуральные числа k и s. Определите, сколько существует k-значных натуральных чисел, сумма цифр которых равна s. Запись натурального числа не может начинаться с цифры 0.
// В этой задаче можно использовать цикл для перебора всех цифр, стоящих на какой-либо позиции.

function sumOfNumbersKEqualS(k,s) {
  let counter=0;
  for (let i = 0; i < Math.pow(10,k); i++) {
    if(sumOfDigitsInNumber(i)===s)
      counter++;
  }
  return counter;
}

console.log(sumOfNumbersKEqualS(2, 2));//2 11 20 - к-значні(в цьому випадку двохзначні),в яких сума цифр дорівнює s(2)

//Без двух нулей
// Даны числа a и b. Определите, сколько существует
// последовательностей из a нулей и b единиц, в которых никакие два нуля не стоят рядом.
 function zeroAndOnes (zero,one) {
  if (zero> one+1) return 0;
  if (zero==0 || one==0) return 1;
  return zeroAndOnes(zero,one-1)+zeroAndOnes(zero-1,one-1);
}

console.log(zeroAndOnes(2, 2));