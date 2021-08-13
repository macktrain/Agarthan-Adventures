function gotoViewCharacter(){
    document.location.replace('/characterView');
}

function gotoPlayGame(){
    document.location.replace('/battle');
}

function gotoHowToPlay(){
    document.location.replace('/playInstructions');
}

document
.getElementById('viewCharBtn')
.addEventListener('click', gotoViewCharacter);

document
.getElementById('playGameBtn')
.addEventListener('click', gotoPlayGame);

document
.getElementById('howToPlayBtn')
.addEventListener('click', gotoHowToPlay);
