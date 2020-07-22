//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает  меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


let ul=document.createElement('ul');
let h2Text=document.getElementsByTagName('h2');
for(let i=0;i<h2Text.length;i++)
{   h2Text[i].id=i+1;
    let li=document.createElement('li');
    li.innerHTML=`<a href="#${i+1}">${h2Text[i].textContent}</a>`;
    ul.appendChild(li);
}
let blockIdContent=document.getElementById('content');
blockIdContent.appendChild(ul);