let scores = [25, 80, 45, 95, 60, 75];
let len = scores.length
const averageScore = scores.reduce((accumulator, currValue)=>{
    return (currValue/len)+accumulator
},0)
// const averageScore = sumScores/scores.length
// console.log(averageScore)
console.log(averageScore)