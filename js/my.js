$(document).ready(function(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();

    if (day === 1) {
        $("th#monday").addClass("active-day");
    }
    else if (day === 2) {
        $("th#tuesday").addClass("active-day");
    }
    else if (day === 3) {
        $("th#wednesday").addClass("active-day");
    }
    else if (day === 4) {
        $("th#thursday").addClass("active-day");
    }
    else if (day === 5) {
        $("th#friday").addClass("active-day");
    }
});
