import Gameboard from './gameboard.js'
import Ship from './ship.js'
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
let currentPlayerShip = shipArray[n]
let currentComputerShip
let currentPlayerIndex
let currentComputerIndex
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
                if (cell.dataset.index >= i && cell.dataset.index < i + currentPlayerShip.length){
                    currentPlayerIndex = i

                    cell.style.backgroundColor = "black"
                }

            })
        })
        playerCell.addEventListener("mouseout", handleMouseOut)

       playerCell.addEventListener("click", () => {
            let count = 0
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                if (cell.dataset.index >= currentPlayerIndex && cell.dataset.index <= currentPlayerIndex + currentPlayerShip.length && cell.dataset.isShip){
                    count++
                }
            })



            

            if (count === 0) {
            placesPlayerShip()
            if(n < 4){
            n += 1
            }
            currentPlayerShip = shipArray[n]
            playerCell.removeEventListener("mouseout", handleMouseOut)
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                
                if (cell.dataset.index >= currentPlayerIndex && cell.dataset.index <= currentPlayerIndex + currentPlayerShip.length){
                    cell.dataset.isShip = true
                }
            })
        }

        
            
    }) 

    compCell.addEventListener("click", () => {
      
        if(compCell.dataset.isShip){
            compCell.style.backgroundColor = "red"
        }

        else {compCell.style.backgroundColor = "black"}

        let x = compCell.dataset.index % 10
        let y = Math.floor(compCell.dataset.index / 10)
        computerGameboard.receiveAttack(x,y)
        
        computerMove()
    })

        playerGrid.appendChild(playerCell)
        computerGrid.appendChild(compCell)
    }
}

function randomizeComputerShips(){
    for(let i=0;i < shipArray.length; i++){
        currentComputerShip = shipArray[i]
        let shipPosition = positionShip(currentComputerShip)
        placesComputerShip(shipPosition)
        const cells = document.querySelectorAll(".comp-cell")
        cells.forEach(cell => {
            if (cell.dataset.index >= shipPosition && cell.dataset.index < shipPosition + currentComputerShip.length){
                cell.dataset.isShip = true
            }
        })
    }
}

function positionShip (currentComputerShip) {
    currentComputerIndex = Math.floor(Math.random() * 100)
    let cellsAreEmpty = true
    const cells = document.querySelectorAll(".comp-cell")
    cells.forEach(cell => {
        if (cell.dataset.index >= currentComputerIndex && cell.dataset.index <= currentComputerIndex + currentComputerShip.length && cell.dataset.isShip){
            cellsAreEmpty = false
        }
    })

    if (currentComputerIndex + currentComputerShip.length < (currentComputerIndex + 10) - (currentComputerIndex % 10) && cellsAreEmpty) {
        return currentComputerIndex
    }
    return positionShip(currentComputerShip)
}


function handleMouseOut() {
    
    const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                
                if ((cell.dataset.index >= currentPlayerIndex && cell.dataset.index < currentPlayerIndex + currentPlayerShip.length) && (!cell.dataset.isShip === true)){
                    cell.style.backgroundColor = "white"
                }
            })
}

export function placesPlayerShip(){

    let a = currentPlayerIndex % 10
    let b = Math.floor(currentPlayerIndex/10)
    let x = a + currentPlayerShip.length
    let y = b

    currentPlayerShip.position = [[a,b],[x,y]]
    humanGameboard.placeShip(currentPlayerShip)

}

function placesComputerShip(shipPosition){
    let a = shipPosition % 10
    let b = Math.floor(shipPosition/10)
    let x = a + currentComputerShip.length
    let y = b

    currentComputerShip.position = [[a,b],[x,y]]
    computerGameboard.placeShip(currentComputerShip)
}

function computerMove(){
    let target = Math.floor(Math.random() * 100)
    
    const cells = document.querySelectorAll(".player-cell")
    cells.forEach(cell => {
        
        if (cell.dataset.index == target){
            if (cell.dataset.isShip){
                cell.style.backgroundColor = "red"
            } 

            else {cell.style.backgroundColor = "gray"}
        }

        else return
    })

    let x = target % 10
    let y = Math.floor(target / 10)
    humanGameboard.receiveAttack(x,y)
}




createGrids()
randomizeComputerShips()

