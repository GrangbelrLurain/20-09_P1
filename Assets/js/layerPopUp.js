// Layer Pop Up On
const layerOnBtn = document.querySelectorAll(".cont4>div>div>div")

function layerOn (){
    const layer = document.getElementById("layer");
    layer.style.display = "block";
}

layerOnBtn.forEach(function(Elem){
    Elem.addEventListener("click", layerOn);
});


// Layer Pop Up EXIT
const layerExitBtn = document.querySelectorAll(".layer_exit");

function layerExit (){
    const layer = document.getElementById("layer");
    layer.style.display = "none";
}

layerExitBtn.forEach(function (Elem){
    Elem.addEventListener("click", layerExit);
});