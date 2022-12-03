class Player {
    constructor(player){
        this.player = player
        this.gameboard = null
        this.isTurn = false
    }

    makeMove(){
        if (this.player === "computer"){
            let x = Math.floor(Math.random * 10)
            let y = Math.floor(Math.random * 10)
            human.gameboard.receiveAttack(x,y)
        }
        else if (this.player === human){
            
        }
    }
    
}


export default Player