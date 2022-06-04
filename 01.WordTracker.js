function solve(input){

let words = input.shift().split(` `);
let result = {};
for(let word of words){
    result[word] = 0;
}

for(let currWord of input){
    if(result.hasOwnProperty(currWord)){
        result[currWord] += 1;
    }
}

let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]).forEach(a => console.log(`${a[0]} - ${a[1]}`))

}
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])