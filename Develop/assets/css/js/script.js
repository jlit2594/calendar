let currentDate = document.querySelector("#currentDay");


function currentTime() {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
    currentDate.appendChild(rightNow);
}



// currentTime.textContent = rightNow;

window.addEventListener('load', currentTime)