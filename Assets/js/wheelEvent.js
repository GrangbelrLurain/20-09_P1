function slideDiv(event){
	slider.removeEventListener("wheel", slideDiv);

	if(event.deltaY > 0 && slider.classList.item(0) === "slider"){
		slider.classList.remove("slider");
		slider.classList.add("slider1");
	}else
	if(event.deltaY > 0 && slider.classList.item(0) === "slider1"){
		slider.classList.remove("slider1");
		slider.classList.add("slider2");
	}else
	if(event.deltaY > 0 && slider.classList.item(0) === "slider2"){
		slider.classList.remove("slider2");
		slider.classList.add("slider3");
	}else
	if(event.deltaY > 0 && slider.classList.item(0) === "slider3"){
		slider.classList.remove("slider3");
		slider.classList.add("slider4");
	}else
	if(event.deltaY > 0 && slider.classList.item(0) === "slider4"){
		slider.classList.remove("slider4");
		slider.classList.add("slider5");
	}else
	if(event.deltaY < 0 && slider.classList.item(0) === "slider1"){
		slider.classList.remove("slider1");
		slider.classList.add("slider");
	}else
	if(event.deltaY < 0 && slider.classList.item(0) === "slider2"){
		slider.classList.remove("slider2");
		slider.classList.add("slider1");
	}else
	if(event.deltaY < 0 && slider.classList.item(0) === "slider3"){
		slider.classList.remove("slider3");
		slider.classList.add("slider2");
	}else
	if(event.deltaY < 0 && slider.classList.item(0) === "slider4"){
		slider.classList.remove("slider4");
		slider.classList.add("slider3");
	}else
	if(event.deltaY < 0 && slider.classList.item(0) === "slider5"){
		slider.classList.remove("slider5");
		slider.classList.add("slider4");
	}
	setTimeout(function(){
		slider.addEventListener("wheel",slideDiv);
	},1000);
}


let headerNav = document.getElementById("nav");
let slider = document.getElementById("slider");

slider.addEventListener("wheel",slideDiv);

document.querySelectorAll(".container.nav>ul>li").forEach(function(el, index){
	if(index = 4){
		el.addEventListener("click", function(){
			slider.classList.remove("slider", "slider1", "slider2", "slider4", "slider5");
			slider.classList.add("slider3");
			console.log(slider);
		})
	}
	if(index = 5){
		el.addEventListener("click", function(){
			slider.classList.remove("slider", "slider1", "slider2", "slider3", "slider5");
			slider.classList.add("slider4");
			console.log(slider);
		})
	}
})