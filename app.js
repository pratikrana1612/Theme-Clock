const timeShow = document.querySelector('.time_bar');
const dateShow = document.querySelector(".time_date");
const mode_btn = document.querySelector(".mode_changer");
const hour_hand = document.querySelector('.hour_hand');
const minute_hand = document.querySelector('.minute_hand');
const second_hand = document.querySelector('.second_hand');
const time = new Date();
let second_hand_rotate = time.getSeconds()*6;
let minute_hand_rotate = time.getMinutes()*6;
let hour_hand_rotate = ((time.getHours()%12||12)*30)+(time.getMinutes()/2);

// console.log(time.toLocaleDateString("en-Us",{weekday:'long',month:'long',day:'numeric'}));

function secondHandHandler() {
    const time = new Date();
    if (second_hand_rotate == 360) {
        second_hand_rotate = 0;
        minuteHandHandler();
    }
    second_hand_rotate = time.getSeconds()*6;
    second_hand.style.transform = `translate(0,-100%) rotate(${second_hand_rotate}deg)`;
}
function minuteHandHandler() {
     const time = new Date();
    if (minute_hand_rotate == 360) {
        minute_hand_rotate = 0;
    }
    hourHandHandler();
    minute_hand_rotate = time.getMinutes()*6;
    minute_hand.style.transform = `translate(0,-100%) rotate(${minute_hand_rotate}deg)`;
}
function hourHandHandler() {
    const time = new Date();
    if (hour_hand_rotate == 360) {
        hour_hand_rotate = 0;
    }
    hour_hand_rotate = ((time.getHours()%12||12)*30) + (time.getMinutes()/2);
    hour_hand.style.transform = `translate(0,-100%) rotate(${hour_hand_rotate}deg)`;
}
mode_btn.addEventListener('click', () => {
    mode_btn.classList.toggle('light_mode');
    timeShow.style.color = `${mode_btn.textContent == 'Light Mode' ? 'black' : 'white'}`;
    mode_btn.textContent = `${mode_btn.textContent == 'Dark Mode' ? 'Light Mode' : 'Dark Mode'}`;
    minute_hand.classList.toggle('light_mode');
    hour_hand.classList.toggle('light_mode');
    dateShow.nextElementSibling.classList.toggle('light_mode');
    document.querySelector(".dot").classList.toggle('light_mode');
    document.documentElement.classList.toggle('dark_mode');
})

setInterval(() => {
    setTime();
    secondHandHandler()
}, 1000);



function setTime() {
    const time = new Date();
    const hour = (time.getHours() % 12) || 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    timeShow.textContent = `${hour < 9 ? '0' + hour : hour} : ${minutes <= 9 ? '0' + minutes : minutes} : ${seconds <= 9 ? '0' + seconds : seconds} ${time.getHours < 12 ? 'AM' : 'PM'}`;
    const weekday = time.toLocaleDateString("en-Us", { weekday: 'long' }).toUpperCase();
    const month = time.toLocaleDateString("en-Us", { month: 'short' }).toUpperCase();
    dateShow.textContent = `${weekday} , ${month} `;
    dateShow.nextElementSibling.textContent = `${time.getDate()}`;
    secondHandHandler();
    minuteHandHandler();
    hourHandHandler();
}