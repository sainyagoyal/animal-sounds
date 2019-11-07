
function beat1(){
  document.getElementById("b1").play();
}
function beat2(){
  document.getElementById("b2").play();
}
function beat3(){
  document.getElementById("b3").play();
}
function beat4(){
  document.getElementById("b4").play();
}
function beat5(){
  document.getElementById("b5").play();
}
function beat6(){
  document.getElementById("b6").play();
}


document.addEventListener('keydown',function(e){
  if(e.keyCode == 72){
    document.getElementById("b1").play();
  }
})
document.addEventListener('keydown',function(e){
  if(e.keyCode == 68){
    document.getElementById("b2").play();
  }
})
document.addEventListener('keydown',function(e){
  if(e.keyCode == 77 ){
    document.getElementById("b3").play();
  }
})
document.addEventListener('keydown',function(e){
  if(e.keyCode == 67){
    document.getElementById("b4").play();
  }
})
document.addEventListener('keydown',function(e){
  if(e.keyCode == 84){
    document.getElementById("b5").play();
  }
})
document.addEventListener('keydown',function(e){
  if(e.keyCode == 71){
    document.getElementById("b6").play();
  }
})
