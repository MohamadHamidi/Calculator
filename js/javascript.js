window.onload=main;
var showBox;
var keyList1;
var keyList2;
function main(){
  showBox=document.getElementById("display");
  res=document.getElementById("result");
  keyList1=document.getElementsByClassName("btn opr");
  keyList2=document.getElementsByClassName("btn num");
  showBox.innerHTML=0;

  for(var i=0;i<keyList1.length;i++){
    keyList1[i].addEventListener("click",showDisplay)}
  for(var i=0;i<keyList2.length;i++){
    keyList2[i].addEventListener("click",showDisplay)
  }
  document.getElementById("result").addEventListener("click",sum)
  document.getElementById("allclear").addEventListener("click",alc)
  document.getElementById("clear").addEventListener("click",cle)
}
function showDisplay(event){
  var key=event.target.innerHTML;
  if(showBox.innerHTML==0){
    showBox.innerHTML=key;
  }
  else{
    showBox.innerHTML+=key;
  }
}
function sum(){
  var a=eval(showBox.innerHTML);
  showBox.innerHTML=a;
}
function alc(){
  showBox.innerHTML=0;
}
function cle(){
  if(showBox.innerHTML.length==1){
    showBox.innerHTML=0
  }
  else{
    showBox.innerHTML=showBox.innerHTML.substring(0,showBox.innerHTML.length-1)
  }
}
