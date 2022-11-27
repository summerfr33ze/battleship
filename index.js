

const playerGrid = document.querySelector("#player")
const computerGrid = document.querySelector("#computer")
const input = document.querySelector("input")
const submit = document.querySelector("submit")
const shipTypes = document.querySelector(".ship-types")




function createGrids(){
    for (i=1; i <= 100; i++){
        const compCell = document.createElement("div");
        const playerCell = document.createElement("div")
        compCell.className = "cell";
        playerCell.className = "cell";
        compCell.dataset.index = i
        playerCell.dataset.index = i
        playerGrid.appendChild(playerCell)
        computerGrid.appendChild(compCell)
    }
}

createGrids()