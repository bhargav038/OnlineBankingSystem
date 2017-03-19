$(document).ready(function(){
    $('#submit').click(calculate);
});

function calculate(){
    dataEntered = true;
    
    if($('#nine').val() === ""){
        dataEntered = false;
        alert("Please enter UserName");
    }
    else if($('#nine').val() === "bearcat" || $('#nine').val() === "700000001"){
        location.href="ForgetPassword2.html";
        
    }
    else{
        dataEntered = false;
        alert("Invalid User Name");
    }
    
}
