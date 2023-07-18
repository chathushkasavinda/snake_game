import { update as updateSnake, draw as drawSnake, Snake_speed } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"

let lastRenderTime = 0
const gameBoard = document.getElementById('game_border')



function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender < 1 /Snake_speed) return
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}