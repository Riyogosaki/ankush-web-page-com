const add=document.getElementById("add");
const minus=document.getElementById("minus");
const zero=document.getElementById("zero");
const money=document.getElementById("money");

let a=0;
let b=1200;
let c;
let d;

 function increment(){
  a++;

  zero.textContent=a;
  c= a*b;
  money.textContent= "PRICE:"+"💲"+c;
}

function decrement(){
  a--;
  zero.textContent=a;

    d=a*b-1200;
    money.textContent= "PRICE:" +"💲"+d;


 
}






