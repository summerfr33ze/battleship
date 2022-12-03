
class Ship {
    constructor(length,position){
        this.length = length
        this.position = position
        this.hits = 0
        this.isSunk = false
        
    }

    hit(){
        this.hits += 1
    }
    
    sink(){
        if (this.hits == this.length){
            this.isSunk = true
        }
    }
    
}

export default Ship