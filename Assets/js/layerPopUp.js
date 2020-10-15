// Layer Pop Up On
const layerOnBtn = document.querySelectorAll(".cont4>div>div>div")
const layers = document.querySelectorAll("#layer>article")

function chooseLayer(selector){
    
    layerOnBtn.forEach(function(Elem, index){
        if(selector == Elem){
            layers[index].style.display = "flex";
            
        }else{
            layers[index].style.display = "none";
        }
    })
}

function layerOn (){
    const selector = this;

    const layer = document.getElementById("layer");
    layer.style.display = "flex";

    chooseLayer(selector);
}

layerOnBtn.forEach(function(Elem, index){
    Elem.addEventListener("click", layerOn);
});


// Layer Pop Up EXIT
const layerExitBtn = document.querySelectorAll(".layer_exit");

function everyLayerOff(){
    layers.forEach(function(Elem, index){
        Elem.style.display = "none";
    })
}

function layerExit (){
    const layer = document.getElementById("layer");
    layer.style.display = "none";

    everyLayerOff();
}

layerExitBtn.forEach(function (Elem){
    Elem.addEventListener("click", layerExit);
});