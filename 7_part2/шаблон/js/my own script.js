// - знайти всі елементі, які мають class
console.log(document.querySelectorAll('[class]'));
//110 - знайти всі параграфи ,та змінити текст на hello oktenweb!
let allP=document.getElementsByTagName('p');
for (const allPElement of allP) {
    allPElement.innerText='Hello Ok10Web';

}
//111 - знайти всі div та змінити ім колір на червоний
let allDiv=document.getElementsByTagName('div');
for (const allDivElement of allDiv) {
    allDivElement.style.backgroundColor = 'red';
}
