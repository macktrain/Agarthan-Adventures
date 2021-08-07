const formSubmit = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#exampleInputEmail1" ).value.trim();
    const password = document.querySelector("#exampleInputPassword1" ).value.trim();

      if (email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up.');
        }
      }
}

    document
    .querySelector('#signup-form')
    .addEventListener('submit', formSubmit);