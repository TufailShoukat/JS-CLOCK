var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var date = document.getElementById("date")
setInterval(function () {

    var nowDate = new Date()
    var nowHour = nowDate.getHours()

    hours.innerText = nowDate.getHours()
    minutes.innerText = nowDate.getMinutes()
    seconds.innerText = nowDate.getSeconds()
    hours.innerText = String(nowDate.getHours()).padStart(2, '0');
    minutes.innerText = String(nowDate.getMinutes()).padStart(2, '0');
    seconds.innerText = String(nowDate.getSeconds()).padStart(2, '0');



}, 1000
)
