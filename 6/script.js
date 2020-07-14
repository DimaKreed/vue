console.log(
'--створити масив та вивести його в консоль:'+
'- з 5 числових значень'+
'- з 5 стічкових значень'+
'- з 5 значень стрічкового, числового та булевого типу');

let nums=[1,2,3,4,5];//2
let str=['1','2','3','4','5'];//3
let mixed=[1,2,'smth',true,false];//4
console.log(nums,str,mixed);

//5
console.log('-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль')
let emptyArray=[];
emptyArray[0]=1;
emptyArray[1]=12;
emptyArray[2]=123;
emptyArray[3]=1234;
console.log(emptyArray);
//7
document.write('<br></br> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині')
for(let i=0;i<10;i++)
{document.write('<div>Sometext</div>')}
//8 
document.write('<br></br> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині')
for(let i=0;i<10;i++)
{document.write('<div>Sometext '+i+'</div>')}
//9
document.write('<br></br> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.')
let j=20;
while(j>0)
{
    document.write('<h1>random</h1>');
    j--;
}
//10
document.write('<br></br> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.')
j=20;
while(j>0)
{
    document.write('<h1>random '+j+'</h1>');
    j--;
}
//11
console.log('- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');

let nums1=[];
for(let i=0;i<10;i++)
{
    nums1[i]=i;
    console.log(nums1[i]);
}
//12
console.log('- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');

let str1=[];
for(let i=0;i<10;i++)
{
    str1[i]='s'+i;
    console.log(str1[i]);
}
//13
console.log('- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.');

let bool1=[];
for(let i=0;i<10;i++)
{
    bool1[i]=true;
    console.log(bool1[i]);
}
//14
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи');
console.log('- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи');

let mix=[1,2,3,4,'s1','s2','s3','s4',true,false];

for(let i=0;i<10;i++)
{   //14
   if(typeof(mix[i])=="boolean")
   console.log(mix[i]);
   //15
   if(typeof(mix[i])=="number")
   console.log(mix[i]);
   //16
   if(typeof(mix[i])=="string")
   console.log(mix[i]);
}
//17
console.log('- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.');

let differentTypes=[];
differentTypes[0]=1;
differentTypes[1]=null;
differentTypes[2]=true;
differentTypes[3]='string';
differentTypes[4]=undefined;
differentTypes[5]=2;
differentTypes[6]=54;
differentTypes[7]=NaN;
differentTypes[8]='hdfjkdfjk';
differentTypes[9]=13;

for(m of differentTypes)
{console.log(m);} 

//18
console.log('- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.write('<br></br> Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');

for(let i=0;i<10;i++)
{
    console.log(i+1);
    document.write('<br></br>');
    document.write(i+1);

}
//19
console.log('- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.write('<br></br> Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');

for(let i=0;i<100;i++)
{
    console.log(i+1);
    document.write('<br></br>');
    document.write(i+1)
}
//20 Так як в завданні написано що має відбутися 100 ітерацій з кроком 2 , то я відповідно написав що і<200
console.log('- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
document.write('<br></br> Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');

for(let i=0;i<200;i+=2)
{
    console.log(i+1);
    document.write('<br></br>');
    document.write(i+1)
}
//21
console.log('- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
document.write('<br></br> Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');

for(let i=0;i<200;i+=2)
{
    console.log(i);
    document.write('<br></br>');
    document.write(i);
}
//23
console.log('- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
document.write('<br></br> Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');

for(let i=0;i<200;i+=2)
{
    console.log(i+1);  
      document.write('<br></br>');
    document.write(i+1)
}
//24 
console.log('- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)');

let minute=0,second=0,hour=0;

for(let i=0;i<2;i++)
{ 
    for(let j=0;j<60;j++)
    {
        if(minute==2){
            break;
        }
        else{
            second++;
            if(second==60)
            {
                second=0;
                minute++   
            }            
            console.log('0'+minute+':'+second);
        }
    }
}

//25
console.log('- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)');

second=0;
minute=0;
for(let i=0;i<3;i++)
{
    
    for(let j=0;j<60;j++)
    {
        if(minute==60)
        {
            minute=0;
            hour++;
        }
        else
        {
            for(let z=0;z<60;z++)
            {
                second++;
                if(hour==2&&minute==20)
                {
                    break;
                }
                if(second==60)
                {
                    second=0;
                    minute++;
                }
                
                console.log(hour+':'+minute+':'+second);
                
            }
        }
        
    }
}

//27
console.log("- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.");

let array=[ 'a', 'b', 'c'];
let arrayCouple='';
for(let i=0;i<array.length;i++)
{
    arrayCouple+=array[i];
}
console.log(arrayCouple);
//28
console.log("- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.");

arrayCouple='';
j=0
while(j<array.length)
{arrayCouple+=array[j];
j++;}
console.log(arrayCouple);
//29
console.log("- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.");

arrayCouple='';
for(a of array)
{
    arrayCouple+=a;
}
console.log(arrayCouple);
//30 тут написано те саме завдання, але я думаю мало бти використання фор ін
console.log("- Дано масив: [ a, b, c] . За допомогою циклу for of зібрати всі букви в слово.");

arrayCouple='';
for(a in array)
{
    arrayCouple+=array[a];
}
console.log(arrayCouple);

//37
console.log("- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.");

for(let i=0;i<3;i++)
{array.push(i+1);}
console.log(array);

//38
console.log('- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].');

let oneTwoThree=[1,2,3];
oneTwoThree.reverse();
console.log(oneTwoThree);
//39
console.log('- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.');

oneTwoThree=[1,2,3];
for (let i=0;i<3;i++)
{oneTwoThree.push(i+4);
}
console.log(oneTwoThree);
//40
console.log('- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.');

for(let i=6;i>3;i--)
{
    oneTwoThree.unshift(i);
}
console.log(oneTwoThree);
//41
document.write(" <br></br>Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()");

let arr2=['js', 'css', 'jq'];
let firstWord=arr2.shift();
document.write('<br></br>');
document.write(firstWord);
//42
document.write(" <br></br>Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()");

let lastWord=arr2.pop();
document.write('<br></br>');
document.write(lastWord);

let ar=[1,2,3,4,5];
//43
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].');

let a1=ar.slice(3);
console.log(a1);
//44
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].');

let a2=ar.slice(0,2);
console.log(a2);
//45
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].');

let a3=ar.slice(0,1).concat(ar.slice(3));
console.log(a3);
//46
console.log("- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].");

let a4=ar.slice(0,3).concat('a','b','c',ar.slice(3));
console.log(a4);
//47
console.log("- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']");

let a5=ar.slice(0,1).concat('a','b',ar.slice(1,4),'c',ar.slice(4),'e')
console.log(a5);

let ar2=[];
let ar3=[];
console.log("- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.");
for(let i=0;i<10;i++)
{
    ar2[i]=i+1;
    //48
    
    if(ar2[i]%2==0)
    {
        console.log(ar2[i]);
    }   
}
console.log('- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший');

for(let i=0;i<10;i++)
{//49
    
    ar3.push(ar2[i]);
}
console.log(ar3);
console.log('- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.    ');

ar3.length=0;
for(let i=0;i<10;i++)
{//50
    
    ar3[i]=ar2[i];
}
console.log(ar3);

let nums2=[2,17,13,6,22,31,45,66,100,-18];
 j=0;
 //56
 console.log('1. перебрати його циклом while ');
 
  
 while(j<10)
 {
     console.log(nums2[j]);
    j++;
}
j=0;
//57
console.log('2. перебрати його циклом for');

 
for(let i=0;i<10;i++)
{
    console.log(nums2[i]);
}
//58
console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');

 
while(j<10)
 {if(j%2==1)
     console.log(nums2[j]);
    j++;
}
j=0;
//59
console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом');

 
for(let i=0;i<10;i++)
{if(i%2==1)
    console.log(nums2[i]);
}
//60
console.log('5. перебрати циклом while та вивести  числа тільки парні  значення');

 
while(j<10)
 {if(nums2[j]%2==0)
     {console.log(nums2[j])};
    j++;
}
j=0;
//61
console.log('6. перебрати циклом for та вивести  числа тільки парні  значення');

 
for(let i=0;i<10;i++)
{if(nums2[i]%2==0)
    console.log(nums2[i]);
}
//62
console.log('7. замінити кожне число кратне 3 на слово "okten"');

 
for(let i=0;i<10;i++)
{if(nums2[i]%3==0)
    nums2[i]='okten';
    console.log(nums2[i]);
}
//63
console.log('8. вивести масив в зворотньому порядку.');

nums2=[2,17,13,6,22,31,45,66,100,-18];
 
for(let i=0;i<10;i++)
{
    console.log(nums2[nums2.length-1-i]);
}

//_________________________64___________________________
j=9;
console.log('9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)');

//56
console.log('1. перебрати його циклом while');

 
while(j>=0)
{
    console.log(nums2[j]);
   j--;
}
j=9;
//57
console.log('2. перебрати його циклом for');
 
for(let i=9;i>=0;i--)
{
   console.log(nums2[i]);
}
//58
console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');
 
while(j>=0)
{if(j%2==1)
    console.log(nums2[j]);
   j--;
}
j=9;
//59
console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом');
 
for(let i=9;i>=0;i--)
{if(i%2==1)
   console.log(nums2[i]);
}
//60
console.log('5. перебрати циклом while та вивести  числа тільки парні  значення');
 
while(j>=0)
{if(nums2[j]%2==0)
    {console.log(nums2[j])};
   j--;
}
j=9;
//61
console.log('6. перебрати циклом for та вивести  числа тільки парні  значення');
 
for(let i=9;i>=0;i--)
{if(nums2[i]%2==0)
   console.log(nums2[i]);
}
//62
console.log('7. замінити кожне число кратне 3 на слово "okten"');
 
for(let i=9;i>=0;i--)
{if(nums2[i]%3==0)
   nums2[i]='okten';
   console.log(nums2[i]);
}

//67
console.log("створити пустий масив та :"+
"- заповнити його 50 парними числами за допомоги циклу.");

 
let arr3=[];
for(let i=0;i<100;i++)
{
     if(i%2==0)
     arr3.push(i); 
}
console.log(arr3);

//68
console.log("створити пустий масив та :"+
"- заповнити його 50 непарними числами за допомоги циклу.");

 
arr3.length=0;
for(let i=0;i<100;i++)
{
     if(i%2==1)
     arr3.push(i); 
}
console.log(arr3);

//73 те саме що й 67
//74 те саме що 68
//75
console.log("3. используя Math.random заполнить массив из ???(сколько хотите) элементов.диапазон рандома 8 до 732.");

 
let arr4=[];
for(let i=0;i<10;i++)
{
    arr4[i]=Math.round(Math.random()*(732-8)+8) ;
}
console.log(arr4);
//77
console.log(" 2. вывести на консоль  каждый третий елемент");

 
for(let i=0;i<10;i++)
{
    if((i+1)%3==0)
    console.log(arr4[i]);
}
//78
console.log("3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.");

 
for(let i=0;i<10;i++)
{
    if((i+1)%3==0&&arr4[i]%2==0)
    console.log(arr4[i]);
}
//80
console.log("4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.");

 
let arr5=[];
for(let i=0;i<10;i++)
{
    if((i+1)%3==0&&arr4[i]%2==0)
    {
        console.log(arr4[i]);
        arr5.push(arr4[i]);
    }
}
console.log(arr5);
//83
console.log(" 5. Вывести каждый елемент массива у которого соседний с права элемент - парный");

 
for(let i=0;i<10;i++)
{
    if(arr4[i+1]%2==0)
    console.log(arr4[i]);
}
//84
console.log("  5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.");

let prices=[100,250,50,168,120,345,188];
let middlePrice=0;
for(p of prices)
{
    middlePrice+=p;
}
middlePrice/=prices.length;
console.log('Middle Prise is:'+middlePrice)
//86
console.log("3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.");

let arr6=[];
let arr7=[];
for(let i=0;i<25;i++)
{
    arr6[i]=Math.random();
    arr7[i]=arr6[i]*5;
}
console.log(arr7);
//87
console.log("4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.");

let anotherArray=[];
let greatMix=[1,2,'sd','sd','gtrg','eer',4,true,true,false,'dsdds',12345];
for(g of greatMix)
{
    if(typeof(g)=="number")
    {
        anotherArray.push(g);
    }
}
console.log(anotherArray);

