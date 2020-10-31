let leftBtn= document.getElementById("left");
let rightBtn= document.getElementById("right");
let img= document.getElementById("img");

let x= 0;
let count=0;

leftBtn.addEventListener("click", ()=>{
  
  if(count< 0 ){
  	count+=1;
  	x+= 1170;
    img.style.left= x + "px";
 }
});

rightBtn.addEventListener("click", ()=>{
  if(count> -4){ 
     count-=1;
  	 x-= 1170;
     img.style.left= x + "px";
 }
});


