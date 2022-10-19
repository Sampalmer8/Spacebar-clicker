let counter = 0

document.getElementById("btn").addEventListener("click", btnClicked);

window.addEventListener("keypress", function() {spacebarPressed(event);});

function spacebarPressed(event) {
    if (event.code === "Space") {
        document.getElementById("output").innerHTML = counter++;
    }
}

function btnClicked() {
    counter = 0;
    document.getElementById("output").innerHTML = "---";
}