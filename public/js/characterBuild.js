async function getRaces() {
  let response = await fetch('/api/race', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const raceJSON = await response.json()

  let raceHTML = '';
  for(let race in raceJSON) {
    raceHTML += "<div id='buttonDiv'>";
    raceHTML += `   <button type="button" class="btn btn-dark" value=${raceJSON[race].id}>${raceJSON[race].race_name}</button>`;
    raceHTML += "</div>";
  }

  document.getElementById('race').innerHTML = raceHTML;
};

async function getClasses() {
  let response = await fetch('/api/class', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const classJSON = await response.json()

  let classHTML = '';
  for(let key in classJSON) {
    classHTML += "<div id='buttonDiv'>";
    classHTML += `   <button type="button" class="btn btn-dark" value=${classJSON[key].id}>${classJSON[key].class_name}</button>`;
    classHTML += "</div>";
  }

  document.getElementById('class').innerHTML = classHTML;
};

async function createCharacter() {
  
  const url = '/api/character';
  const bodyData = {
    'caracter_name' : document.getElementById('caracter_name').value,
    'character_xrp' : document.getElementById('character_xrp').value,
    'class_id' : document.getElementById('class_id').value,
    'race_id' : document.getElementById('race_id').value
  };

  let response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyData,
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('There was an issue building the character.');
  }
};

document
  .getElementById('createCharacter')
  .addEventListener('click', createCharacter());

getRaces();
getClasses();