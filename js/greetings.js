// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 위 코드와 동일
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";


function onLoginSubmit(event) {

  // 여기서는 submit의 기본동작인 새로고침을 방지해주고 있음
  event.preventDefault(); // event의 기본동작을 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USER_NAME, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USER_NAME);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit 이벤트는 엔터를 누르거나 클릭할 때 발생
  loginForm.addEventListener("submit", onLoginSubmit);

} else {
  // show the greetings
  paintGreetings(savedUsername);
  
}