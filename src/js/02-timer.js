import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
import convertMs from './convertMs';


const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');

const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')

let todayDate = 0;
let dayChoose = 0;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dayChoose = selectedDates[0].getTime();
    todayDate = Date.now();

    if (dayChoose < todayDate) {
      buttonStart.disabled = true;
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    buttonStart.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

buttonStart.addEventListener('click', () => {
  intervalId = setInterval(timerChenge, 1000);
  buttonStart.disabled = true;
  input.disabled = true;
});
 
function timerChenge() {
  dayChoose -= 1000

  let chengeDate = convertMs(dayChoose - todayDate)

  if (dayChoose - todayDate <= 0) {
    clearInterval(intervalId);
    
  
    return Notiflix.Notify.success('The timer is over')
  } 
    days.textContent = String(chengeDate.days).padStart(2, '0');
    hours.textContent = String(chengeDate.hours).padStart(2, '0');
    minutes.textContent = String(chengeDate.minutes).padStart(2, '0');
    seconds.textContent = String(chengeDate.seconds).padStart(2, '0');
  
}

    





