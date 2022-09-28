function hover(element) {
    element.classList.add('hover');
    setTimeout(() => element.classList.remove('hover'), 1000)
}

const container = document.querySelector('.container');

function makeGrid(squares){
    if (typeof box !== 'undefined') {
        container.innerHTML = "";
    }
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            let box = document.createElement('div');
            box.style.gridRow = i+1;
            box.style.gridColumn = j+1;
            container.appendChild(box);
            box.addEventListener('mouseover', () => hover(box));
        }    
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    // do {
        let squares = prompt('How many squares tall and wide would you like the grid?')
    // } while (squares > 100)

    makeGrid(squares);
});
