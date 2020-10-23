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
        if(selector == 1){
        searchPlaces();
        map.setCenter(coords);
        map.setLevel(11);
        map.relayout();
        map.setLevel(12);
        map.relayout();
        }
    })
}

function layerOn (){
    console.log("hi");
    const selector = this;

    const layer = document.getElementById("layer");
    layer.style.display = "flex";

    chooseLayer(selector);
}

layerOnBtn.forEach(function(Elem){
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


// layer Pop UP link notice

const noticeList=document.querySelectorAll(".link3_layer>.list>h5")
noticeList.forEach(function(elem, index){

    const eventElem = elem
    const eventIndex = index;

    elem.addEventListener("click", function(){
        
        const notice = document.querySelectorAll(".link3_layer>ul>li")
        notice.forEach(function(elem, index){
            if(index == eventIndex){
                elem.classList.add("active");
            }else{
                elem.classList.remove("active");
            }
        })
        noticeList.forEach(function(elem){
            elem.classList.remove("active");
        })
        eventElem.classList.add("active");
    })
})