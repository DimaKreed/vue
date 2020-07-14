//***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.
let makeListOfRules=()=>{
    let ul=document.createElement('ul');
    let h2Text=document.getElementsByTagName('h2');
    for(let h2 of h2Text)
    {
        let li=document.createElement('li');
        li.innerText=h2.textContent;
        ul.appendChild(li);
    }
    let blockIdContent=document.getElementById('content');
    blockIdContent.appendChild(ul);
}

makeListOfRules();


// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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

let makeStructureOfRules=(rules)=>
{
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
}

makeStructureOfRules(rules);