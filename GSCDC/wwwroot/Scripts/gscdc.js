function GetTalukaList(district, Taluka) {
    $("#" + Taluka + "").html("<option value=''>Loding</option>").show();
    var districtId = $("#" + district + "").val();
    var Parm = JSON.stringify({ districtID: districtId })
    $.ajax({
        url: 'http://localhost:56552/Schemes/FillTalukaList',// local url
        // url: 'http://adittest.com/gscdc/Schemes/FillTalukaList', // live url
        type: 'POST',
        data: Parm,
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            $("#" + Taluka + "").html(data).show();
        }
    });
}

function showhideTextbox(radio, textbox) {
    debugger;

    $("#" + textbox).prop("disabled", true);
    if ($("#" + radio)[0].checked) {
        $("#" + textbox).prop("disabled", false);
    } else {
        $("#" + textbox).val("");
    }
}

function getAge() {
    debugger;
    var bday = document.getElementById('Birthdate').value;


    var dateString = bday;

    var now = new Date('2017', '07', '05');

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();


    var dob = new Date(dateString);

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth() + 1;
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";

    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";
    if (age.months > 1) monthString = " months";
    else monthString = " month";
    if (age.days > 1) dayString = " days";
    else dayString = " day";

    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString;
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = age.days + dayString;
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + yearString;
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + yearString + " , " + age.months + monthString;
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + monthString + " , " + age.days + dayString;
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + yearString + " , " + age.days + dayString;
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + monthString;
    else ageString = "Oops! Could not calculate age!";
    $("#Age").val(ageString);
    //document.getElementById('Age').innerHTML = ageString;
    // document.getElementById('Age').value = ageString;

    if (age.years == 40) {
        if ((age.months > 0 || age.days > 0) && document.getElementById("Byear").selectedIndex != "0") {
            alert("Your Age is above: 40 So You are not applicable");
            // alert("Your Age is above:" + ageString + "\n" + "So You are not applicable");

            return false;
        }
    }
    else if (age.years > 40 && document.getElementById("Byear").selectedIndex != "0") {
        alert("Your Age is above: 40 So You are not applicable");
        // alert("Your Age is above: " + ageString + "\n" + "So You are not applicable");

        return false;
    }
    return true;
}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function ShowHideMessageDiv() {
    $("#alertdiv").show();
    setTimeout(function () { $("#alertdiv").hide(); }, 15000);
}

function validateDate(element, event) {
    if (event.keyCode != 8) {
        var val = element.val();
        if (val.length == 2) {
            element.val(val + "-");
        } else if (val.length == 5) {
            element.val(val + "-");
        }
    }
}

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });
});

function isCharacter(evt) {
    var RegExpression = /^[a-zA-Z\s]*$/;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (RegExpression.test(evt.key)) {
        return true;
    } else {
        return false;
    }
    return true;
}


function toUpperCase(evt) {
    evt.value = evt.value.toUpperCase();
}



$(document).ready(function () {



});
