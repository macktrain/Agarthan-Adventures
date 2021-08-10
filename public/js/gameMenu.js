function gotoCharacterCreate(){
    document.location.replace('/characterBuild');
}

function gotoViewCharacter(){
    document.location.replace('/characterView');
}

function gotoPlayGame(){
    document.location.replace('/');
}

function gotoHowToPlay(){
    document.location.replace('/');
}

document
.getElementById('charCreateBtn')
.addEventListener('click', gotoCharacterCreate);

document
.getElementById('viewCharBtn')
.addEventListener('click', gotoViewCharacter);

document
.getElementById('playGameBtn', gotoPlayGame)
.addEventListener('click', );

document
.getElementById('howToPlayBtn')
.addEventListener('click', gotoHowToPlay);
