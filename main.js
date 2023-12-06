 var SpeechRecognition=window.webkitSpeechRecognition
 var recognition=new SpeechRecognition()
 var canudo=""
 function start(){
    recognition.start()
    console.log("bah")
 }
 function setup(){
createCanvas(600, 400)
 }
 function draw(){
    if(canudo=="círculo"||canudo=="Círculo"){
        circulo()
    }
    if(canudo=="retângulo"||canudo=="Retângulo"){
        retangulo()
    }
    if(canudo=="limpar"||canudo=="Limpar"){
        background("white")
    }



 }
 recognition.onresult=function (event){
    console.log(event)
    canudo=event.results[0][0].transcript
    console.log(canudo)
 }
 function circulo(){
    r = Math.floor(Math.random()* 255)
    g = Math.floor(Math.random()* 255)
    b = Math.floor(Math.random()* 255)
     stroke("rgb(" + r + "," + g + "," + b + ")")
     fill("rgb(" + r + "," + g + "," + b + ")")
    x = Math.floor(Math.random()* 600)
    y = Math.floor(Math.random()* 400)
     radius = Math.floor(Math.random()*99)   
     circle(x,y,radius)
 }
function retangulo(){
   r = Math.floor(Math.random()* 255)
   g = Math.floor(Math.random()* 255)
   b = Math.floor(Math.random()* 255)
    stroke("rgb(" + r + "," + g + "," + b + ")")
    fill("rgb(" + r + "," + g + "," + b + ")")
   x = Math.floor(Math.random()* 600)
   y = Math.floor(Math.random()* 400)
    altura = Math.floor(Math.random()*99)
    largura = Math.floor(Math.random()*161)
    rect(x,y,largura,altura)
}


