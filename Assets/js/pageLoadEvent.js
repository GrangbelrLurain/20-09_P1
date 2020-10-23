
    function pageLoad(){
      const url = window.location.href;
      const nameLocation = url.indexOf("?") + 1;
      const name = url.substring(nameLocation)

      if(name == "shop"){
    slider.classList.remove("slider", "slider1", "slider2", "slider3", "slider4", "slider5");
    slider.classList.add("slider3");
    console.log(slider);
  }else if(name == "support"){
    slider.classList.remove("slider", "slider1", "slider2", "slider3", "slider4", "slider5");
    slider.classList.add("slider4");
    console.log(slider);
      }
  }

  pageLoad();