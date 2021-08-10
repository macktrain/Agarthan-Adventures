const bully = {};

async function impacts(number) {
    let response = await fetch(`/api/bullies/${number}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const bullyJSON = await response.json();


    if (bullyJSON) {
        bully.bully_name = bullyJSON.bully_name;
        bully.bully_background = bullyJSON.bully_background;
        bully.bully_hide = bullyJSON.bully_hide;
        bully.bully_run = bullyJSON.bully_run;
        bully.bully_fight = bullyJSON.bully_fight;
        bully.bully_bribe = bullyJSON.bully_bribe;
    } else {
        console.log(response)
        alert (`There is not a bully with id# ${number}`);
    }
};

/*
    To access this funciton on pageload, call "impacts" function with a number parameter indicating which bully you want
    access to.  Example, if you want the first bully, make sure x = 1, so on and so forth.

    THen to access the values of the bullly, simply access the key like this:
    `You have come across ${bully.bully_name} and his background is $(bully.bully_background)`
*/

//assign x a value here
impacts(x);
//access key values of bully here