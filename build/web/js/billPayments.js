$(document).ready(function() {
    $('#payment').click(calculate);
});

function calculate() {
    var dataEntered = true;

    var decimal =/^[-+]?\d+(\.\d+)?$/; 
    var amount = document.getElementById('amt');
    if ($('#amt').val() === "") {
        dataEntered = false;
        alert("Please enter the amount");
    }
    else if (!(amount.value.match(decimal)))
    {
        dataEntered = false;
        alert("Entered Amount Is Incorrect.\n Please enter correct Amount");
    }
    if ($('#act').val() === "---Select---") {
        dataEntered = false;
        alert("Please select the account");
    }
    if ($('#pass').val() === "") {
        dataEntered = false;
        alert("Please enter the password");
    }
    if (dataEntered) {
       var amount = (28.80 - parseFloat($('#amt').val())).toFixed(2);
        $('#due').html("Amount Due : $" + amount);
        $('#pass').val("");
        $('#act').val("---Select---");
        $('#amt').val("");
        alert("Amount paid Successfully");
        
        
    }
}

