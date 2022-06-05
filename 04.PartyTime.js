function solve(input) {

    let regularList = new Set();
    let vipList = new Set()
    

   while(input[0] != `PARTY`){
       let guest = input.shift();
     
       if(Number.isNaN(Number(guest[0]))){
          regularList.add(guest)
       }else{
           vipList.add(guest)
       }
 }
 for( let line of input){
    if(vipList.has(line)){
        vipList.delete(line)
    }else {
        regularList.delete(line)
    }
 }
 
 let vipArr = Array.from(vipList);
 let regArr = Array.from(regularList);
 vipArr.push(...regArr)
 console.log(vipArr.length)
 for(let printLine of vipArr){
     console.log(printLine)
 }

}
// solve(['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ])
// solve(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ])
solve([
    "IK9Yo0h",
    "NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "7IK9Yo0h",
    "9NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "6tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "6tSzE5t0p",
  ]);