const container = document.querySelector("#container");
const numberOfSquares = document.querySelector("#btn");
numberOfSquares.addEventListener("click",() => {
    let input = prompt("Enter the number of squares you want in a line.");
    if (input > 1 && input <= 100) {
        container.innerHTML = "";
    for (let i = 0; i <= input-1; i++){
    for (let j = 0; j <= input-1; j++){
        let square = document.createElement("div");
        square.classList.add("squares");
        square.style.width = `${480 / input}px`;
        square.style.height = `${480 / input}px`;
        container.append(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "yellow";
        });
    }
}
    } else {
        alert("Enter a valid input");
    }
});


