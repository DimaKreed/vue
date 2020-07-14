//- Напишіть код, який :
//70-- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_headerElement=document.getElementById('main_header');
main_headerElement.style.color='orange';
//71 -- робить шириниу елементу ul 400 пікселів
let ulElements=document.getElementsByTagName('ul');
for (const ul of ulElements) {
    ul.style.width='400px';
}
//72-- робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElements=document.getElementsByClassName("linkList");
for (let i = 0; i < linkListElements.length; i++) {
    linkListElements[i].style.width='50%';
}
//73-- отримує текст який зберігається в елементі з класом listElement2
let listElement2Text=document.getElementsByClassName("listElement2");
let str='';
for (const l of listElement2Text) {
   str+=l.textContent

}
console.log(str);
//74-- отримує всі елементи li та змінює ім колір фону на сірий
let allLi=document.getElementsByTagName('li');
for (const li of allLi) {
    li.style.backgroundColor='grey';

}
//75-- отримує всі елементи 'a' та додає їм клас anchor
let allA=document.getElementsByTagName('a');
for (const a of allA) {
    a.classList.add('anchor');
}
//76-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const a of allA) {
    if(a.textContent==='link3')
    {
        a.style.fontSize='40px';
    }
}
//77-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const a of allA) {
    a.classList.add(`element_${a.textContent}`);
}
//78-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub_headerElements=document.getElementsByClassName("sub-header");
let bg=prompt("Enter background color");
for (const sub of sub_headerElements) {
    sub.style.backgroundColor=bg;
}
//79-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let textColor=prompt("Enter text color");
for (const sub of sub_headerElements)
{
    if(sub.textContent==='content 2 segment')
    {
        sub.style.color=textColor;
    }
}
// 80-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1Elements=document.getElementsByClassName("content_1");
let textChange=prompt("Enter new text");
for (const cont1 of content_1Elements) {
    cont1.innerText=textChange;
}
//81-- отримати елементи p та змінити їм padding на довільне значення
let allP=document.getElementsByTagName('p');
for (const p of allP) {
    p.style.padding='30px';
}
//82
let text2Elements=document.getElementsByClassName('text2');
for (const t2 of text2Elements) {
 t2.innerText='NEW TEXT.ABRAKADABRA';
}

