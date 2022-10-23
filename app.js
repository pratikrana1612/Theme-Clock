const timeShow = document.querySelector('.time_bar');
const dateShow = document.querySelector(".time_date");

const time = new Date();
console.log(time.toLocaleDateString("en-Us",{weekday:'long',month:'long',day:'numeric'}));
// console.log(time.;

function setTime()
{
    timeShow.textContent = `${time.getHours()} : ${time.getMinutes()} ${time.getHours<12?'AM':'PM'}`;
    const weekday = time.toLocaleDateString("en-Us",{weekday:'long'}).toUpperCase();
    const month = time.toLocaleDateString("en-Us",{month:'short'}).toUpperCase();
    dateShow.textContent = `${weekday} , ${month} `;
    dateShow.nextElementSibling.textContent = `${time.getDate()}`;
}
setTime();
