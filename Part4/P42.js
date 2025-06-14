const createGame = ()=>{
    let secretNumber  = Math.floor(Math.random() * 10) + 1;
    const guess = (number)  =>{
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
    const bodyElement = document.querySelector('body')
    document.getElementById("output").innerHTML=output
    if(output==="Too high"){
         bodyElement.classList.remove('toolow')
        bodyElement.classList.remove('correct')

        bodyElement.classList.add('toohigh')
    }
    else if(output==="Too low"){
        bodyElement.classList.remove('toohigh')
        bodyElement.classList.remove('correct')
        bodyElement.classList.add('toolow')

    }
    else if(output==="You guessed it"){
         bodyElement.classList.remove('toohigh')
        bodyElement.classList.remove('toolow')
        bodyElement.classList.add('correct')
    }
}