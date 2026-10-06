function changeColor() {
    let colors = ["red", "green", "blue", "yellow", "pink", "purple"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    // Activity 2: Table update
    document.getElementById("color-display").innerText = randomColor;
}
