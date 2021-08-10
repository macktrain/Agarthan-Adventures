//This function allows you to load up your character.
//Call it with loadCharacter(<characters name>) and then access the 
//data through the character object.

const character = {};

async function loadCharacter(character_name) {
    let response = await fetch(`/api/character/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
  

    const characterJSON = await response.json();

    if (characterJSON) {
        character.character_name = characterJSON.character_name;
        character.character_xrp = characterJSON.character_xrp;
        character.class_id = characterJSON.class_id;
        character.race_id = characterJSON.race_id;
    } else {
        console.log(response)
        alert (`There is not a character ${character_name} to load`);
    }
};