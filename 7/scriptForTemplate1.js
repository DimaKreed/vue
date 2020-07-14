console.log('-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :\n');
//51
console.log('- отримує текст з параграфа з id "content"\n');
let contentText=document.getElementById('content');
//console.log(contentText);
//52
console.log('- отримує текст з блоку з id "rules"\n');
let rulesText=document.getElementById('rules');
//console.log(rulesText);
 //53
console.log('- замініть текст параграфа з id \'content\' на будь-який інший\n');
contentText.innerText='New Text';
console.log(contentText);
//54
console.log('- замініть текст параграфа з id \'rules\' на будь-який інший\n');
rulesText.innerText='One more new text';
console.log(rulesText);
//55
//- змініть кожному елементу колір фону на червоний
document.body.style.backgroundColor='red';
//56- змініть кожному елементу колір тексту на синій
document.body.style.color='blue';
//57 - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('- отримати весь список класів елемента з id=rules і вивести їх в console.log\n');
console.log(rulesText.classList);
//58
console.log('- отримати всі елементи з класом fc_rules\n');
let fc_rulesElements=document.getElementsByClassName("fc_rules");
console.log(fc_rulesElements);
//59- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const el of fc_rulesElements) {
    el.style.color='red';

}
