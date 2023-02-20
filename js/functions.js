let counterValue = "8:00:00";

function updateCounter() {
let timeArray = counterValue.split(":");
let hour = parseInt(timeArray[0]);
let minute = parseInt(timeArray[1]);
let second = parseInt(timeArray[2]);

second++;
if (second >= 60) {
second = 0;
minute++;
}
if (minute >= 60) {
minute = 0;
hour++;
}

let formattedHour = (hour < 10) ? "0" + hour : hour;
let formattedMinute = (minute < 10) ? "0" + minute : minute;
let formattedSecond = (second < 10) ? "0" + second : second;

counterValue = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
counter.innerHTML = `Ends On : ${counterValue}`;
}

setInterval(updateCounter, 1000);