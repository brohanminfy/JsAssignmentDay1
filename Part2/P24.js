let scores = [25, 80, 45, 95, 60, 75];

const sumScores = scores.reduce((accumulator, currValue)=>{
    return currValue+accumulator
},0)
const averageScore = sumScores/scores.length
console.log(averageScore)