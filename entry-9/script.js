
// document.querySelector();
// window and document are built in browser objects

//window.addEventListener("mousemove", function (event) {
 //console.log(event.pageX, event.pageY);

 //if (event.pageX > 200) {
  // document.body.style.backgroundColor = "#e68c47";
 //} 
 
// if (event.pageX > 400 and <200) {
 //  document.body.style.backgroundColor = "red";
// }

 //if (event.pageX > 600 and <400) {
 //   document.body.style.backgroundColor = "blue";
 // }
//}); //*

window.addEventListener("mousemove", function (event) {
    console.log(event.pageX, event.pageY);

    const range1 = 300;
    const range2 = 600;
    const range3 = 900;
    const range4 = 1200;
    const range5 = 2000;
  
    if (event.pageX < range1) {
      document.body.style.backgroundColor = "#e35e2d";
    } 
    else if (event.pageX < range2) {
      document.body.style.backgroundColor = "#d46e37";
    } 
    else if (event.pageX < range3) {
        document.body.style.backgroundColor = "#e68c47";
      } 
      else if (event.pageX < range4) {
        document.body.style.backgroundColor = "#eb9834";
      } 
      else if (event.pageX < range5) {
        document.body.style.backgroundColor = "#edb040";
      } 
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('hoverImage');
    const container = document.querySelector('.image-container');
  
    // Show image on hover
    container.addEventListener('mouseenter', function () {
      image.classList.remove('hidden');
    });
  
    // Hide image when not hovering
    container.addEventListener('mouseleave', function () {
      image.classList.add('show');
    });
  });
  
  
  