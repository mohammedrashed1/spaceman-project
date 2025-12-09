const alphabetLtrs = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]

const words = [
  "gravity",
  "station",
  "rocket",
  "galaxy",
  "diamond",
  "sunrise",
  "electric",
  "journey",
  "picture",
  "monitor"
]
const hintH2 = document.querySelector("#h2")

let cpuChoice = Math.floor(Math.random() * 10)

let word = words[cpuChoice]

let letters = word.split("")

let hint ;

let answer = Array(word.length).fill("_")
console.log(answer)
console.log(letters)

function discerption(){
if(word === "gravity"){
    hint = "Hint: The force that pulls objects toward the ground"
} else if(word === "station"){
    hint = "Hint: A place where people or trains stop"
} else if(word === "rocket"){
    hint = "Hint: Something that flies fast into space"
} else if(word === "galaxy"){
    hint = "Hint: A huge group of stars and planets"
} else if(word === "diamond"){
    hint = "Hint: A shiny, valuable gemstone"
} else if(word === "sunrise"){
    hint = "Hint: When the sun rises in the morning"
} else if(word === "electric"){
    hint = "Hint: Something that works with electricity"
} else if(word === "journey"){
    hint = "Hint: A long trip or adventure"
} else if(word === "picture"){
    hint = "Hint: An image or a photo you can see"
} else if(word === "monitor"){
    hint = "Hint: A screen used for a computer or watching things"
}
hintH2.textContent = hint
}





console.log(word)
discerption()


