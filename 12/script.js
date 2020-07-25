// Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textarea = document.getElementById('saveThisText');

textarea.oninput=()=>{
    localStorage.setItem('textarea',textarea.value);
}

textarea.value=localStorage.getItem('textarea');

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

let form1 = document.forms.form1;
form1.text.oninput=()=>{
    localStorage.setItem('text',form1.text.value)
}
form1.text.value=localStorage.getItem('text');


 form1.area.oninput=()=>{
     localStorage.setItem('textareaForm',form1.area.value)
 }
form1.area.value=localStorage.getItem('textareaForm');


let checkDiv  = document.getElementById('check');
checkDiv.onclick=()=> {
    for (let i = 0; i < form1.check.length; i++) {
        localStorage.setItem(`check${i + 1}`, form1.check[i].checked)
    }
 }

for (let i = 0; i < form1.check.length; i++) {
     form1.check[i].checked=JSON.parse(localStorage.getItem(`check${i + 1}`));
}


let radioDiv  = document.getElementById('radio');
radioDiv.onclick=()=> {
    for (let i = 0; i < form1.radio.length; i++) {
        localStorage.setItem(`radio${i + 1}`, form1.radio[i].checked)
    }
}

for (let i = 0; i < form1.radio.length; i++) {
    form1.radio[i].checked=JSON.parse(localStorage.getItem(`check${i + 1}`));
}

form1.language.onchange=()=>{
    localStorage.setItem('selectedLanguage',form1.language.selectedIndex);
}

form1.language.selectedIndex=localStorage.getItem('selectedLanguage');

//Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let saveButton = document.forms.formAreaWithVersions.saveButton;
let previousVersion =document.forms.formAreaWithVersions.leftArrow;
let nextVersion = document.forms.formAreaWithVersions.rightArrow;
let area=document.forms.formAreaWithVersions.areaVersions;

let maxCount;
let counter=maxCount=JSON.parse(localStorage.getItem('counter'))||0;
localStorage.setItem('counter',counter)
area.value=localStorage.getItem(`save${localStorage.getItem('maxCount')}`);


saveButton.onclick=()=>{
    console.log("+")
    counter++;
    localStorage.setItem(`save${counter}`,area.value);
    localStorage.setItem('counter',counter)
    if(counter>maxCount)maxCount=counter;
    localStorage.setItem('maxCount',maxCount);
}
previousVersion.onclick=()=>{
    counter--;
    if(counter<=1)counter=1;
    localStorage.setItem('counter',counter)
    area.value=localStorage.getItem(`save${counter}`)
}
nextVersion.onclick=()=>{
    counter++;
    if(counter>=maxCount)counter=maxCount;
    localStorage.setItem('counter',counter)
    area.value=localStorage.getItem(`save${counter}`)
}






















//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

//localStorage.clear()
class contact {constructor(name,phoneNumber,eMail,firm,department,dateOfBirth) {
   this.name=name;
    this.phoneNumber=phoneNumber;
    this.eMail=eMail;
    this.firm=firm;
    this.department=department;
    this.dateOfBirth=dateOfBirth;
}
}

let inputsDiv = document.getElementById('inputs');
let bool=true;
let contactForm=document.forms.contacts;
let contactsArray=JSON.parse(localStorage.getItem('contacts'))||[];
let index=0;

let contactListChange=()=>{
    contactForm.contactsList.innerHTML='';
if(contactsArray)
    {
        for(let i=0;i<contactsArray.length;i++){
            contactsArray[i].index=i;
            let newOption=new Option(contactsArray[i].name);
            contactForm.contactsList.append(newOption,i);
        }

        localStorage.setItem('contacts',JSON.stringify(contactsArray))
    }
}

let setValuesToSaveForm=(name='',phone='',email='',firm='',department='',dateOfBirth='')=>{
    contactForm.contactName.value=name;
    contactForm.phoneNumber.value=phone;
    contactForm.eMail.value=email;
    contactForm.firm.value=firm;
    contactForm.department.value=department;
    contactForm.dateOfBirth.value=dateOfBirth;
}

let deleteCount=()=>{
    contactsArray.splice(contactsArray[contactForm.contactsList.selectedIndex].index,1);
     localStorage.setItem('contacts',JSON.stringify(contactsArray));
}

let checkParams=()=>
{
    if( contactForm.contactName.value.length!=0&&
    contactForm.phoneNumber.value.length!=0) contactForm.save.disabled=false;
    else {contactForm.save.disabled=true;}
}
contactListChange();




contactForm.add.onclick=()=>{
    inputsDiv.classList.toggle('hide');
    document.getElementById('focus').focus();
    contactForm.edit.disabled=bool;
    bool=!bool;
    setValuesToSaveForm();
}

contactForm.save.onclick=()=>{

    let human=new contact(contactForm.contactName.value,contactForm.phoneNumber.value,contactForm.eMail.value,contactForm.firm.value,contactForm.department.value,contactForm.dateOfBirth.value);

    contactsArray.push(human);

    localStorage.setItem(`contacts`,JSON.stringify(contactsArray));
    if(contactForm.add.disabled===true)
    {deleteCount();}
    contactListChange();
    setValuesToSaveForm();

    inputsDiv.classList.toggle('hide');
    contactForm.add.disabled=false;
    contactForm.edit.disabled=false;
    //alert('succesfully saved');

}

contactForm.edit.onclick=()=>{
    if (contactForm.contactsList.options.length>0)
    {

            let {name,phoneNumber,eMail,firm,department,dateOfBirth}=contactsArray[contactForm.contactsList.selectedIndex];
            setValuesToSaveForm(name,phoneNumber,eMail,firm,department,dateOfBirth);
            inputsDiv.classList.toggle('hide');
            document.getElementById('focus').focus();
            contactForm.add.disabled=bool;
            bool=!bool;

      //  deleteCount()
        contactListChange();
    }
    else alert('No contacts');

}

contactForm.delete.onclick=()=>{
    if (contactForm.contactsList.options.length>0){
        deleteCount();
    }    else alert('No contacts');
    contactListChange();

    //contactForm.contactsList.removeChild(contactForm.contactsList.querySelector());

}

