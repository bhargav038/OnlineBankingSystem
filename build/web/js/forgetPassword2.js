$(document).ready(function() {
    $('#l1').hide();
    $('#l2').hide();
    $('#newp').hide();
    $('#conp').hide();
    $('#cpass').hide();
    $('#submit').click(calculate);
});

function calculate() {
    dataEntered = true;

    if ($('#nine').val() === "") {
        dataEntered = false;
        alert("Please enter Answer");
    }
    else if ($('#nine').val() !== "india") {
        dataEntered = false;
        alert("Enter Correct Answer");
    }

    if (dataEntered && $('#nine').val() === "india") {
        $('#l1').show();
        $('#l2').show();
        $('#newp').show();
        $('#conp').show();
        $('#cpass').show();

        $('#cpass').click(function() {
            if ($('#newp').val() === "") {
                alert("Enter Password");
            }

            else if ($('#conp').val() === "") {
                alert("Enter Confrim Password");
            }
            else if ($('#newp').val() !== $('#conp').val()) {
                alert("Password Mismatch!");
            }
            else {
                alert("Password Changed Successfully");
                location.href="login.html";

            }
        });
    }
}

