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

    const userData = await response.json()

    alert (userData.logged_in);
    for(let key in userData) {
        console.log("key: " + key + " , data: " + userData[key].character);
    }

    if (response.ok) 
    {
        document.location.replace('/gameMenu');
    } else 
      {
      alert('Failed to log in');
      }
  }
};
  
document.getElementById('loginBtn').addEventListener('click', logIn);

  

    
