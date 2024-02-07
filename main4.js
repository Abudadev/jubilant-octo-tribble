objects = [];

function preload(){
    Food = loadImage("Shawarma.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    ObjectDetech = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("Status").innerHTML = "Status: Detecting for objects";
}

function draw(){
    image(Food,0,0,500,500);

    if(status != ""){
        document.getElementById("Status").innerHTML = "Status: Objects Detected";
        for(i = 0; i < objects.length; i++){
         fill("black");
         percent = Math.floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y);
         noFill();
         stroke("black");
         rect(objects[i].x,objects[i].y,objects[i].width + 15,objects[i].height + 15);
        }
    }
}

function back(){
    window.location = "index.html";
}

function modelloaded(){
    console.log("Model has loaded!");
    status = true;
    ObjectDetech.detect(Food,gotresults);
}

function gotresults(error,results){
 if(error){
 console.error(error);
}
else{
    console.log(results);
    objects = results;
}
}