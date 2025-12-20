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
const displayWord = document.querySelector("#displayWord");
const keys = document.querySelectorAll(".key")
const result = document.querySelector("#winlose")
const wrongCount = document.querySelector("#wrongCount");

let wrong = 0;

let cpuChoice = Math.floor(Math.random() * 10)

let word = words[cpuChoice]

let letters = word.split("")

let hint;

let answer = Array(word.length).fill("_")
console.log(answer)
console.log(letters)

function discerption(){
if(word === "GRAVITY"){
    hint = "Hint: The force that pulls objects toward the ground"
} else if(word === "STATION"){
    hint = "Hint: A place where people or trains stop"
} else if(word === "ROCKET"){
    hint = "Hint: Something that flies fast into space"
} else if(word === "GALAXY"){
    hint = "Hint: A huge group of stars and planets"
} else if(word === "DIAMOND"){
    hint = "Hint: A shiny, valuable gemstone"
} else if(word === "SUNRISE"){
    hint = "Hint: When the sun rises in the morning"
} else if(word === "ELECTRIC"){
    hint = "Hint: Something that works with electricity"
} else if(word === "JOURNEY"){
    hint = "Hint: A long trip or adventure"
} else if(word === "PICTURE"){
    hint = "Hint: An image or a photo you can see"
} else if(word === "MONITOR"){
    hint = "Hint: A screen used for a computer or watching things"
}
hintH2.textContent = hint
}

function checkAnswer() {
  keys.forEach(button => {
    button.addEventListener("click", () => {
      const letter = button.textContent;

      if (letters.includes(letter)) {
        result.textContent = "Correct select"

        letters.forEach((ltr, index) => {
          if (ltr === letter) {
            answer[index] = letter
          }
        })

        displayWord.textContent = answer.join(" ");
      } else {
        result.textContent = "Wrong select"
        wrong++;
        wrongCount.textContent = `Wrong guesses: ${wrong}`;

      }

      button.disabled = true
      checkWinLose()
    })
  })
  
}
function checkWinLose(){
if (!answer.includes("_")) {
  result.textContent = "You Win 🎉"
  keys.forEach(btn => btn.disabled = true)
}
}

displayWord.textContent = answer.join(" ")





console.log(word)
discerption()
checkAnswer()
