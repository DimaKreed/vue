let element = document.getElementById('start');
let firstElement=document.getElementById('first');

let next=document.forms.buttonForm.nextElem;
let prev=document.forms.buttonForm.prevElem;
function style(element){
  element.style.backgroundColor='blue'}

  //переводить елемент до наступного тег-елемента
function nextSibling(element){
  if (element.nextSibling===null)
  {
    return element;
  }
  if(element.nextSibling.nodeType===1)
  {
    return element.nextSibling;
  }
  else {
    element=element.nextSibling;
    return nextSibling(element);
  }
}

//  переводить елемент до попереднього тег-елемента
function previousSibling(element){
  if (element.previousSibling===null)
  {
    return element;
  }
  if(element.previousSibling.nodeType===1)
  {
    return element.previousSibling;
  }
  else {
    element=element.previousSibling;
    return previousSibling(element);
  }
}

//повертає останню тег-дитину елемента

function getTagLastChild(element)
{
  for (let i = element.childNodes.length-1; i >=0; i--) {
    if(element.childNodes[i].nodeType===1)
    {
      element=element.childNodes[i];
      break;
    }
  }
  return element
}

//повертає першу тег-дитину елемента

function getTagFirstChild(element)
{
  for (let i = 0; i < element.childNodes.length; i++) {
    //знаходжу перший тег і переприсвоюю значення елемента
    if(element.childNodes[i].nodeType===1)
    {
      element=element.childNodes[i];
      break;
    }
  }
  return element
}

//перевірка на те чи є там теги і якщо є то збільшити значення лічильника
function isTagsPresentInElement(element) {
  let bool=false;
  for (let i = 0; i < element.childNodes.length; i++) {
    if(element.childNodes[i].nodeType===1)
    { bool=true}
  }
return bool;
}

function consolePrint(element)
{
  console.log('now element is:')
  console.log(element);
}


style(element);
console.log('start point');
console.log(element);



next.onclick=()=>{
  element.style.backgroundColor='transparent';

  if(isTagsPresentInElement(element))//якщо є теги
  {
   element= getTagFirstChild(element);//то елемент стає першим дочірнім
  }
  //якщо тегів немає
  else {
    // (ця перевірка треба бо childNode & previousSibling & nextSibling бачать абзаци між тегами в index.html)
    if(element.nextSibling.nextSibling===null)    // (перевірка на кінець підрівня)
    {
      if(element.parentElement.nextSibling.nextSibling===null){}//перевірка на кінець всіх рівнів
      else {element=nextSibling(element.parentElement);}//якщо ж є ще рівні то перейти на рівень вище

    }
    //якщо ж елементи на цьому підрівні є то перейти до наступного
    else { element=nextSibling(element);}

  }
  consolePrint(element);
  style(element);
}

prev.onclick=()=>{

  if (element===firstElement){}//якщо елемент є початковим то нічого не робити бо ми вийшли на самий верхній рівень
  else
    { element.style.backgroundColor='transparent';
      if(isTagsPresentInElement(element))//якщо є теги
      {
        element=getTagLastChild(element);//елемент стає останнім дочірнім тегом
      }
      else //якщо тегів немає
        {
          if (element.previousSibling.previousSibling === null) //якщо немає попередніх рівнів
          {
            if (element.parentElement === null) {}//якщо немає батька
            else
              {
                  element = previousSibling(element.parentElement);//елемент стає попереднім елементом батьківського
              }
          }
          else
            {
            element = previousSibling(element)//елемент стає попереднім елементом
            }
        }
  }
  consolePrint(element);
  style(element);

}

