function calculate() {
    var dataEntered = true;

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ($('#email').val() === "") {
        dataEntered = false;
        alert("Please enter your Email address");
    }
    else if (!filter.test(email.value)) {
        dataEntered = false;
        alert('Please provide a valid email address');
        email.focus;
    }

    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phone = document.getElementById('phone');
    if ($('#phone').val() === "") {
        dataEntered = false;
        alert("Please enter your Phone Number");
    }
    else if (!(phone.value.match(phoneno)))
    {
        dataEntered = false;
        alert("Entered Phone Number is invalid. Please enter again");
    }


    if (dataEntered) {
        $("#phone").val("");
        $("#email").val("");
        alert("Successfully Enrolled for alerts");
    }
}

$(document).ready(function() {
    $('#enroll').click(calculate);
});

