const logIn = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/gameMenu');
    } else {
      alert('Failed to log in');
    }
  }
};
  
document
.getElementById('loginBtn')
.addEventListener('click', logIn);

  

    
