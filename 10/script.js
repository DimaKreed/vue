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



