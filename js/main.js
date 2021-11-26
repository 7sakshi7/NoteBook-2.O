

const menuBtn = document.querySelector('.wrapper');
const lmenu = document.querySelector('.left');
const rmenu = document.querySelector('.right');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        lmenu.classList.add("openL");
        rmenu.classList.add("openR");
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        lmenu.classList.remove("openL");
        rmenu.classList.remove("openR");
        menuOpen = false;
    }
})

// function for showing time
setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime = hour + ":" +
        min + " " + am_pm;

    document.getElementById("time")
        .innerHTML = currentTime;
}
showTime();


