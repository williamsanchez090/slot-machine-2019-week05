// worked on in group with Docanto and Eli.
const imgArray = ['mort.jfif','four.jfif','five.jfif','me.jpg','rick.jfif']

const firstImage = document.querySelector('#firstImage')

const secondImage = document.querySelector('#secondImage')

const thirdImage = document.querySelector('#thirdImage')


let totalLives = 50000

let addTwentyThousand = 20000
let addFiveHundred = 500


document.querySelector('#minBet').addEventListener('click', actingBet)
document.querySelector('#maxBet').addEventListener('click', actingBet)



document.querySelector('#amount').innerText= totalLives


//create bet 
function actingBet(event){

    deadMorty = Number(event.target.value)

    if (totalLives < deadMorty){
        alert('You are hereby relived of your portal gun. You aren\' the Rickest Rick')
        document.querySelector('#seeTotal').innerText= ''
    }
    else{
        totalLives -= deadMorty
        document.querySelector('#currentMortys').innerText = totalLives
        cyclePhotos()
    }
}

//this creates the random number to assign to each picture. it also
function randomNumber(){
    let oneThroughFive = Math.floor(Math.random() * 5)
    return oneThroughFive
    }

    function cyclePhotos(){
        let firstNumber = randomNumber()
        let secondNumber = randomNumber ()
        let thirdNumber = randomNumber ()
   
        firstImage.src = imgArray[firstNumber]
        secondImage.src = imgArray[secondNumber]
        thirdImage.src = imgArray [thirdNumber]

        Winner(firstNumber, secondNumber, thirdNumber)

 }

 function Winner(firstNumber, secondNumber, thirdNumber){
     if(firstNumber === secondNumber && secondNumber === thirdNumber){
         document.querySelector('#seeTotal').innerText = 'You\'ve Unlocked the Portal Gun'
         Jerry()
     }
     else{
         document.querySelector('#seeTotal').innerText = 'How Many Mortys must suffer?'
     }
 }
function Jerry(){
    totalLives +=  addTwentyThousand
    document.querySelector('#amount').innerText = totalLives
}
