$(document).ready(function(){
    $('#apply').click(calculate);
});

function calculate(){
    var dataEntered = true;
    
    if($('#act').val() === "---Sel ect---"){
        dataEntered = false;
        alert("Please select From Account");
    }
    
     if($('#type').val() === "---Select Type---"){
        dataEntered = false;
        alert("Please select Type of Loan");
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
    
    if($('#dura').val() === ""){
        dataEntered = false;
        alert("Please enter the Duration");
    }
    
    
     if(dataEntered){
        location.href = "LoanMessage.html";
    }

}

