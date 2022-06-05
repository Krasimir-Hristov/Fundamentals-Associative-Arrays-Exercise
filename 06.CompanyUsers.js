function solve(input){

    let companyes = {};

    for(let line of input){
        let [company, id] = line.split(` -> `);
        if(!companyes.hasOwnProperty(company)){
           companyes[company] = [];
        }
        if(!companyes[company].includes(id)){
            companyes[company].push(id)
        }
        
    }
    let sorted = Object.keys(companyes).sort((a, b) => a.localeCompare(b))
  
    for(let company of sorted){
       console.log(company);
       for(let id of companyes[company]){
           console.log(`-- ${id}`)
       }
    }

  
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])