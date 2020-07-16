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



