let currentDate = document.querySelector("#currentDay");


function currentTime() {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
    currentDate.textContent = rightNow;
}


$(".description").on('click', function () {
    let text = $(this)
    .text()
    .trim()

    let textInput = $("<textarea>")
    .addClass("description")
    .val(text);

    $(this).replaceWith(textInput)
});

function saveEvent () {
    localStorage.setItem(textInput)
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        title: "Event Saved!",
        show: {
            effect: "blind",
            duration: 1000
        }
    });
}
$(".saveBtn").on('click', saveEvent)


// currentTime.textContent = rightNow;
setInterval(currentTime, 1000);
window.addEventListener('load', currentTime)