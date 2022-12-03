import { placesShip } from "./index.js"
import { humanGameboard } from "./index.js"
import  Gameboard  from "./gameboard.js"
import Ship from './ship.js'

let currentIndex = 33 
let currentShip = new Ship(5)

placesShip()

it('gives ship position values', () => {
    expect(currentShip.position).toBe([[3,3],[8,3]])
})

it('places ship on board', () => {
    expect(humanGameboard.grid[8][3]).toBe("x")
})
