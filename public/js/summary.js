let session_user_id = localStorage.getItem('user_id');
let characterJSON = {};
async function initCharacter(x) {
    let response = await fetch(`/api/character/${session_user_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    characterJSON = await response.json();
}
async function winOrLose(session_user_id) {
   await initCharacter(session_user_id)
    if (characterJSON.character_xrp >= 0) {
        document.getElementById('header').innerHTML = `Congrats! You survived the journey and your final XRP total is: ${characterJSON.character_xrp}`
    } else {
        document.getElementById('header').innerHTML = `YOU FAILED... You're XRP is: ${characterJSON.character_xrp}`
    }
}
winOrLose();