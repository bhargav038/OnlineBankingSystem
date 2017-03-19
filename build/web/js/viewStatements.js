$(document).ready(function() {
    $('#state').hide();
    $('#view').click(calculate);
});
function calculate() {
  
    if ($('#drop').val() === "---Select---") {
        alert("Please select a month to view Statements");
    }
    if ($('#year').val() === "") {
        alert("Please enter an year to view Statements");
    }
    if ($('#drop').val() === "April" && $('#year').val() === "2014") {
     
        $('#state').show();
    }
    else {
        $('#state').html($('#drop').val() + "," + $('#year').val() + " Statements Not Available. Please Consult the Bank.");
        $('#state').css("border","0");
        $('#state').css("font-size","1.8em");
        $('#state').show();
    }
}

