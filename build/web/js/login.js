$(document).ready(function() {
    $('#login').click(redirect);
    $('#admin').click(adminredirect);
}
);

function redirect() {
    var dataEntered = true;
    if ($('#user').val() === "") {
        dataEntered = false;
        alert("Enter UserName");
    }
    if ($('#pass').val() === "") {
        dataEntered = false;
        alert("Enter Password");
    }
    if (dataEntered) {
        if ($('#pass').val() === "mule" && $('#user').val() === "700000001") {
            location.href = "UserHome.html";
        }
        else if ($('#pass').val() === "mule" && $('#user').val() === "700000002") {
            location.href = "UserHome2.html";
        }
        else if ($('#pass').val() === "mule" && $('#user').val() === "mule") {
            location.href = "UserHome.html";
        }
        else{
            alert("Invalid UserName or Password");
        }
    }
}

function adminredirect() {
    var dataEntered = true;

    if ($('#username').val() === "") {
        dataEntered = false;
        alert("Enter UserName");
    }
    if ($('#password').val() === "") {
        dataEntered = false;
        alert("Enter Password");
    }
    if (dataEntered) {
        if ($('#password').val() === "mule" && $('#username').val() === "mule") {
            location.href = "AdminHome.html";
        }
        else {
            alert("Invalid UserName or Password");
        }
    }
}