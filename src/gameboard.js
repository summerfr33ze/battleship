import { computerGameboard } from "./index.js"
import { humanGameboard } from "./index.js"
import { computerShipArray } from "./index.js"


class Gameboard {
    constructor(){
        this.grid = new Array(10)
        for (let i = 0; i < 10; i++){
            this.grid[i] = new Array(10)
            for (let j=0; j <  10; j++){
                this.grid[i][j] = "_"
            }

        }
        this.shipArray = []
    }
        placeShip(ship){
            let a = ship.position[0][0]
            let b = ship.position[0][1]
            let x = ship.position[1][0]
            let y = ship.position[1][1]

            
           

        for(let i = 1; i <= ship.length; i++){
            if (a === x ){
            this.grid[a][b] = "x"
            b++
            }

            else if (b === y){
            this.grid[a][b] = "x"
            a++
            }


            else return 
        }
        return this.grid[a][b-1]
    }
        

    receiveAttack(x,y){
        
        if (this.grid[x][y] !== undefined){

        if (this === computerGameboard)
            console.log(computerShipArray)
            computerShipArray.forEach(ship => {

            
                
                const a = ship.position[0][0]
                const b = ship.position[0][1]
                const c = ship.position[1][0]
                const d = ship.position[1][1]

                
                if (a === c){
                    if (x === a && y >= b && y <= d){
                        ship.hit()
                        ship.sink()
                    
                    }
                    else return
                }
                else if (b === d){
                    if (y === b && x >= a && x <= c){
                        ship.hit()
                        ship.sink()
                        
                    }
                    else return
                }
               
                
            })
            
            this.grid[x][y] = "o"
        }

        else if (this === humanGameboard) {
            playerShipArray.forEach(ship => {
                const a = ship.position[0][0]
                const b = ship.position[0][1]
                const c = ship.position[1][0]
                const d = ship.position[1][1]
                if (a === c){
                    if (x === a && y >= b && y <= d){
                        ship.hit()
                        ship.sink()
                    
                    }
                    else return
                }
                else if (b === d){
                    if (y === b && x >= a && x <= c){
                        ship.hit()
                        ship.sink()
                        
                    }
                    else return
                }
               
                
            })
            
            this.grid[x][y] = "o"
        }
        

        else return false
        

    }
    
}

export default Gameboard
