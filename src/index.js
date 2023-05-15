import Gameboard from './gameboard.js'
import Ship from './ship.js'
import './style.css' 


// dom methods to refer to html elements like the grids
const playerGrid = document.querySelector("#player")
const computerGrid = document.querySelector("#computer")
const displayWinner = document.querySelector(".display-winner")
const changeOrientation = document.querySelector(".change-orientation")

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
let numberOfShips = 0
let currentPlayerShip = playerShipArray[numberOfShips]
let currentComputerShip
let currentPlayerIndex
let currentComputerIndex
let yShipRange 
export let humanGameboard = new Gameboard
export let computerGameboard = new Gameboard
let isHorizontal = true



// make the grid interface and handle drag and drop behavior

function createGrids(){
    for (let i=0; i < 100; i++){
        const compCell = document.createElement("div");
        const playerCell = document.createElement("div")
        playerGrid.appendChild(playerCell)
        computerGrid.appendChild(compCell)
        const xUpperBound = i + 10 - (i % 10) - 1
        const yUpperBound = 100 + (i % 10)
        compCell.className = "comp-cell";
        playerCell.className = "player-cell";
        compCell.dataset.index = i
        playerCell.dataset.index = i
        playerCell.addEventListener("mouseover", () => {
            const cells = document.querySelectorAll(".player-cell")
            currentPlayerIndex = i
            yShipRange = (currentPlayerShip.length - 1) * 10
            if(isHorizontal === true){
                cells.forEach(cell => {
                    const currentCell = cell.dataset.index
                    if (currentPlayerShip && currentCell >= i && currentCell < i + currentPlayerShip.length){
                        if(i + currentPlayerShip.length - 1  <= xUpperBound){
                            cell.style.backgroundColor = "black"
                        }
                        
                    }
                    if (currentPlayerShip && !(i + currentPlayerShip.length - 1  <= xUpperBound)){
                        if (currentCell > xUpperBound - currentPlayerShip.length && currentCell <= xUpperBound){
                            cell.style.backgroundColor = "black"
    
                        }
                }
    
                })
                
            }
            else if(isHorizontal === false){
                cells.forEach(cell => {
                    const currentCell = cell.dataset.index
                    if (currentPlayerShip && currentCell % 10 === i % 10 && currentCell >= i && currentCell < i + (currentPlayerShip.length * 10 )){
                        if(currentPlayerIndex + yShipRange < yUpperBound)
                        cell.style.backgroundColor = "black"
                    }
                    if (currentPlayerShip && !(currentPlayerIndex + yShipRange < yUpperBound)){
                        if(currentCell % 10 === i % 10 && currentCell >= yUpperBound - yShipRange - 10)
                            cell.style.backgroundColor = "black";
                        }
                    })
                }
            })


        
        playerCell.addEventListener("mouseout", handleMouseOut)

       playerCell.addEventListener("click", () => {
            let otherShip = false
            const cells = document.querySelectorAll(".player-cell")
            currentPlayerIndex = i
            
            
            if (isHorizontal === true){
                if(i > xUpperBound - currentPlayerShip.length){
                    i = xUpperBound - currentPlayerShip.length + 1
                 }
    
                cells.forEach(cell => {
                    const currentCell = cell.dataset.index
                    if (currentCell >= i && currentCell < i + currentPlayerShip.length && cell.dataset.isShip){
                        otherShip = true
                    }
                })
    
                if (otherShip === false) {

                placesPlayerShip()
                cells.forEach(cell => {
                    const currentCell = cell.dataset.index
                    if(i > xUpperBound - currentPlayerShip.length){
                        i = xUpperBound - currentPlayerShip.length + 1
                     }
                    if (currentCell >= i && currentCell < i + currentPlayerShip.length){
                        cell.dataset.isShip = true
                    }
                })
            }
        }
            if (isHorizontal === false){
                yShipRange = (currentPlayerShip.length - 1) * 10

                if(i >= yUpperBound - yShipRange) {
                    i = yUpperBound - yShipRange - 10
                }

                cells.forEach(cell => {
                    const currentCell = cell.dataset.index
                    if (currentCell % 10 === i % 10 && currentCell >= i && currentCell < i + (currentPlayerShip.length * 10 ) && cell.dataset.isShip){
                        otherShip = true
                        console.log(otherShip)
                    }
                })

                if (otherShip === false){
                    
                    placesPlayerShip()
                    cells.forEach(cell => {
                        const currentCell = cell.dataset.index
                        if(currentCell % 10 === i % 10 && currentCell >= i && currentCell < i + (currentPlayerShip.length * 10 )){
                        cell.dataset.isShip = true
                    }
                    })
                }
            }
        



            if(currentPlayerShip.length === 2 && otherShip === false){
                currentPlayerShip = false                        
            }

            if(numberOfShips < 4 && otherShip === false){
                numberOfShips += 1
                }
            
            if(currentPlayerShip){
                currentPlayerShip = playerShipArray[numberOfShips]
                
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
}}
        
    



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
    let shipOrientation = Math.random()
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
                if (!cell.dataset.isShip){
                    cell.style.backgroundColor = "white"
                }
            })
}

export function placesPlayerShip(){


    if(isHorizontal === true){
        let a = currentPlayerIndex % 10
        let b = Math.floor(currentPlayerIndex/10)
        let x = a + currentPlayerShip.length -1
        let y = b
        currentPlayerShip.position = [[a,b],[x,y]]
    }
    if(isHorizontal === false){
        let a = currentPlayerIndex % 10
        let b = Math.floor(currentPlayerIndex/10)
        let x = a 
        let y = b + currentPlayerShip.length - 1
        currentPlayerShip.position = [[a,b],[x,y]]
    }

    
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
    console.log("winner")
    displayWinner.textContent = "Player Wins"

}

else if (computerCount == 5){
    console.log("winner")
    displayWinner.textContent = "Computer Wins"
}


}

changeOrientation.addEventListener("click", () => {

    if (isHorizontal === true){
        isHorizontal = false
    }
    else if (isHorizontal === false){
        isHorizontal = true
    }

})



createGrids()
randomizeComputerShips()

