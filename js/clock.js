const time = document.querySelector("#time");
const days = document.querySelector("#day");
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getClock() {
  const date = new Date();
  const housrs = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  const year = String(date.getFullYear()).padStart(2,"0");
  const month = String(date.getMonth()+1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");
  

  console.log(month);
  days.innerHTML = (`${year}-${month}-${day} (${week[date.getDay()]})`);
  time.innerHTML = (`${housrs}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000); // 실행하고자 하는 function, 실행간격(ms)
// setTimeout(sayHello, 5000); // 실행하고자 하는 function, 실행간격(ms)