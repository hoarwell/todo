const darkmode = document.querySelector(".js-darkmode");
const MODE = "screenMode"

function lightMode(){
    localStorage.setItem(MODE, 'light');
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    clockTitle.style.color = "black";
    document.querySelector(".toDoInput").style.color = "black";
    document.querySelector(".nameInput").style.color = "black";
}

function darkMode(){
    localStorage.setItem(MODE, 'dark');
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    clockTitle.style.color = "white";
    document.querySelector(".toDoInput").style.color = "white";
    document.querySelector(".nameInput").style.color = "white";
}

function handleMode(){
    if(localStorage.screenMode === 'dark'){
        lightMode();
    }else{
        darkMode();  
    }
}

function loadMode(){
    const currentMode = localStorage.getItem(MODE);
    if(currentMode === 'dark'){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector(".toDoInput").style.color = "white";
        document.querySelector(".nameInput").style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
        document.querySelector(".toDoInput").style.color = "black";
        document.querySelector(".nameInput").style.color = "black";
    }
}

darkmode.addEventListener("click", handleMode);

function init(){
    loadMode();
}

init();