let displayvalue='';
   document.querySelector('#cal').value=displayvalue;
   function deleteLastDigit(){
    displayvalue=displayvalue.slice(0,-1);
    document.querySelector('#cal').value=displayvalue;}
    function clear1(){
      displayvalue='';
      document.querySelector('#cal').value=displayvalue;
   }
   
function add(){
  displayvalue+='+';
  document.querySelector('#cal').value=displayvalue;
 }
 function sub(){
  displayvalue+='-';
  document.querySelector('#cal').value=displayvalue;
 }
 function div(){
  displayvalue+='/';
  document.querySelector('#cal').value=displayvalue;
 }
 function mul(){
  displayvalue+='*';
  document.querySelector('#cal').value=displayvalue;
 }
 function zero(){
  displayvalue+=0;
  document.querySelector('#cal').value=displayvalue;
 }
 function seven(){
  displayvalue=displayvalue+'7';
      document.querySelector('#cal').value=displayvalue;
 }
 function eight(){
  displayvalue=displayvalue+'8';
      document.querySelector('#cal').value=displayvalue;
 }
 function nine(){
  displayvalue=displayvalue+'9';
      document.querySelector('#cal').value=displayvalue;
 }
 function four(){
  displayvalue=displayvalue+'4';
      document.querySelector('#cal').value=displayvalue;
 }
 function five(){
  displayvalue=displayvalue+'5';
      document.querySelector('#cal').value=displayvalue;
 }
 function six(){
  displayvalue=displayvalue+'6';
      document.querySelector('#cal').value=displayvalue;
 }
 function one(){
  displayvalue=displayvalue+'1';
      document.querySelector('#cal').value=displayvalue;
 }
 function two(){
  displayvalue=displayvalue+'2';
      document.querySelector('#cal').value=displayvalue;
 }
 function three(){
  displayvalue=displayvalue+'3';
      document.querySelector('#cal').value=displayvalue;
 }
 function evaluate1(){
  displayvalue=eval(displayvalue);
      document.querySelector('#cal').value=displayvalue;
 }