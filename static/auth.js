function requiredAllFields() {
    const error = document.querySelector('#error');
    error.innerHTML = "all fields are required!";
    error.className = "error-show";
}
function signUp() {
    const form = document.querySelector('.container');
    const login = form.login.value;
    const password = form.password.value;

    if(!login || !password){
        requiredAllFields();
    }
    else{
        window.location = '/reg?login=' + login + '&password=' + password;
    }
}

function signIn() {
	const form = document.querySelector('.container');
	const login = form.login.value;
	const password = form.password.value;

	if(!login || !password){
			requiredAllFields();
	}
	else{   
			window.location = '/auth?login=' + login + '&password=' + password;
	}
}




