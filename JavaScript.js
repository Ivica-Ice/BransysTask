'use strict';

function checkDate() {
    var userDate = document.getElementById("userdate").value;
    var myDate = new Date(userDate);
    var today = new Date();

    if (myDate > today) {
        alert('You cannot enter a date in the future!.');
    } else {
        dateControl.today
    }

}

function validateVehicleName() {
    var x = document.getElementById("vehicleName").value;
    if (x == "") {
        document.getElementById("lblErrorVehicleName").innerHTML = "Mandatory field. Can't be left empty and can't contain more than 50 characters.";
        document.getElementById("lblErrorVehicleName").style.fontSize = '15px';
    }
    else {
        document.getElementById("lblErrorVehicleName").innerHTML = "";
    }
}

function validateVehicleType() {
    var x = document.getElementById("vehicleType").value;
    if (x == "") {
        document.getElementById("lblErrorVehicleType").innerHTML = "Mandatory field. Can't be left empty.";
        document.getElementById("lblErrorVehicleType").style.fontSize = '15px';

    }
    else {
        document.getElementById("lblErrorVehicleType").innerHTML = "";
    }
}

function validateLicense() {
    var x = document.getElementById("license").value;
    if (x == "") {
        document.getElementById("lblErrorLicence").innerHTML = "Mandatory field. Can't be left empty and must be in format XX-NNNN-XX, where X is a letter and N is a number.";
        document.getElementById("lblErrorLicence").style.fontSize = '15px';
    }
    else {
        document.getElementById("lblErrorLicense").innerHTML = "";
    }
}

function validateLastDate() {
    var x = document.getElementById("lastDate").value;
    if (x == "") {
        document.getElementById("lblErrorLastDate").innerHTML = "Mandatory field. Can't be left empty and can't be bigger than today.";
    }
    else {
        document.getElementById("lblErrorLicense").innerHTML = "";
    }
}

function validateSubDate() {
    var x = document.getElementById("subDate").value;
    if (x == "") {
        document.getElementById("lblErrorSubDate").innerHTML = "Mandatory field. Can't be before the last registration date.";
    }
    else {
        document.getElementById("lblErrorSubDate").innerHTML = "";
    }
}

function checkDate() {
    var lastDate = document.getElementById("lastDate").value;
    var myDate = new Date(lastDate);
    var today = new Date();
    if (myDate > today) {
        alert('You cannot enter a date in the future!');
    }
}

function today() {
    var today = new Date(lastDate);
    return today;
}

var submit = document.getElementById("submit");
var vehicleName = document.getElementById("vehicleName");
var vehicleType = document.getElementById("vehicleType");
var license = document.getElementById("license");
var inputField = vehicleName, vehicleType;
var lastDate = document.getElementById("lastDate");
var subDate = document.getElementById("subDate");

const form = document.getElementById("submissionForm");
//form.addEventListener("change", () => {
//    document.getElementById('submitBtn'). = !(validateVehicleName() && validateVehicleType() && validateLicense() && validateLastDate && validateSubDate())
//});

form.addEventListener("change", () => {
    if (vehicleName.value.length > 0 &&
        vehicleType.value.length > 0 &&
        license.value.length > 0 &&
        lastDate.value.length > 0 &&
        subDate.value.length > 0) {
        submit.removeAttribute('disabled');
    } else {
        submit.setAttribute('disabled', 'disabled');
    }
});

<!--Second Page-->

