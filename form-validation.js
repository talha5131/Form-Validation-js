
//=======================================Variable Initialization ===================================
var passWord = document.getElementById("pass");
var rePassWord = document.getElementById("re-pass");
var email = document.getElementById("email-id");
var sub = document.getElementById("submit");
var textArea = document.getElementById("txtarea");
var textResult;
var result;

//======================================Password Validation=========================================
	passWord.onkeyup = function()
	{
		var p = document.getElementById('pass-error');
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		if(passWord.value.match(lowerCaseLetters) && passWord.value.match(upperCaseLetters) && 
			passWord.value.match(numbers) && passWord.value.length > 8)
		{
			p.innerHTML = "";
			result = true;
		}
		else
		{
			result = false;
			p.innerHTML = "Your Password Must Contain atleast 8 Letters, 1 LowerCase Letter, 1 UpperCaseLetter and 1 Number.";
		}
	}
//==========================================Password Validation Ends=========================================

//==========================================Re-Password Validation===========================================
	rePassWord.onkeyup  = function()
	{
		var p1 = document.getElementById('re-pass-error');
		if (rePassWord.value !== passWord.value) {
			p1.innerHTML = "Password does not match.";
		}
		else{
			p1.innerHTML = " " ;
		}
	}
//==========================================Re-Password Validation Ends========================================

//==========================================TexeArea Validation===========================================
	textArea.onkeyup  = function()
	{
		var p2 = document.getElementById('txtarea-error');
		var a = textArea.value.length;
		if (textArea.value.length < 120) {
			p2.innerHTML = "Min 120 " + a + "outof" + "120";
			textResult = false;
		}
		else{
			p2.innerHTML = " " ;
			textResult = true;
		}
	}
//==========================================TextArea Validation Ends========================================

//==========================================Form On-Submit Validations=========================================
	document.getElementById("myForm").onsubmit = function()
	{
		var p1 = document.getElementById('re-pass-error');
		if (rePassWord.value !== passWord.value || result == false || textResult == false) {
			alert("Please Validate Your Inputs");
		    return false;
		}
		else{
			alert("You E-mail Id is : " + email.value);
			alert("You Password is : " + passWord.value);			
			document.getElementById("myForm").submit();
		}
	}
//==========================================Form On-Submit Validations Ends====================================
