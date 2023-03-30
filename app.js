let time = document.querySelector('.time');
let datte = document.querySelector('.date');


const showHours = (el) => {
    return el < 10 ? '0'+el : el;
}

const showTime = () => {
    let today = new Date();
    
    let seconds, minutes, hours, day, date, month, years;

   years = today.getFullYear();
   
   let arrayMonth = ["Janvier", "Fevrier", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   month = arrayMonth[today.getMonth()];
   
   date = today.getDate();

   let arrayDay = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
   day = arrayDay[today.getDay()];

   hours = showHours(today.getHours());
  
   minutes = showHours(today.getMinutes());
  
   seconds = showHours(today.getSeconds());
   

   time.textContent = `${hours} : ${minutes} : ${seconds}`;
   datte.textContent = `${day}, ${date} ${month} ${years}`;
   
   setTimeout(showTime, 1000);
   
}

showTime();



