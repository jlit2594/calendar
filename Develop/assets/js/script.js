// Global Variables
let currentDate = document.querySelector("#currentDay");

let sevenEl = document.querySelector("#seven-am");
let eightEl = document.querySelector("#eight-am");
let nineEl = document.querySelector("#nine-am");
let tenEl = document.querySelector("#ten-am");
let elevenEl = document.querySelector("#eleven-am");
let twelveEl = document.querySelector("#twelve-pm");
let oneEl = document.querySelector("#one-pm");
let twoEl = document.querySelector("#two-pm");
let threeEl = document.querySelector("#three-pm");
let fourEl = document.querySelector("#four-pm");
let fiveEl = document.querySelector("#five-pm");
let sixEl = document.querySelector("#six-pm");
let sevenPmEl = document.querySelector("#seven-pm");

// Function to display current date/time
function currentTime() {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
    currentDate.textContent = rightNow;
};

// Function allowing users to click on the element and add text
$(".description").on('click', function () {
    let text = $(this)
    .text()
    .trim()

    let textInput = $("<textarea>")
    .addClass("description")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus")
});

// Function to save events. 
function saveEvent () {
    const eventDetails = {
        sevenAm: $("#seven-event").val(),
        eightam: $("#eight-event").val(),
        nineAm: $("#nine-event").val(),
        tenAm: $("#ten-event").val(),
        elevenAm: $("#eleven-event").val(),
        twelvePm: $("#twelve-event").val(),
        onePm: $("#one-event").val(),
        twoPm: $("#two-event").val(),
        threePm: $("#three-event").val(),
        fourPm: $("#four-event").val(),
        fivePm: $("#five-event").val(),
        sixPm: $("#six-event").val(),
        sevenPm: $("#seven-pm-event").val()
    };

    localStorage.setItem("events", JSON.stringify(eventDetails));
};

// When the page is loaded, the saved events populate. If there are no events, nothing happens.
function loadEvents () {
    events = JSON.parse(localStorage.getItem('events'));
    
    if (localStorage.getItem('events') !== null) {
        const eventBlock = {
            seven: document.querySelector("#seven-event"),
            eight: document.querySelector("#eight-event"),
            nine: document.querySelector("#nine-event"),
            ten: document.querySelector("#ten-event"),
            eleven: document.querySelector("#eleven-event"),
            twelve: document.querySelector("#twelve-event"),
            one: document.querySelector("#one-event"),
            two: document.querySelector("#two-event"),
            three: document.querySelector("#three-event"),
            four: document.querySelector("#four-event"),
            five: document.querySelector("#five-event"),
            six: document.querySelector("#six-event"),
            sevenPm: document.querySelector("#seven-pm-event")
        };

        for (var i = 0; i < events.length; i++) {
            eventBlock[i].textContent = events[i];
        };

    };
};

// Function that checks the time to see if events are overdue
function checkTime () {
    let sevenAm = moment().set('hour', 7);
    let eightAm = moment().set('hour', 8);
    let nineAm = moment().set('hour', 9);
    let tenAm = moment().set('hour', 10);
    let elevenAm = moment().set('hour', 11);
    let twelvePm = moment().set('hour', 12);
    let onePm = moment().set('hour', 13);
    let twoPm = moment().set('hour', 14);
    let threePm = moment().set('hour', 15);
    let fourPm = moment().set('hour', 16);
    let fivePm = moment().set('hour', 17);
    let sixPm = moment().set('hour', 18);
    let sevenPm = moment().set('hour', 19);

    function checkSeven () {
        if (moment().isSame(sevenAm)) {
            sevenEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(sevenAm)) {
            sevenEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkEight () {
        if (moment().isSame(eightAm)) {
            eightEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(eightAm)) {
            eightEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkNine () {
        if (moment().isSame(nineAm)) {
            nineEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(nineAm)) {
            nineEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkTen () {
        if (moment().isSame(tenAm)) {
            tenEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(tenAm)) {
            tenEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkEleven () {
        if (moment().isSame(elevenAm)) {
            elevenEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(elevenAm)) {
            elevenEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkTwelve () {
        if (moment().isSame(twelvePm)) {
            twelveEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(twelvePm)) {
            twelveEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkOne () {
        if (moment().isSame(onePm)) {
            oneEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(onePm)) {
            oneEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkTwo () {
        if (moment().isSame(twoPm)) {
            twoEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(twoPm)) {
            twoEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkThree () {
        if (moment().isSame(threePm)) {
            threeEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(threePm)) {
            threeEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkFour () {
        if (moment().isSame(fourPm)) {
            fourEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(fourPm)) {
            fourEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkFive () {
        if (moment().isSame(fivePm)) {
            fiveEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(fivePm)) {
            fiveEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkSix () {
        if (moment().isSame(sixPm)) {
            sixEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(sixPm)) {
            sixEl.style.backgroundColor = "#dc3545";
        };
    };

    function checkSevenPm () {
        if (moment().isSame(sevenPm)) {
            sevenPmEl.style.backgroundColor = "#ffc107";
        } else if (moment().isAfter(sevenPm)) {
            sevenPmEl.style.backgroundColor = "#dc3545";
        };
    }

checkSeven();
checkEight();
checkNine();
checkTen();
checkEleven();
checkTwelve();
checkOne();
checkTwo();
checkThree();
checkFour();
checkFive();
checkSix();
checkSevenPm();
};

    

// Event listeners
$(".saveBtn").on('click', saveEvent);
window.addEventListener('load', currentTime);

// This ensures that the time/date display is current
setInterval(currentTime, 1000);

// When the page loads, both of these functions run
checkTime();
loadEvents();