import { getInputDirection } from "./input.js"

let newSegment = 0
export const Snake_speed = 2
const snake_body = [
    {x:10 ,y:11}
    
]

export function update(){
   const inputDirection = getInputDirection()
    for (let i = snake_body.length-2; i >=0; i--) {
        snake_body[i + 1]={...snake_body[i]}

    }
        snake_body[0].x += inputDirection.x
        snake_body[0].y += inputDirection.y
}

export function draw(gameBoard){
    snake_body.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegment += amount
}

export function onSnake(position){
    return snake_body.some(segment => {
        return equalPositions(segment,position)
    })
}

function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}