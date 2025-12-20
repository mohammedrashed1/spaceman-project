const words = [
  "GRAVITY",
  "STATION",
  "ROCKET",
  "GALAXY",
  "DIAMOND",
  "SUNRISE",
  "ELECTRIC",
  "JOURNEY",
  "PICTURE",
  "MONITOR"
]
const hintH2 = document.querySelector("#h2")
const displayWord = document.querySelector("#displayWord")
const keys = document.querySelectorAll(".key")
const result = document.querySelector("#winlose")
const wrongCount = document.querySelector("#wrongCount")
const resetBtn = document.querySelector("#resetBtn")
const nextBtn = document.querySelector("#nextBtn")

let wrong = 0
let cpuChoice
let word
let letters
let answer

function discerption(){
  const hints = {
    GRAVITY: "Hint: The force that pulls objects toward the ground",
    STATION: "Hint: A place where people or trains stop",
    ROCKET: "Hint: Something that flies fast into space",
    GALAXY: "Hint: A huge group of stars and planets",
    DIAMOND: "Hint: A shiny, valuable gemstone",
    SUNRISE: "Hint: When the sun rises in the morning",
    ELECTRIC: "Hint: Something that works with electricity",
    JOURNEY: "Hint: A long trip or adventure",
    PICTURE: "Hint: An image or a photo you can see",
    MONITOR: "Hint: A screen used for a computer or watching things"
  }
  hintH2.textContent = hints[word]
}

function initGame(){
  wrong = 0
  wrongCount.textContent = "Wrong guesses: 0"
  result.textContent = ""
  cpuChoice = Math.floor(Math.random() * words.length)
  word = words[cpuChoice]
  letters = word.split("")
  answer = Array(word.length).fill("_")
  displayWord.textContent = answer.join(" ")
  discerption()
  keys.forEach(btn => btn.disabled = false)
  nextBtn.disabled = true
}

function checkAnswer() {
  keys.forEach(button => {
    button.addEventListener("click", () => {
      const letter = button.textContent
      if (letters.includes(letter)){
        result.textContent = "Correct select"
        letters.forEach((ltr,index)=>{
          if(ltr===letter) answer[index]=letter
        })
        displayWord.textContent = answer.join(" ")
      } else {
        wrong++
        wrongCount.textContent = `Wrong guesses: ${wrong}`
        result.textContent = "Wrong select"
        if(wrong===6){
          result.textContent="You Lose ❌"
          keys.forEach(btn=>btn.disabled=true)
          nextBtn.disabled=false
        }
      }
      button.disabled = true
      checkWinLose()
    })
  })
}

function checkWinLose(){
  if(!answer.includes("_")){
    result.textContent="You Win 🎉"
    keys.forEach(btn=>btn.disabled=true)
    nextBtn.disabled=false
  }
}

resetBtn.addEventListener("click", initGame)
nextBtn.addEventListener("click", initGame)

initGame()
checkAnswer()
