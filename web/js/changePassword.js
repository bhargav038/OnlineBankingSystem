$(document).ready(function() {
    $('#pass').click(calculate);
});

function calculate(){
    var dataEntered = true;
    
    if ($('#curr').val() === "") {
        dataEntered = false;
        alert("Please enter your Current Password");
    }
    else if($('#curr').val() !== "qwerty"){
        dataEntered = false;
        alert("Current Password entered is Wrong\nEnter your current password again");
    }
    
    if ($('#newp').val() === "") {
        dataEntered = false;
        alert("Please enter your New Password");
    }
    
    if ($('#conp').val() === "") {
        dataEntered = false;
        alert("Please retype your Password");
    }
    
    if ($('#conp').val() !== $('#newp').val()) {
        dataEntered = false;
        alert("Password mismatch");
    }
    
    if(dataEntered){
        $('#conp').val("");
        $('#newp').val("");
        $('#curr').val("");
        alert("Password Changed Successfully");
    }
    
}


