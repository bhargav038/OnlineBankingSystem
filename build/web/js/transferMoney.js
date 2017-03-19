$(document).ready(function(){
    $('#transfer').click(calculate);
});

function calculate(){
    var dataEntered = true;
    
    if($('#act').val() === "---Select---"){
        dataEntered = false;
        alert("Please select From Account");
    }
    
    var numbers = /^[0-9]+$/; 
     var toacct = document.getElementById('toacc');
    if($('#toacc').val() === ""){
        dataEntered = false;
        alert("Please enter To Account");
    }
    else if (!(toacc.value.match(numbers)))
    {
        dataEntered = false;
        alert("Entered To Account Is Incorrect.\n Please enter correct Account Number");
    }
    
    var decimal =/^[-+]?\d+(\.\d+)?$/; 
    var amount = document.getElementById('amt');
    if($('#amt').val() === ""){
        dataEntered = false;
        alert("Please enter the Amount");
    }else if (!(amount.value.match(decimal)))
    {
        dataEntered = false;
        alert("Entered Amount Is Incorrect.\n Please enter correct Amount");
    }
    
    if($('#pass').val() === ""){
        dataEntered = false;
        alert("Please enter Password");
    }
    
    if(dataEntered){
        $('#act').val("---Select---");
        $('#toacc').val("");
        $('#amt').val("");
        $('#pass').val("");
        alert("Money Transfered Successfully");
    }
}