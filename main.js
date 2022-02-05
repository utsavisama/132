pic = ""


function preload(){
pic = loadImage("window.jpg")
}

function setup(){
canvas = createCanvas(600, 400)
canvas.position(350,200)
objectDetector = ml5.objectDetector('cocossd', modelloaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects!!!! "
}

function modelloaded(){
    console.log("Your Super, fast model is loaded now!!")
    objectDetector.detect(pic, gotresluts)
}

function gotresluts(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
    }

}

function draw(){
image(pic,0,0,600,400)
fill("purple")
text("pic", 45,75)
noFill()
rect(45,50,450,350)

fill("red")
stroke("red")
text("cupboard", 300, 95)
noFill()
rect(280,80,250,350)
}