
const sizeSlider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');
let numSquares = Math.pow(sizeSlider.value, 2) 



sizeSlider.addEventListener('mousemove', function(){
    sizeValue.innerText = `${sizeSlider.value} x ${sizeSlider.value}`;
   
})

// sizeSlider.addEventListener('change', function(){
//     sizeValue.innerText = `${sizeSlider.value} x ${sizeSlider.value}`;
//     for (let i = 0; i < numSquares; i++) {
//         let square = document.querySelectorAll('.square')
//         square[i].remove()
//     }
// generateGrid();
// })


function randColor (){
    let r = Math.floor(Math.random()* 255 + 1)
    let g = Math.floor(Math.random()* 255 + 1)
    let b = Math.floor(Math.random()* 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}


function generateGrid(){
for (let i = 0; i < numSquares; i++) {
    let square = document.createElement('div');
    let container = document.querySelector('.container');

    square.classList.add('square');
    square.style.width = `${480/sizeSlider.value}px`
    square.style.height = `${480/sizeSlider.value}px`
    container.append(square);

    let eachSquare = document.querySelectorAll('.square');
    eachSquare[i].addEventListener('mouseover', function(){
        eachSquare[i].style.backgroundColor = randColor()})
    // eachSquare[i].addEventListener('mousemove', function(){
    //     eachSquare[i].style.backgroundColor = randColor()})
    // eachSquare[i].addEventListener('mouseup', function(){
    //     eachSquare[i].style.backgroundColor = randColor()})
    
    
}


    
}



generateGrid();

// function hover (){
//     eachSquare

// }




// function color() {
    
// }

// container.addEventListener('click', function () {
    
// })
