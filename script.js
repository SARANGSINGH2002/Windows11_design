let start = document.getElementsByClassName("one")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

start.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-900px";
    }
    else{
        startmenu.style.bottom = "50px";
    }
});


