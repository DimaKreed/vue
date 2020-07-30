function isAnagram(str1,str2) {
    return (str1.split("").sort((a, b) => (a < b) ? -1 : 1).join("") === str2.split("").sort((a, b) => (a < b) ? -1 : 1).join(""));
}

function isSquare(nums1,nums2){
     if (nums1.length!==nums2.length) return false;
    else {
         let counter=0;
         for (let i = 0; i < nums1.length; i++) {
             if (nums1.map(value=>value*value).sort((a, b) => a-b)[i]===nums2.sort((a, b) => a-b)[i]) counter++;
         }
         return (counter===nums1.length);
         }
     }

console.log(isSquare([1,2,3],[9,1,4]));
console.log(isSquare([2,1,2],[1,1,4]));
console.log(isSquare([1,2,3,5],[25,9,1,4,4]));



console.log(isAnagram('dima','aimd'));
console.log(isAnagram('okten','token'));
console.log(isAnagram('test','rest'));




// function sleep(ms){
//   return new Promise(resolve => setTimeout(resolve,ms));
// }


 async function printMachine(string)
 {
   let p=document.createElement("p");
   document.body.appendChild(p);
   string=string.split('');
   let res=p.innerText;
   let i=0;
   while (i<string.length)
{
  res+=string[i];
  p.innerText=res;
  i++;
  await new Promise(resolve => setTimeout(resolve,100+Math.random()*400));
    //await sleep(100+Math.random()*400)
}

 }

(async  () =>
  {
    await printMachine('Hi I am Dima ')
    await printMachine("And I'm studying hard on JS courses, because I wanna be a cool developer");
  }
)()





