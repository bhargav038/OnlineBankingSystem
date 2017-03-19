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
            $('#name').html("Aitha Ravi Prakash");
            $('#bal').html("$1750.38");
            $('#dob').html("02/02/1993");
            $('#email').html("S521767@mail.ucmissouri.edu");
            $('#pnum').html("573-203-9217");
            $('#mem').html("Student");
            $('#nine').html("700000002");
            $('#add').html("Chipman Road,LeeSmmit,MO-64093");
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
