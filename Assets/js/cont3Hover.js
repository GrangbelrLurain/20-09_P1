const shopBox = document.querySelectorAll(".shop_box>div")
const shopBoxText = document.querySelectorAll(".cont3_text>p")
const shopBoxImg = document.querySelector("#cont3_img")

function shopBoxTextOn(){
	const selector = this;
	
	shopBox.forEach(function(elem, index){
		if(elem == selector){
			shopBoxText[index].style.opacity = 1;
			const indexString = String(index + 1);
			shopBoxImg.classList.add("cont3_img"+indexString)
		} else {
			shopBoxText[index].style.opacity = 0;
			const indexStringNo = String(index + 1);
			shopBoxImg.classList.remove("cont3_img"+indexStringNo);
		}
	})
	console.log()
	
}

for(const shopBoxBtn of shopBox){
	shopBoxBtn.addEventListener("mouseover", shopBoxTextOn)
}