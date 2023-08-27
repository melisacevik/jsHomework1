document.addEventListener("DOMContentLoaded", function() {

  let enterName = prompt("Lütfen İsminizi Giriniz: ");
  let myName = document.querySelector("#name");
  myName.textContent = enterName;

  const clockElement = document.getElementById("time");

  function updateClock() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    let dayName = "";

    switch(day){
      case 0:
        dayName = 'Pazar';
        break;
      case 1:
        dayName = 'Pazartesi';
        break;
      case 2:
        dayName = 'Salı';
        break;
      case 3:
        dayName = 'Çarşamba';
        break;
      case 4:
        dayName = 'Perşembe';
        break;
      case 5:
        dayName = 'Cuma';
        break;
      case 6:
        dayName = 'Cumartesi';
        break;
      default:
        dayName="Pazartesi";

    }

    const timeString = `${hours}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)} ${dayName}`;
    
    clockElement.textContent = timeString;
  }

  function formatTimeComponent(component) {
    return component < 10 ? "0" + component : component;
  }

  updateClock();

  setInterval(updateClock, 1000);
});


