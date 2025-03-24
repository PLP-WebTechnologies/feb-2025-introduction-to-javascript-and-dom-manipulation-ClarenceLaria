// Function to change text dynamically
function changeText() {
    let paragraph = document.getElementById("description");
    paragraph.textContent = "The text has been changed using JavaScript!";
}

// Function to toggle an element (add/remove)
function toggleBox() {
    let box = document.getElementById("box");
    box.classList.toggle("hidden");
}
