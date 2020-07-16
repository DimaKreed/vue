//- создать массив с 20 числами.
//так як метод сорт змінює масив то я створю такий самий, щоб його сортувати а початковий не мутував

let nums=[],nums2=[];
for (let i = 0; i < 20; i++) {
    nums[i]=Math.floor(Math.random()*20+0.5);
    nums2[i]=nums[i];
}
console.log(nums);
//-- при помощи метода sort и колбека  отсортировать массив.
let sort=nums2.sort((a, b) => a-b);
console.log(sort);
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let reverseSort = nums2.sort((a, b) => b-a);
console.log(reverseSort);
//-- при помощи filter получить числа кратные 3
let multiple3 = nums.filter(value => !(value%3));
console.log(multiple3);
//-- при помощи filter получить числа кратные 10
let multiple10 = nums.filter(value => !(value%10));
console.log(multiple10);
//-- перебрать (проитерировать) массив при помощи foreach()
nums.forEach(value => console.log(value));
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let multiplyBy3 = nums.map(value => value*3);
console.log(multiplyBy3);


//- создать массив со словами на 15-20 элементов.
//так як метод сорт змінює масив то я створю такий самий, щоб його сортувати а початковий не мутував
let str=['Hi','I','am','studying','Js','now','It','is','interesting','I','like','it','very','much','Hope','you','like','it','too'],str2=[];
for (let i = 0; i < str.length; i++) {
str2[i]=str[i];
}
console.log(str);
//-- отсортировать его по алфавиту в восходящем порядке.
let strSort = str2.sort((a, b) => {
    if(a.toLowerCase()<b.toLowerCase()) {return -1}
    else { return 1}
})
console.log(strSort);

//-- отсортировать его по алфавиту  в нисходящем порядке.
let strSortReverse = str2.sort((a, b) => {
    if(a.toLowerCase()>b.toLowerCase()) {return -1}
})
console.log(strSortReverse);

//-- отфильтровать слова длиной менее 4х символов
let less4 = str.filter(value => value.length>4);
console.log(less4);
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let stringStrong = str.map(value => value+'!')
console.log(stringStrong);

//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
//!!!!!!!!!!!!!!! я закоментував, бо сорт мутуэ масив і відповідно в консольку всеодно б вивело останній сорт даного масиву


//- відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsers = users.sort((a, b) => a.age-b.age);
// console.log(sortUsers);

//за спаданням
// let sortUsersReverse = users.sort((a, b) => b.age-a.age);
// console.log(sortUsersReverse);


//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortUsersByNameLength = users.sort((a, b) => a.name.length-b.name.length);
// console.log(sortUsersByNameLength);

//reverse
// let sortUsersByNameLengthReverse = users.sort((a, b) => b.name.length-a.name.length);
// console.log(sortUsersByNameLengthReverse);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let usersWithId = users.map((value, index) => {value.id=index+1;return value});
console.log(usersWithId);

//- відсортувати його за індентифікатором
console.log(usersWithId.sort((a, b) => a.id - b.id));

//-- наисать функцию калькулятора с 2мя числами и колбеком
let x;
function calculator2Nums(a,b,callback) {
  x= callback(a, b);
}
//example of usage
calculator2Nums(12,45,function (a,b) {
return a+b*2;
})
console.log(x);

//-- наисать функцию калькулятора с 3мя числами и колбеком
let y;
function calculator3Nums(a,b,c,callback) {
    y=callback(a,b,c);
}

//example of usage
calculator3Nums(1,4,5,function (a,b,c,) {
    return (a+b-c*3)*b;
});

console.log(y);




