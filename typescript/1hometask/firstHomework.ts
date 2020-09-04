class DEPUTY{
    name:string;
    bribe:number;
    declarationNumber:number;

    constructor(politicianName:string,declarationNumber:number,bribe:number=0) {
        this.name=politicianName;
        this.bribe=bribe;
        this.declarationNumber=declarationNumber;
    }
}

class FACTION {
    name:string;
    deputyList:object[]=[];

    constructor(nameOfFaction) {
    this.name=nameOfFaction;
    }

    addDeputy(politicianName:string,declarationNumber:number,bribe?:number):void{
        // @ts-ignore
       if (this.deputyList.some(value => value.declarationNumber===declarationNumber))
            console.log('There is already the deputy with such declaration number')
        else {this.deputyList.push(new DEPUTY(politicianName,declarationNumber, bribe));
           console.log('Deputy added'); divideLine();}
    }

    deleteDeputy(declarationNumber:number):void{
            let indexOfDeputyInList=this.deputyList.indexOf(value =>value.declarationNumber===declarationNumber);

           if (indexOfDeputyInList===-1)
                console.log(`No deputy with such declaration number:${declarationNumber}`)
           else
        {this.deputyList.splice(indexOfDeputyInList,1);
            console.log('Deputy deleted'); divideLine();}
    }

    showAllDeputies():object[]{

       console.log(this.deputyList.length? this.deputyList:'No deputies in the faction');
        return this.deputyList;
    }

    showAllBribeTakers():void{
        if(this.deputyList.length){
            this.deputyList.forEach(value => {
                // @ts-ignore
                if(value.bribe>0)
                {
                    console.log(value)}})

        }
        else console.log('No deputies in the faction');
    }

    showDeputyWithHighestBribeInFaction():void{
        if(this.deputyList.length){
            let deputyWithHighestBribe = this.deputyList.reduce((prev, cur) => {
                // @ts-ignore
                if (prev.bribe > cur.bribe) {
                    return prev
                }
                return cur
            })
            console.log(deputyWithHighestBribe)
        }
        else console.log('No deputies in the faction');
    }
}

class VERKHOVNA_RADA{
    factionList:object[]=[];

    addFaction(nameOfFaction:string):void{
        // @ts-ignore
       if( this.factionList.some(value => value.name.toLowerCase()===nameOfFaction.toLowerCase()) )
            {console.log(`There is already a faction with such name ${nameOfFaction}`); divideLine()}
       else
            {this.factionList.push(new FACTION(nameOfFaction))
                console.log('Added');
            divideLine();}
    }

    deleteFaction(nameOfFaction:string):void{
       if(this.factionList.length){
           let indexOfFactionInList=this.factionList.indexOf(faction=>faction.name.toLowerCase()===nameOfFaction.toLowerCase());
          if (indexOfFactionInList>-1)
          {this.factionList.splice(indexOfFactionInList,1);
              console.log('Deleted'); divideLine();}
          else
          {console.log('No such faction');
           divideLine()};


       }
       else  {console.log('No factions in Verkhovna Rada');
                divideLine()}
    }
     showAllFactions():void{
         // @ts-ignore
         console.log(this.factionList.length>0? this.factionList:'No factions in Verkhovna Rada');
     }

     showFaction(nameOfFaction:string){
         // @ts-ignore
         let indexOfFactionInList=this.factionList.findIndex(faction=> faction.name.toLowerCase()===nameOfFaction.toLowerCase());


         (indexOfFactionInList>-1)?
       console.log(this.factionList.length?this.factionList[indexOfFactionInList]:'No factions in Verkhovna Rada'):
             console.log('No such faction');


     }

    showDeputyWithHighestBribeInRada():void{
        if(this.factionList.length){
            let deputyWithHighestBribeInRada:object={bribe:0};
           // console.log(deputyWithHighestBribeInRada);

            let allBribeTakers=[];
            for (let i = 0; i < this.factionList.length; i++) {
                // @ts-ignore
                for (let j = 0; j < this.factionList[i].deputyList.length; j++) {
                    // @ts-ignore
                    if(this.factionList[i].deputyList[j].bribe>0) allBribeTakers.push(this.factionList[i].deputyList[j]);
                }
            }
            for (const bribeTaker of allBribeTakers) {
                // @ts-ignore
                if(bribeTaker.bribe>deputyWithHighestBribeInRada.bribe) deputyWithHighestBribeInRada=bribeTaker;
            }
            console.log(deputyWithHighestBribeInRada);
        }
        else {console.log('No factions in Verkhovna Rada');divideLine()}
    }

    showAllDeputiesInRada():void{
        // @ts-ignore
        this.factionList.forEach(value => {console.log(value.name+':');value.showAllDeputies()})
        divideLine();
    }

}



function factionMenu():void {
    console.log('Make your choice');
    console.log('1.Add deputy');
    console.log('2.Delete deputy');
    console.log('3.Show all deputies in faction')
    console.log('4.Show all bribe takers in faction')
    console.log('5.Show deputy with the highest bribe in faction')
    console.log('0.Return');
    divideLine();

}

function radaMenu():void {
    console.log('Make your choice');
    console.log('1.Add faction');
    console.log('2.Delete faction');
    console.log('3.Show all factions in Verkhovna Rada')
    console.log('4.Show faction')
    console.log('5.Show deputy with the highest bribe in fraction')
    console.log('6.Show all deputies in Verkhovna Rada')
    console.log('0.Return');
    divideLine();

}

function  startMenu():void{
    console.log('Make your choice');
    console.log('1.Verkhovna Rada');
    console.log('2.Faction');
    console.log('0.Exit');
    divideLine();
}

function chooseNumber() {
    return +prompt("Enter number");
}

function divideLine():void{
    console.log('___________________________________________________')
}

function chooseFaction():number|void {
    verkhovnaRada.showAllFactions();
    divideLine();
    let answer=+prompt('Select index of faction u want to choose');
    // @ts-ignore
    if (answer>verkhovnaRada.factionList.length-1||answer<0)
    {console.log('There is no factions with such index');return -1}
     else return answer;
}

const verkhovnaRada=new VERKHOVNA_RADA();
verkhovnaRada.addFaction('ze');
verkhovnaRada.addFaction('zel');
verkhovnaRada.addFaction('zez');
verkhovnaRada.addFaction('zex');

// @ts-ignore
verkhovnaRada.factionList[0].addDeputy('Olko',100,1500000);
// @ts-ignore
verkhovnaRada.factionList[0].addDeputy('Rostik',101,);
// @ts-ignore
verkhovnaRada.factionList[1].addDeputy('Viktorianna',123,0);
// @ts-ignore
verkhovnaRada.factionList[1].addDeputy('Nickolia',53443,8473);
// @ts-ignore
verkhovnaRada.factionList[1].addDeputy('Dimas',454,33333);
// @ts-ignore
verkhovnaRada.factionList[2].addDeputy('Ninelianna',6766,1234567);
// @ts-ignore
verkhovnaRada.factionList[2].addDeputy('Borys',10777,84430);
// @ts-ignore
verkhovnaRada.factionList[2].addDeputy('Viktor',10768,9990);
// @ts-ignore
verkhovnaRada.factionList[3].addDeputy('Mariya',178,50500);
// @ts-ignore
verkhovnaRada.factionList[3].addDeputy('Borys',987,0);

console.clear();

let switcherForStartMenu=true;
while (switcherForStartMenu){
    startMenu();
    switch (chooseNumber()) {
        case 1:
            {
                let switcherForRada=true;
                while (switcherForRada){
                    radaMenu();
                    switch (chooseNumber()) {
                        case 1:
                        {
                            console.log("Adding the fraction")
                            divideLine();

                             verkhovnaRada.addFaction(prompt("Enter name of faction"));
                            break;
                        }
                        case 2:
                        {
                            console.log("Deleting the fraction")
                            divideLine();

                            verkhovnaRada.deleteFaction(prompt("Enter name of faction"));
                            break;
                        }
                        case 3:
                        {
                            verkhovnaRada.showAllFactions();
                            divideLine();
                            break;
                        }
                        case 4:
                        {
                            verkhovnaRada.showAllFactions();
                            console.log('Choosing the faction')
                            divideLine();

                            verkhovnaRada.showFaction(prompt('Enter name of faction'));
                            divideLine();
                        }
                        case 5:
                        {
                            verkhovnaRada.showDeputyWithHighestBribeInRada();
                            break;
                        }
                        case 6:
                        {
                            verkhovnaRada.showAllDeputiesInRada();
                            break;
                        }
                        case 0:
                        {switcherForRada=false;break;}
                    }
                }
                break
            }
            case 2:
                {
                    let switcherForFaction=true;
                    while (switcherForFaction){
                        factionMenu();
                        switch (chooseNumber()) {

                            case 1:{
                                console.log('Adding deputy');
                                let choosed=chooseFaction();

                                if(choosed>-1)
                                    // @ts-ignore
                                {verkhovnaRada.factionList[choosed].addDeputy(prompt('Enter name of politician'),+prompt('Enter declaration number'),prompt('Enter bribe size(if present, else press cancel)'));}
                                break;}
                            case 2:{
                                let choosed=chooseFaction();
                                if(choosed>-1)
                                // @ts-ignore
                                verkhovnaRada.factionList[choosed].deleteDeputy(prompt('Enter declaration num'));
                                break;}
                            case 3:{
                                let choosed=chooseFaction();
                                if(choosed>-1)
                                // @ts-ignore
                                verkhovnaRada.factionList[choosed].showAllDeputies();
                                break;}
                            case 4:{
                                let choosed=chooseFaction();
                                if(choosed>-1)
                                // @ts-ignore
                                    console.log(verkhovnaRada.factionList[choosed].showAllBribeTakers());
                                break;}
                            case 5:{
                                let choosed=chooseFaction();
                                if(choosed>-1)
                                    // @ts-ignore
                                    verkhovnaRada.factionList[choosed].showDeputyWithHighestBribeInFaction();
                                break;}
                            case 0:{
                                switcherForFaction=false;
                                break;}

                        }
                    }
                    break;
                }

        case 0:{switcherForStartMenu=false; break}
    }
}








