
async function signIn() {
  
    const url = '/api/character';
    const bodyData = {
        'email' : document.getElementById('email').value,
        'password' : document.getElementById('password').value,
    };
  
    let response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: bodyData,
    });
  
    const signInResponse = await response.json()
};
  
async function signUp() {

    const url = '/api/character';
    const bodyData = {
        'user_fname' : document.getElementById('user_fname').value,
        'user_lname' : document.getElementById('user_lname').value,
        'username' : document.getElementById('username').value,
        'email' : document.getElementById('email').value,
        'password' : document.getElementById('password').value,
    };
    
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyData,
    });
    
    const signupResponse = await response.json()
};
    
    
    
document
.getElementById('signInBtn')
.addEventListener('click', signIn());

document
.getElementById('signUpBtn')
.addEventListener('click', SignUp());
    