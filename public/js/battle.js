//Grabbing current logged in user from localstorage
let session_user_id = localStorage.getItem('user_id');
let updatedXrp = 0;


function battle(impactValue) { 
  //Reset xrpImpact from previous battle 
  let xrpImpact = 0;
  switch (impactValue) {
    case "run":
      xrpImpact = bully.bully_run;
      break;
    case "fight":
      xrpImpact = bully.bully_fight;
      break;
    case "hide":
      xrpImpact = bully.bully_hide;
      break;
    case "bribe":

      xrpImpact = bully.bully_bribe;
  }
  updatedXrp = (parseInt(xrpImpact) + parseInt(updatedXrp));

  document.getElementById('xrp-value').innerHTML = (updatedXrp);
  updateXrp(updatedXrp);
};

const updateXrp = async (xrp) => {
    const response = await fetch(`/api/character/${session_user_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({character_xrp: xrp})
    })
    //THIS TAKES US TO NEXT BATTLE IF you haven't lost (updatedXrp > 0)
    if (x <= 6) {
      if (updatedXrp > 0) {
        //increments the global value x declared at the bottom and is used to call 'battleField(x)' at bottom of battle.js to start battles
        x++;
        //Readies the next battleField with next bully
        battleField(x);
      }
      else{
        alert ('You Lose!');
        //GOTO SUMMARY PAGE-LOSS
      }
    } else {
      alert ('You Win!');
      //GOTO SUMMARY PAGE-WIN
    }
}

function updateBattleBackground(x) {  
  document.body.style.backgroundImage = `url('/assets/battle${x}.jpg')`;
}

function readyBattle(x) {
  //Readies the background
  updateBattleBackground(x);
  //Readies the bully battle text
  
  document.getElementById('xrp-value').innerHTML = updatedXrp;
  document.getElementById('battle_text').innerHTML = bully.battle_text;
}

//USER SELECTION BUTTONS
document.getElementById("choiceFight").addEventListener("click", (event) => {
    event.preventDefault();
battle("fight")});
document.getElementById("choiceHide").addEventListener("click", (event) => {
    event.preventDefault();
battle("hide")});
document.getElementById("choiceBribe").addEventListener("click", (event) => {
    event.preventDefault();
battle("bribe")});
document.getElementById("choiceRun").addEventListener("click", (event)=> {
    event.preventDefault();
battle("run")});

//THIS STARTS US in battle #1, we are assuming there is at least 1 bully
//in the system x=1 and we will iterate on x until max # bullies
let x = 1;

async function battleField(x){
  await populateBullyImpacts(x);
  //If this is the first battle we must initialize the character
  if (x==1) {
    await initCharacter(session_user_id);
    updatedXrp = characterJSON.character_xrp;
  }
  readyBattle(x);
  // now wait for firstFunction to finish...
  // do something else
};

battleField(x);


