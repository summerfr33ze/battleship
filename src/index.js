import Gameboard from './gameboard.js'
import Ship from './ship.js'
import Player from './player.js'
import './style.css' 

const playerGrid = document.querySelector("#player")
const computerGrid = document.querySelector("#computer")
const input = document.querySelector("input")
const submit = document.querySelector("submit")
const shipTypes = document.querySelector(".ship-types")

let carrier = new Ship(5)
let battleship = new Ship(4)
let cruiser = new Ship(3)
let submarine = new Ship(3)
let destroyer = new Ship(2)
let shipArray = [carrier,battleship,cruiser,submarine,destroyer]
let n = 0
let currentShip = shipArray[n]
let currentIndex
export let humanGameboard = new Gameboard
let computerGameboard = new Gameboard



function createGrids(){
    for (let i=0; i < 100; i++){
        const compCell = document.createElement("div");
        const playerCell = document.createElement("div")
        compCell.className = "comp-cell";
        playerCell.className = "player-cell";
        compCell.dataset.index = i
        playerCell.dataset.index = i
        playerCell.addEventListener("mouseover", () => {
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                if (cell.dataset.index >= i && cell.dataset.index < i + currentShip.length){
                    currentIndex = i

                    cell.style.backgroundColor = "black"
                }

            })
        })
        playerCell.addEventListener("mouseout", handleMouseOut)

       playerCell.addEventListener("click", () => {
            let count = 0
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                if (cell.dataset.index >= currentIndex && cell.dataset.index <= currentIndex + currentShip.length && cell.dataset.isShip == true){
                    count++
                }
            })



            console.log(count)

            if (count === 0) {
            if(n < 4){
            n += 1
            }
            currentShip = shipArray[n]
            playerCell.removeEventListener("mouseout", handleMouseOut)
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                
                if (cell.dataset.index >= currentIndex && cell.dataset.index <= currentIndex + currentShip.length){
                    cell.dataset.isShip = true
                }
            })
        }


            
    }) 

        playerGrid.appendChild(playerCell)
        computerGrid.appendChild(compCell)
    }
}

function handleMouseOut() {
    
    const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                
                if ((cell.dataset.index >= currentIndex && cell.dataset.index < currentIndex + currentShip.length) && (!cell.dataset.isShip === true)){
                    cell.style.backgroundColor = "white"
                }
            })
}

export function placesShip(){

    let a = currentIndex % 10
    let b = Math.floor(currentIndex/10)
    let x = a + currentShip.length
    let y = b

    currentShip.position = [[a,b],[x,y]]
    humanGameboard.placeShip(currentShip)

}



createGrids()