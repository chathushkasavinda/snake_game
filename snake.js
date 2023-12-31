import { getInputDirection } from "./input.js"
const scoreElement = document.querySelector(".current_score");
const highScoreElement = document.querySelector(".high_score");


console.log(scoreElement)
export const Snake_speed = 5

const snake_body = [ {x:10 ,y:11}]
let newSegment = 0
let count = 0
// getting high score from the local storage
let highScore = localStorage.getItem("high_score") || 0;
highScoreElement.innerHTML = `High Score : ${highScore}`



export function update(){
    addSegments()
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
    count++
    highScore = count >= highScore ? count : highScore;
    localStorage.setItem("high_score",highScore)
    scoreElement.innerText = `Score : ${count}`;
    highScoreElement.innerHTML = `High Score : ${highScore}`
}

export function onSnake(position,{ignoreHead = false} = {}){
    return snake_body.some((segment,index) => {
        if (ignoreHead && index === 0) return false 
            return equalPositions(segment,position)
    })
}

export function getSnakeHead(){
    return snake_body[0]
}

export function snakeIntersection(){
    return onSnake(snake_body[0],{ignoreHead: true})
}

function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for (let i = 0; i < newSegment; i++) {
       snake_body.push({...snake_body[snake_body.length-1]})
       
    }
    newSegment=0
    
}