function validate()
{
	var c=0;
	var name=document.form_476821.element_5.value;
	var name_regexp=new RegExp("^[A-Za-z]{3,50}$");
	if(name=='')
	{
		document.getElementById("name1").innerHTML="Please enter name";
	c++;
	}else if(!name_regexp.test(name))
	{
	document.getElementById("name1").innerHTML="please enter min 3 letters";
	c++;
	}
	else
	{
		document.getElementById("name1").innerHTML="";
	}

var phone=document.form_476821.element_6.value;
var phone_regexp=new RegExp("^[0-9]{10,12}$");
if(phone=='')
	{
		document.getElementById("phone1").innerHTML="Please enter mobile number";
	c++;
	}else if(!phone_regexp.test(phone))
	{
	document.getElementById("phone1").innerHTML="pls enter exact number";
	c++;
	}
	else
		{
	document.getElementById("phone1").innerHTML="";
	}

	var email=document.form_476821.element_7.value;
var email_regexp=new RegExp("^([\\w\.\_]{2,})[@]([\\w]{3,})[.]([\\w]{2,})$");
if(email=='')
	{
		document.getElementById("email1").innerHTML="Please enter email";
	c++;
	}else if(!email_regexp.test(email))
	{
	document.getElementById("email1").innerHTML="please enter exact email";
	c++;
	}
	else
		{
	document.getElementById("email1").innerHTML="";
	}

	var textarea=document.form_476821.element_8.value;
	if(textarea=='')
	{
	document.getElementById("textarea1").innerHTML="please enter the message";
	c++;
	}
	else
		{
		document.getElementById("textarea1").innerHTML="";
	}



	if(c>0)
	{
		return false;
	}
}