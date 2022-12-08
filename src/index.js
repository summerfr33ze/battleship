import Gameboard from './gameboard.js'
import Ship from './ship.js'
import './style.css' 


// dom methods to refer to html elements like the grids
const playerGrid = document.querySelector("#player")
const computerGrid = document.querySelector("#computer")
const displayWinner = document.querySelector(".display-winner")

//ship objects created with imported ship class

let playerCarrier = new Ship(5)
let playerBattleship = new Ship(4)
let playerCruiser = new Ship(3)
let playerSubmarine = new Ship(3)
let playerDestroyer = new Ship(2)

let computerCarrier = new Ship(5)
let computerBattleship = new Ship(4)
let computerCruiser = new Ship(3)
let computerSubmarine = new Ship(3)
let computerDestroyer = new Ship(2)

//arrays to store ships in and various variables to store current state of game

let playerShipArray = [playerCarrier,playerBattleship,playerCruiser,playerSubmarine,playerDestroyer]
export let computerShipArray = [computerCarrier,computerBattleship,computerCruiser,computerSubmarine,computerDestroyer]
let n = 0
let currentPlayerShip = playerShipArray[n]
let currentComputerShip
let currentPlayerIndex
let currentComputerIndex
export let humanGameboard = new Gameboard
export let computerGameboard = new Gameboard


// make the grid interface and handle drag and drop behavior

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
            currentPlayerShip = playerShipArray[n]
            playerCell.removeEventListener("mouseout", handleMouseOut)
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                
                if (cell.dataset.index >= currentPlayerIndex && cell.dataset.index <= currentPlayerIndex + currentPlayerShip.length){
                    cell.dataset.isShip = true
                }
            })
        }

        
            
    }) 

    //handle player moves (computer moves right after player)

    compCell.addEventListener("click", () => {
      
        if(compCell.dataset.isShip){
            compCell.style.backgroundColor = "red"
        }

        else {compCell.style.backgroundColor = "black"}

        let x = compCell.dataset.index % 10
        let y = Math.floor(compCell.dataset.index / 10)
        computerGameboard.receiveAttack(x,y)
        
        endGame()
        computerMove()
    })

        playerGrid.appendChild(playerCell)
        computerGrid.appendChild(compCell)
    }
}


function randomizeComputerShips(){
    for(let i=0;i < computerShipArray.length; i++){
        currentComputerShip = computerShipArray[i]
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

// computer keeps choosing random numbers until it can find  a spot where it can place a ship that doesn't overlap other ships or the edge

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
    endGame()
}

function endGame(){

    let playerCount = 0
    let computerCount = 0

playerShipArray.forEach(ship => {
    if(ship.isSunk){
        computerCount++
    }
    else return
})

computerShipArray.forEach(ship => {
    if(ship.isSunk){
        playerCount++
    }
    else return
})

if (playerCount == 5){
    displayWinner.textContent = "Player Wins"

}

else if (computerCount == 5){
    displayWinner.textContent = "Computer Wins"
}


}




createGrids()
randomizeComputerShips()

