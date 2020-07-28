//Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.



// function wakeUp(wasAlarm,cb)
// {
//     setTimeout(()=>
//     {
//         (wasAlarm)?cb(null,'Good MO'):cb('OOOOPS')
//     },randomTimeout())
//
// }
//
// function cleanTeeth(wasWater,cb)
// {
//     setTimeout(()=>
//     {
//         (wasWater)?cb(null,'Teeth are clean'):cb('OOPS')
//     },randomTimeout())
//
// }
//
// function eatBreakfest(wasMilk,cb)
// {
//     setTimeout(()=>
//     {
//         (wasMilk)?cb(null,'Yummy'):cb('OOPS')
//     },randomTimeout())
//
// }
//
// function startCoding(wasTask,cb)
// {
//     setTimeout(()=>
//     {
//         (wasTask)?cb(null,"Let's go!"):cb('OOPS')
//     },randomTimeout())
// }
//
// function takeBreak(wannaBeHealthy,cb)
// {
//     setTimeout(()=>
//     {
//         (wannaBeHealthy)?cb(null,"You were needed for the rest"):cb('OOPS')
//     },randomTimeout())
// }
//
// function eatDinner(isSmthToEat,cb)
// {
//     setTimeout(()=>
//     {
//         (isSmthToEat)?cb(null,"It was tasty"):cb('OOPS')
//     },randomTimeout())
// }
//
// function goForWalk(goodWeather,cb)
// {
//     setTimeout(()=>
//     {
//         (goodWeather)?cb(null,'See your friends'):cb('OOPS')
//     },randomTimeout())
//
// }
//
// function eatSupper(isSmthToEat,cb)
// {
//     setTimeout(()=>
//     {
//         (isSmthToEat)?cb(null,'Really good taste'):cb('OOPS')
//     },randomTimeout())
//
// }
//
// function goBed(needSleep,cb)
// {
//     setTimeout(()=>
//     {
//         (needSleep)?cb(null,'Have a great dreams'):cb('OOPS')
//     },randomTimeout())
//
// }
//
//
let div=document.createElement("div");
document.body.appendChild(div);

function dayFailed(){document.write('Day failed')}
//вставляє картинку і текст який отримує з колбеку
function createBlockImageAndText(url,text){
    let img=document.createElement("img");
    img.src=url;
    let p=document.createElement("p");
    p.innerText=text;
    div.appendChild(img);
    div.appendChild(p);
}

//час від 1000 до 5000 мілісекунд
function randomTimeout(){
    return 1000-0.5+Math.random()* (5000-1000+1);
}


//CALLBACK HELL
//HELP HELP HElP
//                                                      ||     this  looks so terrible & unreadable
//                                                      ||
//                                                     \||/
//                                                      \/
// wakeUp(confirm('Do the alarm clock make din-din'),(error,data)=>{
//     if(error) dayFailed();
//     else {
//        createBlockImageAndText( 'https://startupanz.com/wp-content/uploads/2020/05/how-to-wake-up-early-696x319.png', data);
//
//        cleanTeeth(confirm('Was water in your tap'),(error,data)=>
//        {
//            if(error) dayFailed();
//            else
//                {
//                createBlockImageAndText( 'https://image.freepik.com/free-vector/clean-tooth-background_1270-86.jpg', data);
//                eatBreakfest(confirm('Do you have milk for flakes?'),(error,data)=>
//                {
//                    if(error) dayFailed();
//                    else {
//                        createBlockImageAndText( 'https://i.pinimg.com/originals/1f/4f/cd/1f4fcd32ac128940596ed1392fa1a2d0.jpg', data);
//                        startCoding(confirm('Do you have the task for coding?'),(error,data)=>
//                        {
//                            if(error) dayFailed();
//                            else
//                                {
//                                createBlockImageAndText( 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg', data);
//                                    takeBreak(confirm('Do you wanna stay healthy and take a break?'),(error,data)=>
//                                    {
//                                        if(error) dayFailed();
//                                        else
//                                        {
//                                            createBlockImageAndText( 'https://image.freepik.com/free-vector/take-break_1343-435.jpg', data);
//                                            eatDinner(confirm('Is there smth to eat for dinner'),(error,data)=>
//                                                {
//                                                    if(error) dayFailed();
//                                                    else
//                                                    {
//                                                        createBlockImageAndText( 'https://i.pinimg.com/originals/52/ca/92/52ca929cee72cbf7b08d4c61e285e478.jpg', data);
//                                                        goForWalk(confirm('Is it a good weather?'),(error,data)=>
//                                                            {
//                                                                if(error) dayFailed();
//                                                                else
//                                                                {
//                                                                    createBlockImageAndText( 'https://previews.123rf.com/images/scusi/scusi1703/scusi170300015/74265340-people-go-for-a-walk-in-the-park.jpg', data);
//                                                                    eatSupper(confirm('Is there smth to eat for supper'),(error,data)=>
//                                                                    {
//                                                                        if(error) dayFailed();
//                                                                        else
//                                                                        {
//                                                                            createBlockImageAndText( 'https://st4.depositphotos.com/4472335/25330/v/1600/depositphotos_253305018-stock-illustration-family-sitting-at-dining-table.jpg', data);
//                                                                            goBed(confirm('YOU SHOULD GO TO THE BED'),(error,data)=>
//                                                                                {
//                                                                                    if(error) dayFailed();
//                                                                                    else
//                                                                                    {
//                                                                                        createBlockImageAndText( 'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1709/yupiramos170902874.jpg', data);
//
//
//                                                                                    }
//                                                                                }
//                                                                            )
//
//                                                                        }
//                                                                    }
//                                                                )
//
//
//                                                                }
//                                                            }
//                                                        )
//
//                                                    }
//                                                }
//                                            )
//
//                                        }
//                                    }
//                                    )
//                                }
//                        }
//                        )
//                    }
//                }
//                )
//            }
//
//        }
//        )
//     }
// }
// )
//

function wakeUpPromise(wasAlarm)
{ return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (wasAlarm)?resolve('Good MO'):reject('OOOOPS')
    },randomTimeout())

})

}

function cleanTeethPromise(wasWater)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (wasWater)?resolve('Teeth are clean'):reject('OOPS')
    },randomTimeout())
})


}

function eatBreakfestPromise(wasMilk)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (wasMilk)?resolve('Yummy'):reject('OOPS')
    },randomTimeout())
})


}

function startCodingPromise(wasTask)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (wasTask)?resolve("Let's go!"):reject('OOPS')
    },randomTimeout())
})

}

function takeBreakPromise(wannaBeHealthy)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (wannaBeHealthy)?resolve("You were needed for the rest"):reject('OOPS')
    },randomTimeout())
})

}

function eatDinnerPromise(isSmthToEat)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (isSmthToEat)?resolve("It was tasty"):reject('OOPS')
    },randomTimeout())
})

}

function goForWalkPromise(goodWeather)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (goodWeather)?resolve('See your friends'):reject('OOPS')
    },randomTimeout())
})


}

function eatSupperPromise(isSmthToEat)
{return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (isSmthToEat)?resolve('Really good taste'):reject('OOPS')
    },randomTimeout())
})
}

function goBedPromise(needSleep)
{   return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        (needSleep)?resolve('Have a great dreams'):reject('OOPS')
    },randomTimeout())
})
}

// wakeUpPromise(confirm('Do the alarm clock make din-din'))
//     .then(value => {
//         createBlockImageAndText( 'https://startupanz.com/wp-content/uploads/2020/05/how-to-wake-up-early-696x319.png', value);
//        return  cleanTeethPromise(confirm('Was water in your tap'))
//            .catch(reason => {dayFailed()})
//     })
//
//     .then(value => {
//         createBlockImageAndText( 'https://image.freepik.com/free-vector/clean-tooth-background_1270-86.jpg', value);
//           return   eatBreakfestPromise(confirm('Do you have milk for flakes?'))
//           .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://i.pinimg.com/originals/1f/4f/cd/1f4fcd32ac128940596ed1392fa1a2d0.jpg', value);
//            return  startCodingPromise(confirm('Do you have the task for coding?'))
//            .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg', value);
//        return takeBreakPromise(confirm('Do you wanna stay healthy and take a break?'))
//        .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://image.freepik.com/free-vector/take-break_1343-435.jpg', value);
//         return eatDinnerPromise(confirm('Is there smth to eat for dinner?'))
//         .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://i.pinimg.com/originals/52/ca/92/52ca929cee72cbf7b08d4c61e285e478.jpg', value);
//         return goForWalkPromise(confirm('Is it a good weather?'))
//         .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://previews.123rf.com/images/scusi/scusi1703/scusi170300015/74265340-people-go-for-a-walk-in-the-park.jpg', value);
//        return eatSupperPromise(confirm('Is there smth to eat for supper?'))
//        .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://st4.depositphotos.com/4472335/25330/v/1600/depositphotos_253305018-stock-illustration-family-sitting-at-dining-table.jpg', value);
//         return goBedPromise(confirm('YOU SHOULD GO TO THE BED'))
//             .catch(reason => {dayFailed()})
//     })
//     .then(value => {
//         createBlockImageAndText( 'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1709/yupiramos170902874.jpg', value);
//     })
//     .finally(() => {
//         createBlockImageAndText('https://i.pinimg.com/originals/f7/f7/99/f7f799fba63ba0dc965837454e62c3b8.jpg','End of the day');
//     })
//     .catch(reason => { dayFailed()});



async function myDaySchedule() {
    try {

        createBlockImageAndText('https://startupanz.com/wp-content/uploads/2020/05/how-to-wake-up-early-696x319.png',await wakeUpPromise(confirm('Do the alarm clock make din-din')));

        createBlockImageAndText('https://image.freepik.com/free-vector/clean-tooth-background_1270-86.jpg', await cleanTeethPromise(confirm('Was water in your tap')));

        createBlockImageAndText('https://i.pinimg.com/originals/1f/4f/cd/1f4fcd32ac128940596ed1392fa1a2d0.jpg',await eatBreakfestPromise(confirm('Do you have milk for flakes?')));

        createBlockImageAndText('https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',await startCodingPromise(confirm('Do you have the task for coding?')));

        createBlockImageAndText('https://image.freepik.com/free-vector/take-break_1343-435.jpg',await takeBreakPromise(confirm('Do you wanna stay healthy and take a break?')));

        createBlockImageAndText('https://i.pinimg.com/originals/52/ca/92/52ca929cee72cbf7b08d4c61e285e478.jpg',await eatDinnerPromise(confirm('Is there smth to eat for dinner?')));

        createBlockImageAndText('https://previews.123rf.com/images/scusi/scusi1703/scusi170300015/74265340-people-go-for-a-walk-in-the-park.jpg',await goForWalkPromise(confirm('Is it a good weather?')));

        createBlockImageAndText('https://st4.depositphotos.com/4472335/25330/v/1600/depositphotos_253305018-stock-illustration-family-sitting-at-dining-table.jpg',await eatSupperPromise(confirm('Is there smth to eat for supper?')));

        createBlockImageAndText('https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1709/yupiramos170902874.jpg',await goBedPromise(confirm('YOU SHOULD GO TO THE BED')));

        createBlockImageAndText('https://i.pinimg.com/originals/f7/f7/99/f7f799fba63ba0dc965837454e62c3b8.jpg', 'End of the day');
    }
    catch (e) {
        console.error(e);
        dayFailed();
    }

}

myDaySchedule();