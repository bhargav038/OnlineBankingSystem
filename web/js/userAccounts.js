$(document).ready(function() {
    $('#userinfo').hide();
    $('#userinfo2').hide();
    $('#user').click(calculate);
});

function calculate() {
    var dataEntered = true;

    if ($('#act').val() === "") {
        dataEntered = false;
        alert("Plase enter the Acount Number and Submit Again");
    }

    if (dataEntered) {
        if ($('#act').val() === "1010") {
            $('#userinfo').show();
            $('#userinfo2').show();
        }
        else if ($('#act').val() === "2020") {
            $('#acc').html("Checking");
            $('#name').html("Jagadeesh Babu T");
            $('#bal').html("$1750.38");
            $('#dob').html("11/01/1992");
            $('#email').html("jaga.nct@gmail.com");
            $('#pnum').html("9132020963");
            $('#mem').html("Student");
            $('#nine').html("700000002");
            $('#add').html("shawnee,overland park,MO-66214");
            $('#userinfo').show();
            $('#userinfo2').show();
        }
        else {
            $('#userinfo').hide();
            $('#userinfo2').hide();
            alert("Account Number Does not exists");
            location.href="UserAccounts.html";
        }
    }
}
