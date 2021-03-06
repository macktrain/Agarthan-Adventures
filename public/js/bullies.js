//This function allows you to update the characters XRP
async function updateXRP(new_xrp, character_name) {

    //new_xrp is the new value of the characters xrp after it has been calculated on the front end.
    const data = {
        'character_xrp' : new_xrp,
    };

    const response = await fetch(`/api/character/${character_name}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      });

      if (response.ok) {
        document.location.replace('/*enter the next screen to head to like this: /nextpage */');
      } else {
        alert('Failed to log in');
      }
};

//THIS object allows bully to be available to the rest of the application
let bully = {};
async function populateBullyImpacts(number) {
    let response = await fetch(`/api/bullies/${number}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const bullyJSON = await response.json();

    if (bullyJSON) {
        bully.bully_name = bullyJSON.bully_name;
        bully.bully_background = bullyJSON.bully_background;
        bully.battle_text = bullyJSON.battle_text;
        bully.bully_hide = bullyJSON.impact_hide;
        bully.bully_run = bullyJSON.impact_run;
        bully.bully_fight = bullyJSON.impact_fight;
        bully.bully_bribe = bullyJSON.impact_bribe;
    } else {
        console.log(response)
        alert (`There is not a bully with id# ${number}`);
    }
};

//allow the character data to be transparent to front end
let characterJSON = {};
async function initCharacter(number) {
  let response = await fetch(`/api/character/${number}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  characterJSON = await response.json();
};

/*
    To access this funciton on pageload, call "impacts" function with a number parameter indicating which bully you want
    access to.  Example, if you want the first bully, make sure x = 1, so on and so forth.

    THen to access the values of the bullly, simply access the key like this:
    `You have come across ${bully.bully_name} and his background is $(bully.bully_background)`
*/

//assign x a value here

//access key values of bully here