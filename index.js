import Gameboard from './gameboard.js'
import Ship from './ship.js'
import Player from './player.js'

const playerGrid = document.querySelector("#player")
const computerGrid = document.querySelector("#computer")
const input = document.querySelector("input")
const submit = document.querySelector("submit")
const shipTypes= document.querySelector("")

let human = new Player
let computer = new Player
human.gameboard = new Gameboard
computer.gameboard = new Gameboard

submit.addEventListener('click', (event) => {
    event.preventDefault()

})

function createGrid(){
    for (i=1; i <= 100; i++){
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.index = i
        playerGrid.appendChild("cell")
        computerGrid.appendChild("cell")
        cell.style.border = "1px solid black"
        cell.style.boxSizing = "border-box"
    }
}

