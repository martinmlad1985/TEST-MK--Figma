

let left= document.getElementById('subleft');
let right= document.getElementById('subright');
let subwrap= document.getElementById('subwrap');

let x= 0;
let stop= -120;
left.setAttribute('disabled', 'true');

right.addEventListener('click', ()=>{
	x-=40;
	subwrap.style.left= x + "px";
	if(x <= stop){
		console.log('stop');
		right.setAttribute('disabled', 'true');
	}
	left.removeAttribute('disabled');
});

left.addEventListener('click', ()=>{
	x+=40;
	subwrap.style.left= x + "px";
	if(x >= 0){
		console.log('stop');
		left.setAttribute('disabled', 'true');
	}
	right.removeAttribute('disabled');
});