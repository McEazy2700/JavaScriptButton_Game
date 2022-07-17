// let titleDiv = document.getElementById('title');
// console.log(titleDiv)

// titleDiv.innerText = 'The DOM Manipulated';

// const message = "Hey I'm awesome"

// titleDiv.innerHTML =   `<p>${message}</p>`
// titleDiv.style.backgroundColor = 'purple'

// document.getElementById('red').addEventListener('click', () => {console.log('red')}) 
// const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

let timesClicked = {
    red: 0,
    yellow: 0,
    green: 0
}

let rpsDivCollection = document.querySelector('.rock-paper-scissors').children
const buttons = Array.from(rpsDivCollection)

buttons.map((item) => item.onclick = ()=> {
    timesClicked[item.id] += 1
    console.log(timesClicked)
    item.innerHTML = `<h1>${timesClicked[item.id]}</h1>`
})

document.querySelector('.clearBtn').onclick = () => {
    timesClicked = {
        red: 0, 
        yellow: 0,
        green: 0
    }

    buttons.map((item) => item.innerHTML = '')
    console.log('You clicked the clear button')
}
