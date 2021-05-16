

function presentTime() {
    let DateTime = luxon.DateTime;
    let today = DateTime.local().toLocaleString(DateTime.DATE_HUGE);
    console.log(today);
    let date = document.querySelector("#currentDay");
    date.textContent = today;
};


function hourBlock() {
    $(".time").each(function () {
        var currentTime = luxon.DateTime.now().c.hour;  
        let rowHour = parseInt($(this).attr("id").split("-")[1]);
console.log(currentTime);
console.log(rowHour);
        if (currentTime < rowHour) {
            $(this).addClass("past");

        }
        else if (currentTime === rowHour) {
            $(this).removeClass("past");
            $(this).addClass("present");

        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}



hourBlock();

var interval = setInterval(presentTime, 1000);
// load any saved data from localStorage
let saveButton = document.getElementsByClassName(".saveBtn");
function save() {

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
}


    
   $(".saveBtn").on("click", function (event) {
    
    let text = $(this).siblings(".text").val();

    let hour = $(this).parent().attr("id");

    localStorage.setItem("text", JSON.stringify(text));
    localStorage.setItem("hour", JSON.stringify(hour));


});

save();

function initiate() {
    console.log(saveButton)
    save();
}

initiate();












