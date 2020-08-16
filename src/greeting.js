const form = document.querySelector(".js-form"),
    input = document.querySelector(".nameInput"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    const date = new Date();
    const hours = date.getHours();
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    if (hours < 12) {
        greeting.innerHTML = `Good Morning, ${text}`;
      } else if (hours < 18) {
        greeting.innerHTML = `Good Afternoon, ${text}`;
      } else {
        greeting.innerHTML = `Good Evening, ${text}`;
      }
    input.type = 'hidden';
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName(); // type your name here
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();