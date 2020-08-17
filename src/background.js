const body = document.querySelector("body");

function paintImage(){
    const image = new Image();
    const date = new Date();
    const hours = date.getHours();
    if(hours > 4 && hours < 6){
        image.src = "img/1.jpeg";
    } else if(hours > 6 && hours < 8){
        image.src = "img/2.jpeg";
    } else if(hours > 8 && hours < 10){
        image.src = "img/3.jpeg";
    } else if(hours > 10 && hours < 12){
        image.src = "img/4.jpeg";
    } else if(hours > 12 && hours < 14){
        image.src = "img/5.jpeg";
    } else if(hours > 14 && hours < 16){
        image.src = "img/6.jpeg";
    } else if(hours > 16 && hours < 18){
        image.src = "img/7.jpeg";
    } else if(hours > 18 && hours < 20){
        image.src = "img/8.jpeg";
    } else if(hours > 22 && hours < 24){
        image.src = "img/9.jpeg";
    } else if(hours > 00 && hours < 02){
        image.src = "img/10.jpeg";
    } else{
        image.src = "img/11.jpeg";
    }
    console.log(image.src);
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    paintImage();
}

init();
