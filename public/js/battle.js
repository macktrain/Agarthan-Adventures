function battle(x){
    const currXrp = await fetch('/api/character/xrp', {
        method: 'GET',
        body: JSON.stringify({id}),
        headers: { 'Content-Type': 'application/json' }
    });
    let xrpImpact = 0;
    switch(x) {
        case 'run':
            xrpImpact = bully.bully_run;
            break;
        case 'fight':
            xrpImpact = bully.bully_fight;
            break;
        case 'hide':
            xrpImpact = bully.bully_hide;
            break;
        case 'bribe':
            xrpImpact = bully.bully_bribe;
    }
    return (xrpImpact + currXrp);
}

impacts(1);

document.getElementById("choiceRun").addEventListener('click', battle('run'));
document.getElementById("choiceFight").addEventListener('click', battle('fight'));
document.getElementById("choiceHide").addEventListener('click', battle('hide'));
document.getElementById("choiceBribe").addEventListener('click', battle('bribe'));

