import Gameboard from './gameboard.js'
import Ship from './ship.js'
import Player from './player.js'

let carrier = new Ship(5,[[8,4],[8,8]])
let gameboard = new Gameboard
gameboard.shipArray.push(carrier)


test('places ship', () => {
    expect(gameboard.placeShip(carrier)).toBe("x")
})

gameboard.placeShip(carrier)
gameboard.receiveAttack(8,5)

describe('gets attacked and maybe sunk', ()=> {

    test('receives attack', () => {
        expect(carrier.hits).toBe(1)
    })
    test('is it sunk?', () => {
        expect(carrier.isSunk).toBe(false)
    })

})