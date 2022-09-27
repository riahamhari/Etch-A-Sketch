const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}

function setCurrentSize(newSize) {
    currentSize = newSize
}



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

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)




function updateSizeValue(value) {
    sizeValue.innerText = `${value} x ${value}`
}

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()

}



function reloadGrid() {
    let square = document.querySelectorAll('.square')
    for (let i = 0; i < square.length; i++) {

        square[i].parentNode.removeChild(square[i]);
    }
    generateGrid(sizeSlider.value)
}





function randColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        let r = Math.floor(Math.random() * 255 + 1)
        let g = Math.floor(Math.random() * 255 + 1)
        let b = Math.floor(Math.random() * 255 + 1)
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}


function generateGrid(size) {
    let numSquares = Math.pow(size, 2)

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${parseInt(window.getComputedStyle(container).width) / sizeSlider.value}px`
        square.style.height = `${parseInt(window.getComputedStyle(container).height) / sizeSlider.value}px`
        container.append(square);

        let eachSquare = document.querySelectorAll('.square');
        eachSquare[i].addEventListener('mouseover', randColor)
        eachSquare[i].addEventListener('mousedown', randColor)


    }


}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active')
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
        colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    }
}


window.onload = () => {
    generateGrid(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
}


