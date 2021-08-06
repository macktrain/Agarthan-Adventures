async function getRaces() {
  let response = await fetch('/api/race', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const raceJSON = await response.json()

  let raceHTML = '';
  for(let race in raceJSON) {
    raceHTML += "<div id='buttonDiv'>";
    raceHTML += `   <button class='raceBtn' type='button' id=${raceJSON[race].race_name}>${raceJSON[race].race_name}</button>`;
    raceHTML += "</div>";
  }

  document.getElementById('raceButtonList').innerHTML = raceHTML;
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
    classHTML += `   <button class='raceBtn' type='button' id=${classJSON[key].class_name}>${classJSON[key].class_name}</button>`;
    classHTML += "</div>";
  }

  document.getElementById('classButtonList').innerHTML = classHTML;
};

getRaces();
getClasses();