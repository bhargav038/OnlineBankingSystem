function calculate(){
var dataEntered = true;


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
    var pnum = document.getElementById('pnum');
    if (pnum === "") {
        dataEntered = false;
        alert("Please enter the phone number");
    }
    else if (!(pnum.value.match(phoneno)))
    {
        dataEntered = false;
        alert("Entered Phone Number is invalid. Please enter again");
    }
    
    
    var nine = $('#nine').val();
    if (nine === "") {
        dataEntered = false;
        alert("Please enter the 700 ID");
    }
    else if(nine.length !== 9){
        dataEntered = false;
        alert("Entered 700# is Invalid");
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
    
     if ($(":radio[name=mem]:checked").val()==="stu") {
        
    }
    else if ($(":radio[name=mem]:checked").val()==="fac") {
        
    }
    else{
        dataEntered = false;
        alert("please select a type of Member");
    }
    
    
      var pass = document.getElementById('pass');
    if (pass === "") {
        dataEntered = false;
        alert("Please enter the password");
    }
    
     var cpass = $('#cpass').val();
    if (cpass === "") {
        dataEntered = false;
        alert("Please enter the confrim password");
    }
    
    if($('#pass').val() !== $('#cpass').val()){
        dataEntered = false;
        alert("Password miss match");
          pass.focus;
          
    }
    
    if(dataEntered){
        $("#fname").val("");
        $("#lname").val("");
        $("#dob").val("");
        $("#nine").val("");
        $("#pnum").val("");
        $("#email").val("");
        $("#address").val("");
        $("#pass").val("");
        $("#cpass").val("");
        $("#ques").val("");
        $(":radio[name=mem]").val("false");
        $("#ans").val("");
        
        alert("Registration Successful");
        location.href="createAccount.html";
    }
}
    
    $(document).ready(function(){
                    $('#register').click(calculate);
                    $('#cancel').click(function(){
                        location.href = "createAccount.html";
                    });
    });
                