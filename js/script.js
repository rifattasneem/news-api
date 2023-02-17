// Today's date
const days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thurseday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const fullDate = new Date();
let month = months[fullDate.getMonth()];
let day = days[fullDate.getDay()];
document.getElementById("date").innerHTML = `${day}, ${month} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;


// Menu link active
const header = document.getElementById("menu");
const btns = header.getElementsByClassName("menu-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}