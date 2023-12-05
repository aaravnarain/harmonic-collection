var video;
var vScale = 12; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  Shutter = createButton('Capture Image');
  Shutter.style('background-color', '#941919');
  Shutter.style('color' , '#ffffff');
  Shutter.style('text-align','CENTER');
  //Shutter.position(0, 1200);
  Shutter.size(80,60);
  Shutter.mousePressed(takePhoto);
  Shutter.addClass("shutter");

}

function draw() {
  background(51);
  
  video.loadPixels();
  loadPixels();
  for (var y=0; y < video.height; y++) {
    for (var x=0; x<video.width; x++) {
      var index = (x+y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var bright = (r+g+b)/3.5; 
      
      var w = map(bright,0,255,0,vScale);
      
      noStroke();
      fill(bright);
      ellipse(x*vScale,y*vScale,vScale, vScale); 
    }
  }  
}

function takePhoto(){
    saveFrames('photobooth', 'png', 1, 1);
  }