let scores = [25, 80, 45, 95, 60, 75];
const topScores = scores.filter((number)=>{
    return number>=70;
})
console.log(topScores)