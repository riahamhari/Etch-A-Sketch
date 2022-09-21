const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE




// Components
const container = document.querySelector('.container');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');


// Sketch Buttons/Tools
const colorPicker = document.querySelector('#colorPicker');
const colorBtn = document.querySelector('#colorBtn')
const eraserBtn = document.querySelector('#eraserBtn');
const rainbowBtn = document.querySelector('#rainbowBtn')
const clearBtn = document.querySelector('#clearBtn');



eraserBtn.addEventListener('click', function () {
    let numSquares = Math.pow(sizeSlider.value, 2)
    for (let i = 0; i < numSquares; i++) {
        let eachSquare = document.querySelectorAll('.square');
        eachSquare[i].addEventListener('mouseover', function () {
            eachSquare[i].style.backgroundColor = 'white'
        })


    }

})




sizeSlider.addEventListener('mousemove', function () {
    sizeValue.innerText = `${sizeSlider.value} x ${sizeSlider.value}`;

})

sizeSlider.addEventListener('mouseup', function () {
    let square = document.querySelectorAll('.square')
    for (let i = 0; i < square.length; i++) {

        square[i].parentNode.removeChild(square[i]);



    }
    generateGrid()




})




function randColor() {
    let r = Math.floor(Math.random() * 255 + 1)
    let g = Math.floor(Math.random() * 255 + 1)
    let b = Math.floor(Math.random() * 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}


function generateGrid() {
    let numSquares = Math.pow(sizeSlider.value, 2)

    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${480 / sizeSlider.value}px`
        square.style.height = `${480 / sizeSlider.value}px`
        container.append(square);

        let eachSquare = document.querySelectorAll('.square');
        eachSquare[i].addEventListener('mouseover', function () {
            eachSquare[i].style.backgroundColor = randColor()
        })

    }


}


generateGrid();

