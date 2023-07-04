const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

for (index = 1; index < 10; index++) {
   const kill = document.getElementById(`hole${index}`)
   kill.onclick = function() {
      if(kill.className === "hole hole_has-mole"){
         dead.textContent = +dead.textContent + 1
      } else {
         lost.textContent = +lost.textContent + 1
      }

      if(+lost.textContent === 5){
         alert("Вы проиграли!")
         dead.textContent = 0
         lost.textContent = 0
      } else if(+dead.textContent === 10) {
         alert("Победа!")
         dead.textContent = 0
         lost.textContent = 0
      } 
   }     
}


