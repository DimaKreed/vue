//-  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

class Tag {
    constructor(titleOfTag,action,atributes=[]) {
        this.titleOfTag=titleOfTag;
        this.action=action;
        this.atributes=atributes;
    }
}

function Atributes(titleOfAttr,action) {
    {
        this.titleOfAttr=titleOfAttr;
        this.action=action;
    }

}

let a=new Tag('a',"Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.");
a.atributes[0]=new Atributes('accesskey','Активация ссылки с помощью комбинации клавиш.\n');
a.atributes[1]=new Atributes('coords\n','Устанавливает координаты активной области.');

let div=new Tag('div',"Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.");
div.atributes[0]=new Atributes('align\n','Задает выравнивание содержимого тега <div>.\n');
div.atributes[1]=new Atributes('title\n','Добавляет всплывающую подсказку к содержимому.\n');

let h1=new Tag('h1',"HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня");
h1.atributes[0]=new Atributes('align\n','Определяет выравнивание заголовка.\n');

let span=new Tag('span',"Тег <span> предназначен для определения строчных элементов документа");
span.atributes[0]=new Atributes('accesskey','Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.\n');
span.atributes[1]=new Atributes('class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
span.atributes[2]=new Atributes('contenteditable','Сообщает, что элемент доступен для редактирования пользователем.');

let input=new Tag('input',"Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.");
input.atributes[0]=new Atributes('accesskey','Переход к элементу с помощью комбинации клавиш.');
input.atributes[1]=new Atributes('accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.')

let form=new Tag('form',"Тег <form> устанавливает форму на веб-странице.");
form.atributes[0]=new Atributes('accept-charset','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.');
form.atributes[1]=new Atributes('action\n','Адрес программы или документа, который обрабатывает данные формы.');
form.atributes[2]=new Atributes('autocomplete','Включает автозаполнение полей формы.\n');

let option=new Tag('option',"Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>");
option.atributes[0]=new Atributes('disabled\n','Заблокировать для доступа элемент списка.');
option.atributes[1]=new Atributes('label\n','Указание метки пункта списка.\n');
option.atributes[2]=new Atributes('selected\n','Заранее устанавливает определенный пункт списка выделенным.\n');

let select=new Tag('select',"Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.");
select.atributes[0]=new Atributes('autofocus\n','Устанавливает, что список получает фокус после загрузки страницы.\n');
select.atributes[1]=new Atributes('disabled','Блокирует доступ и изменение элемента.');


console.log(a,div,h1,span,input,form,option,select);

//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car ={
    model:'X6',
    manufacturer:'BMW',
    yearOfProduction:2015,
    maxSpeed:250,
    volumeOfEngine:2.5,
    drive()
    {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
    },
    info(){
        console.log(this);
    },
    increaseMaxSpead(newSpeed){
        this.maxSpeed+=newSpeed;
    },
    changeYear(newValue){
        this.yearOfProduction=newValue;
    },
    addDriver(driver){
        this.driver=driver;
    }
}

car.drive();

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function Car(model,manufacturer,yearOfProduction,maxSpeed,volumeOfEngine) {
        this.model=model,
        this.manufacturer=manufacturer,
        this.yearOfProduction=yearOfProduction,
        this.maxSpeed=maxSpeed,
        this.volumeOfEngine=volumeOfEngine,
   function drive()
    {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
    }
  this.info= function (){
        console.log(this);
    }
   this.increaseMaxSpead=function (newSpeed){
        this.maxSpeed+=newSpeed;
    }
    this.changeYear=function (newValue){
        this.yearOfProduction=newValue;
    }
    this.addDriver=function (driver){
        this.driver=driver;
    }
}

let mazdaRX8=new Car('rx8','mazda','2012',280,3.0);
mazdaRX8.info();

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class CreateCar {
    constructor(model,manufacturer,yearOfProduction,maxSpeed,volumeOfEngine) {
        this.model=model,
        this.manufacturer=manufacturer,
        this.yearOfProduction=yearOfProduction,
        this.maxSpeed=maxSpeed,
        this.volumeOfEngine=volumeOfEngine,
        function drive()
        {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
        }
        this.info= function (){
            console.log(this);
        }
        this.increaseMaxSpead=function (newSpeed){
            this.maxSpeed+=newSpeed;
        }
        this.changeYear=function (newValue){
            this.yearOfProduction=newValue;
        }
        this.addDriver=function (driver){
            this.driver=driver;
        }
    }

}
let lada=new CreateCar('kalina','lada',1999,180,1.5);
lada.info();

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {constructor(name,age,sizeOfLeg) {
    this.name=name;
    this.age=age;
    this.sizeOfLeg=sizeOfLeg;
}
    
}
class Prince {constructor(name,age,sizeOfFindedShoes) {
    this.name=name;
    this.age=age;
    this.sizeOfFindedShoes=sizeOfFindedShoes;
}

}

let girlsNames=['Ann','Maria','Lina','Olga','Emma','Olivia','Ava','Sophia','Charlotte','Amelia'];
let boysNames=['Liam','Noah','William','James','Oliver','Benjamin','Dmytro','Ivan'];
let legSize=[34];
let shoesSize=[34];
let age=[18];
for (let i = 1; i <10; i++) {
   age[i]=age[i-1]+1
    legSize[i]=legSize[i-1]+1;
    shoesSize[i]=shoesSize[i-1]+1;
}


function randomElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

const girls=[];
const princes=[];

for (let i = 0; i < 10; i++) {
    girls[i]=new Cinderella(randomElement(girlsNames),randomElement(age),legSize[i]);
    princes[i]=new Prince(randomElement(boysNames),randomElement(age),shoesSize[i]);
}
console.log(girls);
console.log(princes);

for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {
        if (girls[i].sizeOfLeg===princes[j].sizeOfFindedShoes)
        {
            console.log(`Cinderella ${girls[i].name} is a girlfriend of prince ${princes[j].name}`);
        }

    }
}
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella2(name,age,sizeOfLeg) {
    this.name=name;
    this.age=age;
    this.sizeOfLeg=sizeOfLeg;
}

console.log('+++++++++++++++++++++++++++++++');
function Prince2(name,age,sizeOfFindedShoes) {
    this.name=name;
    this.age=age;
    this.sizeOfFindedShoes=sizeOfFindedShoes;
    this.findCinderella=function (arrOfGirls) {
        for (let i = 0; i < arrOfGirls.length; i++) {
            if (this.sizeOfFindedShoes===arrOfGirls[i].sizeOfLeg)
                console.log(`Cinderella ${arrOfGirls[i].name} is a girlfriend of prince ${this.name}`)
        }
    }
}

let arrOfCinderellas=[];
for (let i = 0; i < 10; i++) {
   arrOfCinderellas[i]=new Cinderella(randomElement(girlsNames),randomElement(age),legSize[i]);
}

let william=new Prince2('William',25,35);
william.findCinderella(arrOfCinderellas);


