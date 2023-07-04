const cookieImage =  document.querySelector(".clicker__cookie");
const cookieClick = document.getElementById("clicker__counter");

cookieImage.onclick = function () {
   cookieClick.textContent++;
   cookieClick.textContent % 2 !== 0 ? cookieImage.width = 220 : cookie.width = 200;
}
