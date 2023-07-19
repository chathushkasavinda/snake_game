import { onSnake,expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFooodPosition()
const Expansion_Rate = 5

export function update(){
   if (onSnake(food)) {
    expandSnake(Expansion_Rate)
    food = getRandomFooodPosition()
   }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFooodPosition(){
        let newFoodPosition
        while (newFoodPosition == null || onSnake(newFoodPosition)) {
                newFoodPosition = randomGridPosition()
        }
        return newFoodPosition
}