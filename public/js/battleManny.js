const id = 1;
const battle = async (x) => {
    
  const response = await fetch(`/api/character/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const character = await response.json();
  
  let xrpImpact = 0;
  switch (x) {
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
  const updatedXrp = (parseInt(xrpImpact) + parseInt(character.character_xrp));

  document.getElementById('xrp-value').innerHTML = (updatedXrp);
  updateXrp(updatedXrp);
};
const updateXrp = async (x) => {
    const response = await fetch(`/api/character/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({character_xrp: x})
    })

}

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

impacts(6);