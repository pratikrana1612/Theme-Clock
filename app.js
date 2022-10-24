const timeShow = document.querySelector('.time_bar');
const dateShow = document.querySelector(".time_date");
const mode_btn = document.querySelector(".mode_changer");
const hour_hand = document.querySelector('.hour_hand');
const minute_hand= document.querySelector('.minute_hand');
const second_hand = document.querySelector('.second_hand');
let second_hand_rotate=0;
let minute_hand_rotate=0;
let hour_hand_rotate=0;
// console.log(time.toLocaleDateString("en-Us",{weekday:'long',month:'long',day:'numeric'}));
// console.log(time.;

function setTime()
{
    const time = new Date();
    timeShow.textContent = `${time.getHours()<9?'0'+time.getHours():time.getHours()} : ${time.getMinutes()<9?'0'+time.getMinutes():time.getMinutes()} ${time.getHours<12?'AM':'PM'}`;
    const weekday = time.toLocaleDateString("en-Us",{weekday:'long'}).toUpperCase();
    const month = time.toLocaleDateString("en-Us",{month:'short'}).toUpperCase();
    dateShow.textContent = `${weekday} , ${month} `;
    dateShow.nextElementSibling.textContent = `${time.getDate()}`;
}
// function logic(rotater,rotate_element,nextfun)
// {
//     if(rotater===360)
//     {
//         rotater=0;
//         nextfun();
//     }
//     rotater+=6;
//     rotate_element.style.transform = `translate(0,-100%) rotate(${rotater}deg)`;
// }

function secondHandHandler()
{
    if(second_hand_rotate==360)
    {
        second_hand_rotate=0;
        minuteHandHandler();
    }
    second_hand_rotate+=6;
    second_hand.style.transform = `translate(0,-100%) rotate(${second_hand_rotate}deg)`;
    // logic(second_hand_rotate,second_hand,minuteHandHandler);
}
function minuteHandHandler()
{
    if(minute_hand_rotate==360)
    {
        minute_hand_rotate=0;
        hourHandHandler();
    }
    minute_hand_rotate+=6;
    minute_hand.style.transform = `translate(0,-100%) rotate(${minute_hand_rotate}deg)`;
    // logic(minute_hand_rotate,minute_hand,hourHandHandler);
}
function hourHandHandler()
{
    if(hour_hand_rotate==360)
    {
            hour_hand_rotate=0;
        }
        hour_hand_rotate+=6;
        hour_hand.style.transform = `translate(0,-100%) rotate(${hour_hand_rotate}deg)`;
    // logic(hour_hand_rotate,hour_hand,() =>{});
}
mode_btn.addEventListener('click',() =>
{
    mode_btn.classList.toggle('light_mode');
    timeShow.style.color=`${mode_btn.textContent=='Light Mode'?'black':'white'}`;
    mode_btn.textContent=`${mode_btn.textContent=='Dark Mode'?'Light Mode':'Dark Mode'}`;
    minute_hand.classList.toggle('light_mode');
    hour_hand.classList.toggle('light_mode');
    dateShow.nextElementSibling.classList.toggle('light_mode');
    document.querySelector(".dot").classList.toggle('light_mode');
    document.documentElement.classList.toggle('dark_mode');
})

setInterval(() => {
    setTime();
    secondHandHandler();
}, 1000);

