/***********************/
/*XRP Randomizer start */
let session_user_id = localStorage.getItem('user_id');

let globalXRPValue= 0;
let globalRaceValue=0;
let globalClassValue=0;

function startRandomNumber()
{
    randomizer=setInterval(getNumbers,15)
}

function getNumbers(){

    globalXRPValue = Math.floor( 1 + Math.random() * 200 );
    document.getElementById("character_XRP").innerText = globalXRPValue;

}

function stopRandomNumber() {

    clearInterval(randomizer);
}
/*XRP Randomizer end */
/*********************/
let racesData = [];
async function getRaces() {
  let response = await fetch('/api/race', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
});

  const raceJSON = await response.json()
  racesData = [...raceJSON];

  let raceHTML = '';
  for(let race in raceJSON) {
    raceHTML += `<button type='button' class='btn btn-dark' onclick='getRaceDetails(${raceJSON[race].id})'>${raceJSON[race].race_name}</button>`;
  }

  document.getElementById('raceGroup').innerHTML = raceHTML;
};

let classesData = [];
async function getClasses() {
  let response = await fetch('/api/class', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
});

  const classJSON = await response.json()
  classData = [...classJSON];
 
  let classHTML = '';
  for(let key in classJSON) {
    classHTML += `<button type='button' class='btn btn-dark' onclick='getClassDetails(${classJSON[key].id})'>${classJSON[key].class_name}</button>`;
  }

  document.getElementById('classGroup').innerHTML = classHTML;
};

function getRaceDetails(x) {
  document.getElementById('raceSel').innerHTML = racesData[x-1].race_name;
  document.getElementById('raceBack').innerHTML = racesData[x-1].race_background;
  globalRaceValue = racesData[x-1].id;
}
function getClassDetails(x) {
  document.getElementById('classSel').innerHTML = classData[x-1].class_name;
  document.getElementById('classBack').innerHTML = classData[x-1].class_background;
  globalClassValue = classData[x-1].id;
}

async function createCharacter() {
    const characterName = document.getElementById('character_name').value.trim();

    if (characterName && (globalXRPValue>0) && (globalClassValue>0) && (globalRaceValue>0)) {
        const url = '/api/character';
        const data = {
          'id' : parseInt(session_user_id),
          'character_name' : characterName.toString(),
          'character_xrp' : parseInt(globalXRPValue),
          'class_id' : parseInt(globalClassValue),
          'race_id' :parseInt(globalRaceValue),
        };

        // alert ('*' + (window.sessionStorage.getItem('user_id')) + '*');
        // alert ('*' + (characterName) + '*');
        // alert ('*' + (globalXRPValue) + '*');
        // alert ('*' + (globalClassValue) + '*');
        // alert ('*' + (globalRaceValue) + '*');
    
        const bodyData = JSON.stringify(data);
    
        let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: bodyData,
        });
        
        if (response.ok) {
          window.sessionStorage.setItem('character_xrp', parseInt(globalXRPValue));
          document.location.replace('/gameMenu');
        } else {
          alert('There was an issue building the character.');
        }
    }
    else {
      alert ("You must enter all values to add your character!")
    }
};

document
  .getElementById('createButton')
  .addEventListener('click', createCharacter);

getRaces();
getClasses();