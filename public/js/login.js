const logIn = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const url = '/api/user/login';

  if (email && password) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' 
      },
    });

    const userData = await response.json();

    if (response.ok) {
      
        localStorage.setItem('user_id', (parseInt(userData.user_id)));
        const res = await fetch(`/api/character/${userData.user_id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' 
          },
        });

        const charData = await res.json();

        if (res.ok) 
        {
          document.location.replace('/gameMenu');
        } else 
        {
          document.location.replace('/characterBuild');
        }
    } 
    else {
      alert('Failed to log in');
    }
  }
};

document.getElementById('loginBtn').addEventListener('click', logIn);