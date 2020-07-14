//2-- створити об'єкт (не меньше 5ти властивостей) який описує
//dog
let dog =
{
    name:"Brovko",
    heights:1,
    age:3,
    tail:true,
    breed:"saint bernard"
}
//human
let human =
{
    name:'Dima',
    surname:'Varchuk',
    age:19,
    married:false,
    status:"student",
}
//auto
let Camaro={
    brand:'Chevrolet',
    model:'Camaro',
    year:1960,
    cabriolet:false,
    color:'yellow'

}

//flat
let flat= {
    walls: 4,
    roof: true,
    color: 'green',
    size: 77,
    price: 100000
}

//book
let book=
    {
        author:"j.k.roaling",
        name:"Harry Potter",
        year:1997,
        genre:['fantasy','adventure'],
        number_of_books:7

    }

    //9
console.log('-- Створити масив та вивести його в консоль:\n');
//10
console.log('- з 5 собак\n');
for (let i = 0; i < 5; i++) {
    const dogs=[];
    dogs[i]=dog;
    console.log(dogs[i]);

}
//11
console.log('- 3 5 людей\n')
for (let i = 0; i < 5; i++) {
    const humans=[];
    humans[i]=human;
    console.log(humans[i]);
}
//12
console.log('- з 5 автомобілів\n');
for (let i = 0; i < 5; i++) {
    const cars=[];
    cars[i]=Camaro;
    console.log(cars[i]);
}

//14
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//house
let house={
    walls:{size:'big',color:"red"},
    residents:['Dima','Sasha','Olia',],
    square:256,
    heights:6,
    town:"Kyiv"
}
//driver
let driver={
    favouriteCars:['Opel','Nissan'],
    car:{brand:'tesla',model:'model s'},
    name:'Ivan', age:24,family:true
}
//toy
let toy={
    head:{eyes:true,nose:"green"},
    sounds:['mama','hello','sweetie'],
    color:'blue',name:'Larisa',material:'cotton'
}
//table
let table={
    fastening:['pintles','nuts'],
    components:{cover:true,legs:4},
    material:'wood',
    type:'square',
    price:1000
}
let bag={
    pockets:['the biggast one','middle','hidden pocket'],
    components:{pockets:true,handle:true,wheels:true},
    material:'linen',
    color:'black',
    price:23434
}

//37
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
console.log('- звернутися в відповідну ячейку масиву і відповідний параметр об\'єкта і вивести в консольх наступне\n')
//38
console.log('- статус Андрія\n')
for (const user of users) {
    if(user.name==='andrej'){
        console.log(user.status);
    }
}
//39
console.log('- статус Максима\n');
for (const user of users) {
    if(user.name==='max'){
        console.log(user.status);
    }
}
//40
console.log('- ім\'я передостаннього об\'єкту\n');
console.log(users[users.length - 2].name);
//41
console.log('- ім\'я третього об\'єкта\n');
console.log(users[2].name);
//42
console.log('- вік Олега\n');
for (const user of users) {
    if(user.name==='oleg')
    {
        console.log(user.age);
    }
}
//43
let j=1;
console.log('- вік Олі\n');
for (const user of users) {
    if(user.name==='olya')
    {
        console.log('Olia'+` ${j}: `+user.age);
        j++;
    }
}
//44
console.log('- вік + ім\'я 5го об\'єкта\n');
console.log(users[4].name+' '+users[4].age);
//45
console.log('- вік + сатус Анни\n');
for (const user of users) {
    if(user.name==='anya')
    {
        console.log(user.age+" "+user.status);
    }
}