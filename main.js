status= "";
video= "";
function preload(){
    video= createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model loaded, Y Ru in the console?");
    status =true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw(){
    image(video,0,0,480,380);
}