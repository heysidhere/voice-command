x = 0;
y = 0;
screen_width=window.innerWidth;
screen_height=window.innerHeight;
apple="apple.png";
speak_data="";
to_number="Number(content)";

function preload(){
img=loadImage(apple.png);
}

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 createCanvas(screen_width, screen_height-150);
 canvasPosition(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    for (let i = 0; i <= to_number; i++){
      x=math.floor(math.random() * 700);
      y=math.floor(math.random() * 400);
      Image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data=to_number.concat("apples drawn")
    draw_apple = "";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

if(Number.isInteger(to_number)){
  console.log("started drawing apple");
  draw_apple = set;
}else{
  console.log("the speech has not recognized a number");
}