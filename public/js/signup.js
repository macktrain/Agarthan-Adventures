async function signUp() {

    const url = '/api/user';
    const data = {
        'email' : document.getElementById('email').value.trim(),
        'password' : document.getElementById('newpassword').value.trim(),
    };

    const bodyData = JSON.stringify(data);
    
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyData,
    });
    
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('There was an issue with either your username or password.');
    }
};

document
.getElementById('signUpBtn')
.addEventListener('click', signUp);