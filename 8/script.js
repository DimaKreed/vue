//- створити функцію яка виводить масив
let logArray=arr=>{for(let elements of arr){
    console.log(elements);}}



//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let fillArrayRandom=arr=>{
    arr=[];
        for (let i = 0; i < 10; i++) {
           arr[i]=Math.round(Math.random()*100+ 0.5)
        }
        logArray(arr);
    }

let myArr=[];
fillArrayRandom(myArr);




//- створити функцію яка приймає три числа та виводить та повертає найменьше.
let minFrom3Nums=(a=0,b=0,c=0)=>
{console.log('min is '+ Math.min(a, b, c));
return Math.min(a,b,c);}
minFrom3Nums(1, 7, 4)




//- створити функцію яка приймає три числа та виводить та повертає найбільше.
let maxFrom3Nums=(a=0,b=0,c=0)=>{
    console.log('max is '+Math.max(a,b,c));
    return Math.max(a,b,c);
}
maxFrom3Nums(6,123,9);



//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function returnMin_LogMax(){
            console.log('Max value is:'+ Math.max.apply(null,arguments));
        return Math.min.apply(null,arguments);
    }
console.log(returnMin_LogMax(1, 5, 7, 8, 3, 3, 5, 45, 576, 7878, 2, -12));



//- створити функцію яка повертає найбільше число з масиву
function returnMax(){return Math.max.apply(null,arguments)}
console.log(returnMax(1, 5, 4, 76, 78, 78, 56, 34, 23, 3445, 76));




//- створити функцію яка повертає найменьше число з масиву
function returnMin(){return Math.min.apply(null,arguments)}
console.log(returnMin(1, 4, 5, 7, 7, 4, 445, 56, 56, 76, 56433434, 776, -677, -45, -67));



//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumArrayValues(arr=[0]){let sum=0;
    for (const values of arr) {
        sum+=values;
    } return sum;
}
console.log(sumArrayValues([1, 56, 888, 334, 88788, 23223, 98]));



//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmeticMean=(arr)=>sumArrayValues(arr)/arr.length;
console.log(arithmeticMean([1, 2,3,4,5]));




//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let numOfObjects=(arrOfObj)=>arrOfObj.length;


let arrayOfObjects = [{
    name: 'vasya',
    age: 31,
    skills:['driver','householder']
}, {
    name: 'petya',
    age: 30,
    skills: ['1 skill','2 skill','3 skill']
}, {
    name: 'kolya',
    age: 29,
    skills: ['first skill','second skill']
}, {
    name: 'olya',
    age: 28,
    skills: [1,2,3,4,5,6,7]
}];
console.log('there are '+numOfObjects(arrayOfObjects)+' objects in array');







//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
let sumOfKeysInArrayOfObjects=(arrOfObj)=>{
    let sumOfKeys=0;
    for (let i = 0; i < arrOfObj.length; i++) {
        sumOfKeys+=Object.keys(arrOfObj[i]).length;
    }
return sumOfKeys;
}
console.log('there are '+sumOfKeysInArrayOfObjects(arrayOfObjects)+' keys in this array of objects');




//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
let sumOfEqualIndexARRAY=(arr1,arr2)=>{
    let returnArray=[];
    let lessLength=(arr1.length<arr2.length)?arr1.length:arr2.length;
    for (let i = 0; i < lessLength; i++) {
        returnArray[i]=arr1[i]+arr2[i];
    }
    return returnArray;
}
console.log(sumOfEqualIndexARRAY([1, 2, 46, 88, 1,5,6,7,9], [8, 5, 0,1]));







//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let changeNumberInArray=(arr,i)=>{
    if(i>arr.length-1) return 'i>max array index'
    else {arr[i]=i+1;return arr}
    }

console.log(changeNumberInArray([7, 6, 6, 7, 5, 4, 3, 2, 4, 6, 7,], 2));
console.log(changeNumberInArray([7, 6, 6, 7, 5, 4, 3, 2, 4, 6, 7,], 15));






//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let moveZerosToTheEnd=(arr)=>{
   if (arr.length>2&&arr.length<100)
   {
        for(let i=arr.length;i>=0;i--)
        {
            if(arr[i]===0)
            {
                arr.splice(i,1);
                arr.push(0);
            }
        }
        return arr;
    }
   else
       {
           return 'array length <2 or >100'
       }
}
console.log(moveZerosToTheEnd([0,123,334,5,6,0,44445,0,565656,4,676,0,5]));

//- Додає в боді блок з текстом "Hello owu"
let addHelloOwu=()=>{let div=document.createElement('div'); div.innerText='Hello owu';document.body.append(div);}

addHelloOwu();


//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
let addBlockAndText=(block,text)=>{
    let someBlock=document.createElement(`${block}`);
    someBlock.innerText=`${text}`;
    document.body.append(someBlock);
}
//addBlockAndText(div,'text');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

let insertArrayIntoId=(arr,id)=>{
    let idElement=document.getElementById(id);
    for (let i = 0; i < arr.length; i++) {
        let divForEachAuto=document.createElement('div');
        divForEachAuto.innerText=JSON.stringify(arr[i]);
        idElement.appendChild(divForEachAuto);
    }
}


function randomElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
let models=['chevrolet','pegeout','renault','lamborgini','subaru','kia','cherry','mercedes','bmw'];
let yearsProduction=[1997,1998,1999,2000,2003,2015,2012,2010,2018,2019];
let powers=[100,200,300,400,450,525,500];
let colors=['blue','black','white','red','grey'];
console.log('//5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)\n')
let cars=[];
for (let i = 0; i < 10; i++) {
    cars[i]={
        model: randomElement(models), yearProduction: randomElement(yearsProduction),
        power: randomElement(powers), color: randomElement(colors)
    };
}


insertArrayIntoId(cars,'some');

//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів

let concatArrayById=(usersWithId,citiesWithId)=>{
    let returnArray=[];
    for (let i = 0; i < usersWithId.length; i++)
    {   returnArray[i]=usersWithId[i];
        for (let j = 0; j < citiesWithId.length; j++)
        {
            if(usersWithId[i].id===citiesWithId[j].user_id)
            {
                returnArray[i]["address"]=citiesWithId[j];
            }
        }

    }
    return returnArray;
}
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

console.log(concatArrayById(usersWithId, citiesWithId));

//1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


let isNumberDegreeOf2=(num=0)=>{
   num/=2;
    if(num>1)
    {return isNumberDegreeOf2(num);}
    if(num<1)
        return 'NO';
    return  'YES';
};

console.log(isNumberDegreeOf2(32));
console.log(isNumberDegreeOf2(787688));

//3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
 function makingOneLevelArray(arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
            makingOneLevelArray(value, result);
        } else {
            result.push(value);
        }
    }
    return result;
};

let lotOfLevelArray=[1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] ;
console.log(makingOneLevelArray(lotOfLevelArray));

//2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

function makeClone(obj) {
    let clone = {}; // новий обєкт
    for (let prop in obj)
    {
        if (obj.hasOwnProperty(prop)) // Тільки власні ключі
        {
            if ("object"===typeof obj[prop]) // Якщо ключ це обєкт
                clone[prop] = makeClone(obj[prop]); //Знову посилаємо на копіювання
            else
                clone[prop] = obj[prop]; // Якщо ні- то копіюємо
        }
    }
    return clone;
}




//Знайти найменше число з 3 з допомогою if
function  min3Nums(a=0,b=0,c=0) {
    let min=a;
    if (b<min) min=b;
    if(c<min) min=c;
    return min;
}


//Знайти найбільше число з 3 з допомогою if
function  max3Nums(a=0,b=0,c=0) {
    let max=a;
    if (b>max) max=b;
    if(c>max) max=c;
    return max;
}
console.log(min3Nums(7,4,6));
console.log(max3Nums(2,6,4));