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

getRaces();
getClasses();