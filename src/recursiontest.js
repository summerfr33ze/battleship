function positionShip () {
    let pos = Math.floor(Math.random() * 100)
    if (pos + 5 < (pos + 10) - (pos % 10)) {
        return pos
    }
    return positionShip()
}


console.log(positionShip())
console.log(positionShip())
console.log(positionShip())
console.log(positionShip())
console.log(positionShip())
console.log(positionShip())
console.log(positionShip())
console.log(positionShip())


