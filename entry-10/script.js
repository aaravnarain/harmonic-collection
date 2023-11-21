function updateImage() {

    var selectedNumber = document.getElementById("numberInput").value;

    var imageContainer = document.getElementById("imageContainer");

    imageContainer.innerHTML = '';

    var randomImageNumber = Math.floor(Math.random() * 3) + 1;

    var img = document.createElement("img");

    img.src = "images-folder/" + "image" + selectedNumber + "_" + randomImageNumber + ".jpg";
    img.alt = "Random Image";

    imageContainer.appendChild(img);
}

updateImage();

function changeColor(event) {
    var mouseX = event.clientX;
    var windowWidth = window.innerWidth;
    var percentage = (mouseX / windowWidth) * 100;
    document.body.style.backgroundColor = "hsl(" + percentage + ", 60%, 50%)";
}