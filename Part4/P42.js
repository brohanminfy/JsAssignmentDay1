const createGame = ()=>{
    let secretNumber  = Math.floor(Math.random() * 10) + 1;
    const guess = (number)=>{
        console.log(secretNumber)
        console.log(number)
        if(number==secretNumber){
            return("You guessed it")
            
        }
        else if(number>secretNumber){
            return("Too high")
        }
        else{
            return("Too low")
        }
    }
    return guess
}
const player1 = createGame()
const checkNumber = ()=>{
    var num = parseInt(document.getElementById("userNumber").value)

    var output = player1(num)
        document.getElementById("output").innerHTML=output
   
}