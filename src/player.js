class Player {
    constructor(player){
        this.player = player
        this.gameboard = null
        this.isTurn = false
    }

    makeMove(){
        if (this.player === computer){
            let target = Math.floor(Math.random()* 100)
            const cells = document.querySelectorAll(".player-cell")
            cells.forEach(cell => {
                if (cell.dataset.index === target){

                }
            })

            let x = target.dataset.index % 10
            let y = Math.floor(target.dataset.index / 10)
            human.gameboard.receiveAttack(x,y)
        }
    }
    
}


export default Player