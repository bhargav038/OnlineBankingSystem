function calculate(){
var dataEntered = true;

    if($('#select').val()==="---Select---"){
        alert("Please select an account");
    }

var fname = $('#fname').val();
    if (fname === "") {
        dataEntered = false;
        alert("Please enter the first Name");
    }
    
    var lname = $('#lname').val();
    if (lname === "") {
        dataEntered = false;
        alert("Please enter the last Name");
    }
    
    var dob = $('#dob').val();
    if (dob === "") {
        dataEntered = false;
        alert("Please enter date of birth");
    }
    
    
    
    if ($(":radio[name=gender]:checked").val()==="male") {
        
    }
    else if ($(":radio[name=gender]:checked").val()==="female") {
        
    }
    else{
        dataEntered = false;
        alert("please select a gender");
    }
    
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var pnum = document.getElementById('phone');
    if (pnum === "") {
        dataEntered = false;
        alert("Please enter the phone number");
    }
    else if (!(pnum.value.match(phoneno)))
    {
        dataEntered = false;
        alert("Entered Phone Number is invalid. Please enter again");
    }
    
   
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    if (email === "") {
        dataEntered = false;
        alert("Please enter the email address");
    }
    else if (!filter.test(email.value)) {
        dataEntered = false;
        alert('Please provide a valid email address');
        email.focus;
    }
    
    var address = $('#address').val();
    if (fname === "") {
        dataEntered = false;
        alert("Please enter the address");
    }
    
    if(dataEntered){
        $('#fname').val("");
        $('#lname').val("");
        $('#select').val("---Select---");
        $('#dob').val("");
        $('#phone').val("");
        $('#email').val("");$('#address').val("");
        
        alert("Credit Card Applied Successful");
    }
}
    
    $(document).ready(function(){
                    $('#credit').click(calculate);
		}
);