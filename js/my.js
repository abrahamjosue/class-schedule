$(document).ready(function(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();

    // Dark the day column header area
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

    // Dark the time row data area
    if (hour == 7) {
        $("td#class-time1").addClass("active-day")
    }
    else if (hour == 8) {
        $("td#class-time2").addClass("active-day")
    }
    else if (hour == 9) {
        $("td#class-time3").addClass("active-day")
    }
    else if (hour == 10) {
        $("td#class-time4").addClass("active-day")
    }
    else if (hour == 11) {
        $("td#class-time5").addClass("active-day")
    }
});
