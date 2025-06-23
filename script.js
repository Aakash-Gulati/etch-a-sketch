// console.log("JS loaded!");
// console.log("Testing button selection...");
// const testButton = document.querySelector("#grid");
// console.log("Grid button found:", testButton);

let colorMode = 'none';
const container = document.querySelector("#container");
const shading = document.querySelector("#shading");
const multiColor = document.querySelector("#multiColor");
shading.addEventListener("click", () => {
    colorMode = 'shading';
    shading.classList.remove('selected');
    multiColor.classList.remove('selected');
    shading.classList.add('selected');
});
multiColor.addEventListener("click", () => {
    colorMode = 'multiColor';
    shading.classList.remove('selected');
    multiColor.classList.remove('selected');
    multiColor.classList.add('selected');
});
const numberOfSquares = document.querySelector("#grid");
numberOfSquares.addEventListener("click",() => {
    let input = prompt("Enter the number of squares you want in a line.");
    if (input >= 1 && input <= 100) {
        container.innerHTML = "";
        colorMode = 'none';
        shading.classList.remove('selected');
        multiColor.classList.remove('selected');
    for (let i = 0; i <= input-1; i++){
    for (let j = 0; j <= input-1; j++){
        let square = document.createElement("div");
        square.classList.add("squares");
        square.style.width = `${480 / input}px`;
        square.style.height = `${480 / input}px`;
        square.hoverCount = 0;
        container.append(square);
        square.addEventListener("mouseenter", () => {
            if (colorMode === 'none'){
                return;
            }
            square.hoverCount++;
            if (colorMode === 'shading'){
                square.style.backgroundColor= "#03A6A1";
                square.style.opacity = `${(square.hoverCount * 10) / 100}`;
            }
            else if (colorMode === 'multiColor'){
                function randomColor(){
                return Math.floor(Math.random() * 255);
                }
                square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            }
        }); 
    }
}
    } else {
        alert("Enter a valid input");
    }
});


