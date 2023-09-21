// let button = document.querySelector('.button')
// button.addEventListener('mousedown', function(){
    
// })
// function rand(max){
//     return Math.floar(Math.random()*max);
// }
// let box = document.querySelector('.box')
// box.addEventListener('mousemove', function(){
//     console.log(rand(255))
//     box.style.background - `rgb(${rand(255)},${rand(255)},${rand(255)})`
// })
let button1 = document.querySelector('.button1')
let block1 = document.querySelector('.block1')
button1.addEventListener('click',function(){
    block1.insertAdjacentHTML('beforeend', `
        <h2 class="mini-block1">нажата и отжата кнопка</h2>
    `)
    // console.log('нажата и отжата кнопка')
})
let button2 = document.querySelector('.button2')
let block2 = document.querySelector('.block2')
button2.addEventListener('dblclick',function(){
    block2.insertAdjacentHTML('beforeend', `
    <h2 class="mini-block1">двойное нажатие</h2>
`)
})

let box =document.querySelector('.box')
box.addEventListener('mouseover', function(){
    box.style.background = 'rgb(255, 0, 247)'
})
box.addEventListener('mouseout',function(){
    box.style.background='rgb(255, 149, 0)'
})

let button3 = document.querySelector('.button3')
let block3 = document.querySelector('.block3')
button3.addEventListener('contextmenu',function(){
    block3.insertAdjacentHTML('beforeend', `
    <h2 class="mini-block1">ПКМ</h2>
`)
})

function rand(max){
    return Math.floor(Math.random()*max)
}
let box2 = document.querySelector('.box2')
box2.addEventListener('mousemove',function(){
    console.log(rand(255))
    box2.style.background =`rgb(${rand(255)},${rand(255)},${rand(255)})`
})
