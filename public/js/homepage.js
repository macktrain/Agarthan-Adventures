function gotoLogin(){
    document.location.replace('/login');
}

function gotoSignUp(){
    document.location.replace('/signup');
}

document
.getElementById('loginBtn')
.addEventListener('click', gotoLogin);

document
.getElementById('signupBtn')
.addEventListener('click', gotoSignUp);
