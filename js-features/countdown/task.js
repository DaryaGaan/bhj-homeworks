const addTime = function() {
   const timer = document.getElementById("timer");
   timer.textContent--;
   
   if (timer.textContent <= 0) {
      clearInterval(intervalId);
      alert("Вы победили в конкурсе!");
   } 
}

const intervalId = setInterval(addTime, 1000);