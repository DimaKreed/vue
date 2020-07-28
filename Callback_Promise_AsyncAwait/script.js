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

function dayFailed(){document.write('Day failed')};
//вставляє картинку і текст який отримує з колбеку
function createBlockImageAndText(url,text){
    let img=document.createElement("img");
    img.src=url;
    let p=document.createElement("p");
    p.innerText=text;
    div.appendChild(img);
    div.appendChild(p);
}

//час від 1 до 5 секунд
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
//                                                                            goBed('YOU SHOULD GO TO THE BED',(error,data)=>
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

function wakeUp(wasAlarm,cb)
{
    setTimeout(()=>
    {
        (wasAlarm)?cb(null,'Good MO'):cb('OOOOPS')
    },randomTimeout())

}

function cleanTeeth(wasWater,cb)
{
    setTimeout(()=>
    {
        (wasWater)?cb(null,'Teeth are clean'):cb('OOPS')
    },randomTimeout())

}

function eatBreakfest(wasMilk,cb)
{
    setTimeout(()=>
    {
        (wasMilk)?cb(null,'Yummy'):cb('OOPS')
    },randomTimeout())

}

function startCoding(wasTask,cb)
{
    setTimeout(()=>
    {
        (wasTask)?cb(null,"Let's go!"):cb('OOPS')
    },randomTimeout())
}

function takeBreak(wannaBeHealthy,cb)
{
    setTimeout(()=>
    {
        (wannaBeHealthy)?cb(null,"You were needed for the rest"):cb('OOPS')
    },randomTimeout())
}

function eatDinner(isSmthToEat,cb)
{
    setTimeout(()=>
    {
        (isSmthToEat)?cb(null,"It was tasty"):cb('OOPS')
    },randomTimeout())
}

function goForWalk(goodWeather,cb)
{
    setTimeout(()=>
    {
        (goodWeather)?cb(null,'See your friends'):cb('OOPS')
    },randomTimeout())

}

function eatSupper(isSmthToEat,cb)
{
    setTimeout(()=>
    {
        (isSmthToEat)?cb(null,'Really good taste'):cb('OOPS')
    },randomTimeout())

}

function goBed(needSleep,cb)
{
    setTimeout(()=>
    {
        (needSleep)?cb(null,'Have a great dreams'):cb('OOPS')
    },randomTimeout())

}