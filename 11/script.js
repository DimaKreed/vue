//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let element = document.getElementById('text');
let form = document.forms.form1;
form.hideButton.onclick=()=>
{
    element.style.display='none';
}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
form.hideSelf.onclick=()=>{
    form.hideSelf.style.display='none';
}
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
form.ageButton.onclick=()=>{
    (+form.ageOfPerson.value>18)?alert('You are 18+'):alert('You are too young(less 18)');
}

//- Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('#menu h1');
let hideElemsOfMenu = document.querySelector('#menu ul');
menu.onclick=()=>{
    hideElemsOfMenu.classList.toggle('hide');
}

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let coments=[
    {title:'lorem',body:'lorem ipsum'},
    {title:'lorem1',body:'lorem ipsum2345345'},
    {title:'lorem2',body:'lorem ipsum45uitrjkl'},
    {title:'lorem3',body:'lorem ipsum,dfm,.,m.df'},
    {title:'lorem4',body:'lorem ipsdf,.vmdf;lsum'},
    {title:'lorem5',body:'lorem iaklcjdl;a;eflpsum'},
    {title:'lorem6',body:'lorem ips;lfjfeihweklum'},

]

let element1 = document.getElementById('coments');
for (let i = 0; i < coments.length; i++) {
let htmlDivElement = document.createElement("div");
element1.appendChild(htmlDivElement);
let buttonToHideBody=document.createElement("input");
buttonToHideBody.type='button';
buttonToHideBody.value='Press to hide body';
htmlDivElement.innerText=JSON.stringify(coments[i].title+"   " + coments[i].body);
htmlDivElement.appendChild(buttonToHideBody);
buttonToHideBody.onclick=()=>{

    htmlDivElement.innerText=JSON.stringify(coments[i].title);
}
}
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let buttonInfo = document.getElementById('buttonInfo');
buttonInfo.onclick=()=>{
    for (const ch of document.forms.form2.ch) {
        console.log(ch.checked);
    }
    console.log(document.forms.form3.text1.value);
    console.log(document.forms.form3.rad.checked);
}

//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
function createTable(tag=document,cols,rows,text='')
{
    let table=document.createElement('table');
        for (let i = 0; i < rows; i++)
        { let tr=document.createElement('tr');
        table.appendChild(tr);
            for (let j = 0; j < cols; j++)
            {
                let td=document.createElement('td');
                td.innerText=text;
                tr.appendChild(td);
            }
        }
    tag.appendChild(table);
}
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
document.forms.tableForm.createTable.onclick=()=>{
    createTable( document.forms.tableForm,+document.forms.tableForm.columns.value,+document.forms.tableForm.rows.value,document.forms.tableForm.textInside.value);
    document.forms.tableForm.columns.value='';
    document.forms.tableForm.rows.value='';
    document.forms.tableForm.textInside.value='';
}

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images=[];
for (let i = 0; i < 5; i++) {
    images[i]=`img/${i+1}.jpg`
}
let j=0;

let karusel = document.getElementById('karusel');
document.onkeydown = checkKey;
function checkKey(e) {

     if (e.keyCode == '37') {
         j--;
         if (j===-1) j=4;
         karusel.src=images[j];
    }
    else if (e.keyCode == '39') {
         j++;
         if(j===5) j=0;
         karusel.src=images[j];
    }

}

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let obscene=['chort','didko','pes','durak','durachok','duren','dupa','kakashka'];
document.forms.obscene.check.onclick=()=>{
 let words=document.forms.obscene.checkForObscene.value.split(' ').filter( e => e.length > 1);
 let bool=false;
        for (let i = 0; i < words.length; i++)
        {
            for (let k = 0; k < obscene.length; k++)
            {
              if (obscene[k]===words[i]) bool=true;
            }
         }
    (bool)?alert("Не можна вживати нецензурну лексику(фу)"):alert("Нецензурної лексики не знайдено. Молодець)");
}

//-- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];

let checkFalse = document.forms.users.checkFalse;
let check29 = document.forms.users.check29;
let checkKyiv = document.forms.users.checkKyiv;


let users=document.getElementById('users');
users.innerText=JSON.stringify(usersWithAddress);



isFalse=(array)=>{
    let newArr=(checkFalse.checked)?array.filter(a =>a.status === false):JSON.parse(JSON.stringify(array));
return newArr;}
is29=(array)=>{
    let newArr=(check29.checked)?array.filter(a =>a.age>29):JSON.parse(JSON.stringify(array));
    return newArr;}
isKyiv=(array)=>{
    let newArr=(checkKyiv.checked)?array.filter(a =>a.address.city==='Kyiv'):JSON.parse(JSON.stringify(array));
    return newArr;}



checkFalse.onclick=()=> {
    users.innerText=JSON.stringify(isFalse(is29(isKyiv(usersWithAddress))));
}

check29.onclick=()=> {
    users.innerText=JSON.stringify(isFalse(is29(isKyiv(usersWithAddress))));
}
checkKyiv.onclick=()=> {
    users.innerText=JSON.stringify(isFalse(is29(isKyiv(usersWithAddress))));
}


//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

area.onselect = function() {
    if (area.selectionStart == area.selectionEnd) {
        return;}

        let selected = area.value.slice(area.selectionStart, area.selectionEnd);
    console.log(selected);
     area.setRangeText(` *Мене виділили: ${selected} * `,area.selectionStart,area.selectionEnd,"end");
}


// document.onselect = function() {
//     if (document.selectionStart == document.selectionEnd) {
//         return;}
//
//     let selected = document.value.slice(document.selectionStart, document.selectionEnd);
//     console.log(selected);
//     document.setRangeText(` *Мене виділили: ${selected} * `,document.selectionStart,document.selectionEnd,"end");
// }
//

// document.onselectionchange = function() {
//     let selection = document.getSelection();
//     //document.execCommand('italic',false,null);
//
// };

//!!!!!!!!! тут я зчітерив, але воно працює.
let elementById = document.getElementById('edit');
elementById.onclick=()=>{
    document.execCommand('italic',false,null);
}

//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


///Сьогодні спробую це реалізувати