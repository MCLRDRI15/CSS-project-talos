const boxes = document.querySelectorAll('.boxes');
const box = document.querySelectorAll('.box');

box.forEach( (bloque, i )=>{
	box[i].addEventListener('click', ()=>{

		boxes.forEach((conts , i)=>{
			boxes[i].classList.remove('enable');	
		});
		boxes[i].classList.add('enable');
	});
}); 