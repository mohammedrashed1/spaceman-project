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

let hint;

let answer = [];

function discerption(){
if(word === "gravity"){
    hint = "The force that pulls objects toward the ground"
} else if(word === "station"){
    hint = "A place where people or trains stop"
} else if(word === "rocket"){
    hint = "Something that flies fast into space"
} else if(word === "galaxy"){
    hint = "A huge group of stars and planets"
} else if(word === "diamond"){
    hint = "A shiny, valuable gemstone"
} else if(word === "sunrise"){
    hint = "When the sun rises in the morning"
} else if(word === "electric"){
    hint = "Something that works with electricity"
} else if(word === "journey"){
    hint = "A long trip or adventure"
} else if(word === "picture"){
    hint = "An image or a photo you can see"
} else if(word === "monitor"){
    hint = "A screen used for a computer or watching things"
}
hintH2.textContent = hint
}


