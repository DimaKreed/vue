//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//dog
let dog =
    {
        alias:"Brovko",
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


//2
//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

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
//3
console.log('- При помощи for in вывести все ключи всех объектов из задания 1 и 2\n')
for (let keys in dog){
    console.log(keys);
}
console.log('______________________________________')
for (let keys in human){
    console.log(keys);
}
console.log('______________________________________')
for (let keys in Camaro){
    console.log(keys);
}
console.log('______________________________________')
for (let keys in flat){
    console.log(keys);
}
console.log('______________________________________')
for (let keys in book){
    console.log(keys);
}
console.log('end of keys from 1 task_________________________________')
for (let keys in house){
    console.log(keys);
}
console.log('______________________________________')

for (let keys in driver){
    console.log(keys);
}
console.log('______________________________________')
for (let keys in toy){
    console.log(keys);
}
console.log('______________________________________')

for (let keys in table){
    console.log(keys);
}
console.log('______________________________________')

for (let keys in bag){
    console.log(keys);
}
console.log('end of keys from 2 task______________________________________')
//4
console.log('- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2\n')
console.log(Object.keys(dog));
console.log(Object.keys(human));
console.log(Object.keys(Camaro));
console.log(Object.keys(flat));
console.log(Object.keys(book));
console.log(Object.keys(house));
console.log(Object.keys(driver));
console.log(Object.keys(toy));
console.log(Object.keys(table));
console.log(Object.keys(bag));
//5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

//функція що рандомно вибирає елемент з масива
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
    let car={
        model:randomElement(models),yearProduction:randomElement(yearsProduction),
        power:randomElement(powers),color:randomElement(colors)
    }
    cars[i]=car;
}
console.log(cars);

//6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities=[];
for (let i = 0; i < 7; i++) {
    cities[i]={name:'Name of town',population:123456,country:'Ukraine',region:"Europe"};

}
console.log('//6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)\n')
console.log(cities);

//7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let vadila={name:'Vasyl',age:27,sex:'male',experience:3};
let cars2=[];

for (let i = 0; i < 10; i++) {
    let car=
        {
            model:randomElement(models),yearProduction:randomElement(yearsProduction),
            power:randomElement(powers),color:randomElement(colors),driver:vadila
        }
        cars2[i]=car;

}


console.log(' Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.')
console.log('List of cars with added drivers');
console.log(cars2);
//8
console.log('- проитерировать каждый массив из задания 5,6,7 при помощи while.\n')

function whileIteration(arr) {
    let i=0;
    while(i<arr.length){
        console.log(arr[i]);
        i++;
    }

}
//8
console.log('- проитерировать каждый массив из задания 5,6,7 при помощи while.\n')
whileIteration(cars);
whileIteration(cities);
whileIteration(cars2);
//9
function forIteration(arr) {
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
}

console.log('- проитерировать каждый массив из задания 5,6,7 при помощи for .\n')
forIteration(cars);
forIteration(cities);
forIteration(cars2);
//10
function for_ofIteration(arr)
{
    for(a of arr){
        console.log(a);
    }
}

console.log('- проитерировать каждый массив из задания 5,6,7 при помощи  for of.\n')
for_ofIteration(cars);
for_ofIteration(cities);
for_ofIteration(cars2);
//11 - взять объекты из задания 1 и превратить каждый в json.
let jsonDog=JSON.stringify(dog);
let jsonHuman=JSON.stringify(human);
let jsonCamaro=JSON.stringify(Camaro);
let jsonFlat=JSON.stringify(flat);
let jsonBook=JSON.stringify(book);
//12- взять json из задания 11 и превратить их обратно в объекты.
jsonDog=JSON.parse(jsonDog);
jsonHuman=JSON.parse(jsonHuman);
jsonCamaro=JSON.parse(jsonCamaro);
jsonFlat=JSON.parse(jsonFlat);
jsonBook=JSON.parse(jsonBook);
//13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
console.log('//13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .\n');
for (let c of cars) {
    c=JSON.stringify(c);
    console.log(c);
}
//14- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
console.log('- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .\n');
for(let c of cities){
    c=JSON.stringify(c);
    console.log(c);
}
//15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
console.log('- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.\n');
let jsonCars=[];
for (let i=0;i<cars2.length;i++) {
    jsonCars[i]=JSON.stringify(cars2[i]);
    console.log(jsonCars[i]);
}
//16- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let Users = [{
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
}]
console.log('Users:')
whileIteration(Users);
console.log('Their skills:')
for (const u of Users) {
    console.log(u.skills)

}
//17- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
console.log('- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив\n');
let usersSkills=[];
for (const u of Users) {
   usersSkills= usersSkills.concat(u.skills);
}
console.log(usersSkills);
//19- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
console.log('- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об\'єкта.\n');
let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for(let u of users)
{
    console.log(u);
    for(let i=0;i<u.skills.length;i++)
    {console.log(u.skills[i]);}
}
//24- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users2 = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let usersAdress=[];
for(let u of users2)
{
    usersAdress=usersAdress.concat(u.address);
}
console.log('- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.\n');
console.log(usersAdress);
//25- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let divForUsers=document.createElement('div');
document.body.append(divForUsers);
for(u of users2)
{
    let divElement=document.createElement('div');
    divElement.innerText=JSON.stringify(u);
    divForUsers.appendChild(divElement);
}
//26- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let divForUsers2=document.createElement('div');
document.body.append(divForUsers2);
for(let u of users2)
{
    let divElementForEachUser=document.createElement('div');
    let divForName=document.createElement('div');
    let divForAge=document.createElement('div');
    let divForStatus=document.createElement('div');
    let divForAddress=document.createElement('div');
    divForName.innerHTML=`<p>${JSON.stringify(u.name)}</p>`;
    divForAge.innerHTML=`<p>${JSON.stringify(u.age)}</p>`;
    divForStatus.innerHTML=`<p>${JSON.stringify(u.status)}</p>`;
    divForAddress.innerHTML=`<p>${JSON.stringify(u.address)}</p>`;
   let divideLineForUsers=document.createElement('div')
    divideLineForUsers.innerText='------------------------------------------------------';
   divElementForEachUser.appendChild(divideLineForUsers);
    divElementForEachUser.appendChild(divForName);
    divElementForEachUser.appendChild(divForAge);
    divElementForEachUser.appendChild(divForStatus);
    divElementForEachUser.appendChild(divForAddress);

    divForUsers2.appendChild(divElementForEachUser);
}
//27- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
let divForUsers3=document.createElement('div');
document.body.append(divForUsers3);
for( let u of users2)
{
    let divElementForEachUser=document.createElement('div');
    let divForName=document.createElement('div');
    let divForAge=document.createElement('div');
    let divForStatus=document.createElement('div');
    let divForAddress=document.createElement('div');

    divForName.innerHTML=`<h1>${u.name}</h1>`;
    divForAge.innerHTML=`<p>${u.age}</p>`;
    divForStatus.innerHTML=`<p>${u.status}</p>`;

    let divideLineForUsers=document.createElement('div')
    divideLineForUsers.innerText='===================================================';

    for(let keysAddress in u.address)
   {
       let pForAddress=document.createElement('p');
       pForAddress.innerText=keysAddress +': ' +u.address[keysAddress];

       divForAddress.appendChild(pForAddress);
   }

    let h3Address=document.createElement('div');
    h3Address.innerHTML='<h3>ADDRESS:</h3>';

    divElementForEachUser.appendChild(divideLineForUsers);
    divElementForEachUser.appendChild(divForName);
    divElementForEachUser.appendChild(divForAge);
    divElementForEachUser.appendChild(divForStatus);
    divElementForEachUser.appendChild(h3Address);
    divElementForEachUser.appendChild(divForAddress);

    divForUsers3.appendChild(divElementForEachUser);
}

//87- Дано 2 масиви з рівною кількістю об'єктів.
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
console.log('З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id" .\n');
for (let i = 0; i < usersWithId.length; i++)
    {
        for (let j = 0; j < citiesWithId.length; j++)
        {
            if(usersWithId[i].id===citiesWithId[j].user_id)
            {
                usersWithId[i]["address"]=citiesWithId[j];
            }
        }

    }
console.log(usersWithId);

document.write("---------------------------------------------------")
//100- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
console.log('//100- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу\n')

let myDiv=document.createElement('div');
myDiv.id='okten';
myDiv.classList.add('web');
myDiv.innerText='Some text for homework';
document.body.append(myDiv);

console.log('by id');
let textFromId=document.getElementById('okten');
console.log(textFromId.textContent);

console.log('by class');
let textsFromClass=document.getElementsByClassName('web');
for(let text of textsFromClass)
{
    console.log(text.textContent);
}

console.log('by tag');
let textFromTag=document.getElementsByTagName('div');
    console.log(textFromTag[textFromTag.length-1].textContent);


    //101- змінити цей текст використовуючи селектори id, class,  tag
    textFromId.innerText='New Text';

for(let text of textsFromClass)
{
    text.textContent='New Text1';
}

textFromTag[textFromTag.length-1].textContent='New Text2';
//102- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
textFromId.style.height='200px';
for(let text of textsFromClass)
{
    text.style.width='400px';
}
textFromTag[textFromTag.length-1].style.backgroundColor='silver';

//103
//function for creation tables
function createTable(tag,cols,rows)
{
    let table=document.createElement('table');
        for (let i = 0; i < rows; i++)
        { let tr=document.createElement('tr');
        table.appendChild(tr);
            for (let j = 0; j < cols; j++)
            {
                let td=document.createElement('td');
                tr.appendChild(td);
            }
        }
    tag.appendChild(table);
}


//103- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let divForTable1=document.createElement('div');
document.body.append(divForTable1);
createTable(divForTable1,3,1);

//104- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let divForTable2=document.createElement('div');
document.body.append(divForTable2);
createTable(divForTable2,3,10);

//105- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let divForTable3=document.createElement('div');
document.body.append(divForTable3);
createTable(divForTable3,5,10);

//106- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let n=+prompt('Enter number of rows');
let m=+prompt("Enter number of columns");

let divForTable4=document.createElement('div');
document.body.append(divForTable4);
createTable(divForTable4,m,n);



//121-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let wrap=document.createElement('div');

for (let i = 0; i < rules.length; i++) {
    let divForEachRule=document.createElement('div');
let  divForNumberOfRule=document.createElement('div');
let divForRule=document.createElement('div');

divForNumberOfRule.innerText=rules[i].title;
divForRule.innerText=rules[i].body;
divForEachRule.appendChild(divForNumberOfRule);
divForEachRule.appendChild(divForRule);
wrap.appendChild(divForEachRule);
}
document.body.append(wrap);