container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let box = document.createElement('div');
        box.style.gridRow = i+1;
        box.style.gridColumn = j+1;
        container.appendChild(box);
    }    
}