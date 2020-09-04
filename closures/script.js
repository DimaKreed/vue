Date.prototype.format = function (mask, utc) {return dateFormat(this, mask, utc);};
//let cards=[];
function userCard(numOfCard) {
  if(numOfCard<1) console.error('Incorrect entered number')
  if(numOfCard>3) console.error('You can not add card.The number of cards is limited');
  //if(cards.includes(numOfCard)) console.error('You can not add card.There is already a card with this number');

  else {
    let balance=100;
let transactionLimit=100;
let historyLogs=[];

let key=numOfCard;
//cards.push(key);

function actionWithCard(operationType,credits,operationTime) {
  historyLogs.push({operationType:operationType,credits:credits,operationTime:operationTime})
}

function putCredits(credits)
{
  balance+=credits;
  actionWithCard('Received credits',credits,new Date().format("dd-mm-yyyy HH:MM:ss"))
}

function takeCredits(credits)
{
  (credits<=balance&&credits<=transactionLimit )?balance-=credits:console.error("You nave not so much money");
  actionWithCard('Withdrawal of credits',credits,new Date().format("dd-mm-yyyy HH:MM:ss"))

}

function setTransactionLimit(limit) {
transactionLimit=limit;
  actionWithCard('Transaction limit change',limit,new Date().format("dd-mm-yyyy HH:MM:ss"))
}

function transferCredits(credits,card)
{
  if(card)
  {
    if(credits*1.005<=balance&&credits*1.005<=transactionLimit )
    {
      balance-=credits*1.005;
      card.balance+=credits;

    }
    else console.error("You nave not so much money");
  }
  else console.error('Incorrect card to transfer');
}

function getCardOptions() {
return {key,balance,transactionLimit,historyLogs}
}

return {putCredits,takeCredits,setTransactionLimit,transferCredits,getCardOptions}
  }
}

class UserAccount{
  constructor(name)
  {
    this.name=name;
    this.cards=[];
  }


  addCard()
  {
    let num=this.cards.length+1;
    let card=userCard(num);
    if(card)
    {this.cards.push(card);}
  }

  getCardByKey(number)
  {
    if (number<1||number>3) console.error('invalid number of card');
    else return this.cards[number-1]
      //.getCardOptions();

  }


}

let card=userCard(1);
console.log(card.getCardOptions());
card.putCredits(300);
card.setTransactionLimit(200)
card.takeCredits(200);
console.log(card.getCardOptions());


let dima=new UserAccount('dima');
dima.addCard();
dima.addCard();
dima.addCard();

let card100=dima.getCardByKey(1)
card100.putCredits(100);
console.log(card100.getCardOptions());
console.log(dima.cards);
