$(document).ready(function(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();

    function refreshAt(hours, minutes, seconds) {
        var now = new Date();
        var then = new Date();
    
        if(now.getHours() > hours ||
           (now.getHours() == hours && now.getMinutes() > minutes) ||
            now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
            then.setDate(now.getDate() + 1);
        }
        then.setHours(hours);
        then.setMinutes(minutes);
        then.setSeconds(seconds);
    
        var timeout = (then.getTime() - now.getTime());
        setTimeout(function() { window.location.reload(); }, timeout);
    }

    refreshAt(7,0,0);
    refreshAt(8,0,0);
    refreshAt(9,0,0);
    refreshAt(10,0,0);
    refreshAt(11,0,0);

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
