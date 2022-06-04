function solve(input){
let leaders = {};

for(let line of input){
    let leader = line.split(` `);
    
    if(leader.includes(`arrives`)){
        let index = leader.indexOf(`arrives`);
        leader.splice(index,1);
        let leaderName = leader.join(` `);
        
      if(leaders.hasOwnProperty(leaderName) == false){
          leaders[leaderName] = [];
      }
        
    }else if (leader.includes(`defeated`)){
        let index = leader.indexOf(`defeated`);
        leader.splice(index,1);
        let leaderName = leader.join(` `);
       delete leaders[leaderName];
    }
    for(let army of line){
        let [nameL , armyN] = .split(`: `)
        console.log(nameL, armyN )
    }
}




}
solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])