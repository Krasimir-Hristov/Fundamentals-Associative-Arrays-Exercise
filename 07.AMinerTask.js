function solve(input){
let mine = {};

for(let i = 0; i< input.length; i +=2){
    let resours = input[i];
    let quantity = Number(input[i + 1]);
    if(!mine.hasOwnProperty(resours)){
        mine[resours] = quantity
    }else {
        mine[resours] += quantity
    }
}
Object.entries(mine).forEach(a => console.log(`${a[0]} -> ${a[1]}`))
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])
console.log(`-------------------------------------------------`)
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])