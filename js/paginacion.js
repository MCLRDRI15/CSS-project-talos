const navItem = document.querySelectorAll('.nav-item');

navItem.forEach( (item, i )=>{
	navItem[i].addEventListener('click', ()=>{

		navItem.forEach((item , i)=>{
			navItem[i].classList.remove('activo');	
		});
		navItem[i].classList.add('activo');
	});
}); 