const createDirectory=(path)=>{
  if(!fs.existsSync(path)){
    fs.mkdir(path,err=>{if(err) console.log(err)});
  }
}
//I use existsSync cause I have windows7 and node v.13.14.0 is the
// latest which is supported.And asynchronous 'exists' does not work

const createTXT_Files=(pathToTXT,data)=>{
  if (!fs.existsSync(pathToTXT))
    fs.writeFile(pathToTXT,data,err =>
    {if(err) console.log(err)} );
}

async function readDirectory(pathToDirectory)
{
  return new Promise((resolve, reject) => {
    fs.readdir(pathToDirectory,(err, files) =>
    { if(err) return reject(err);
      resolve(files)
    })
  })
}

const moveGenderToAnotherDir=(oldPath,newPath,fileName,gender)=>{

  let pathToFile=path.join(oldPath,fileName);
  let newPathToFile=path.join(newPath,fileName);
  fs.readFile(pathToFile,(err, human) => {
    if (err) console.log(err);
    else{
      human=JSON.parse(human.toString());
      if(human.sex===gender) fs.rename(pathToFile,newPathToFile,err1 => {if(err1) console.log(err1)})
    }
  })
  }


//create peopleList. Why? Cause i wanna create all .txt files in loop, not by hands
const people=[
  {name:'Dima',sex:'male'},
  {name:'Viktor',sex:'male'},
  {name:'ViKa',sex:'female'},
  {name:'Olya',sex:'female'},
  {name:'Denis',sex:'male'},
  {name:'Lina',sex:'female'},
  {name:'Uliana',sex:'female'},
  {name:'Oleg',sex:'male'},
  {name:'Ivanka',sex:'female'},
]

const fs=require('fs');
const path=require('path');

const dir18='1800';
const dir20='2000';

const male='male';
const female='female';

const pathToDir18=path.join(process.cwd(),dir18);
const pathToDir20=path.join(process.cwd(),dir20)



//creating directories
createDirectory(pathToDir18);
createDirectory(pathToDir20);

//creating files with some data
for (let i = 0; i < people.length; i++) {
  let pathToTXT_inDir18=path.join(pathToDir18,people[i].name+'.txt');
  let pathToTXT_inDir20=path.join(pathToDir20,people[i].name+'_1.txt');//i have written '_1.txt' cause when i'll move files from dir 1800 to dir 2000 it'll be collision of names

  createTXT_Files(pathToTXT_inDir18,JSON.stringify(people[i]));
  createTXT_Files(pathToTXT_inDir20,JSON.stringify(people[i]));

}

//code below moves all females persons from directory 2000 to directory 1800
readDirectory(pathToDir18)
  .catch(err=>{console.log(err)})
  .then(files => {
    for (let i = 0; i < files.length; i++) {
      moveGenderToAnotherDir(pathToDir18,pathToDir20,files[i],female)
    } })

//code below moves all females persons from directory 1800 to directory 2000

readDirectory(pathToDir20)
  .catch(err=>{console.log(err)})
  .then(files => {
    for (let i = 0; i < files.length; i++) {
      moveGenderToAnotherDir(pathToDir20,pathToDir18,files[i],male)
    } })




