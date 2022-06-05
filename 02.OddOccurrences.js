function solve(input){
let words = input.split(` `);
let result = {};


for (let word of words) {

    word = word.toLowerCase();

    if(result.hasOwnProperty(word)){
        result[word]++;
    }else {
        result[word] = 1;
    }
}

let filtered = Object.entries(result).filter(([word, count]) => {

    if(count % 2 == 1){
        return  true
    }else {
        return false
    }
}).map(entry => entry[0])
console.log(filtered.join(` `))



}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')