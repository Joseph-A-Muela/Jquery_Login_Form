var emailInput = $('.emailInput');
var passwordInput = $('.passwordInput');
var button =$('button');
var error1=$('#error1');
var error2=$('#error2');
var error3=$('#error3');



button.on('click', function() {

	if (emailInput.val()=== 'aaron@theironyard.com' && passwordInput.val() === 'password123') {
		window.location = 'http://www.theironyard.com';
		error3.hide();
	}

	if(emailInput.val() === 'admin@google.com' && passwordInput.val() === 'pandas') {
		window.location = 'http://www.theironyard.com';
		error3.hide();
	}

	if(emailInput.val() !== 'aaron@theironyard.com' && passwordInput.val() === 'password123') {
		error1.html('Please enter a valid username');
		error3.hide();
	}

	if(emailInput.val() === 'aaron@theironyard.com' && passwordInput.val() !== 'password123') {
		error2.html('Please enter a valid password');
		error3.hide();
	}

	if(emailInput.val() === 'admin@google.com' && passwordInput.val() !== 'pandas') {
		error2.html('Please enter a valid password');
		error3.hide();
	}

	if(emailInput.val() !== 'admin@google.com' && passwordInput.val() === 'pandas') {
		error1.html('Please enter a valid username');
		error3.hide();
	}

	if(emailInput.val() !== 'admin@google.com' || emailInput.val() !== 'aaron@theironyard.com'
		|| passwordInput.val() !== 'pandas' || passwordInput.val() !== 'password123') {
			error3.html('Please enter a valid combination');
	}

});
