function gotoViewCharacter(){
    document.location.replace('/characterView');
}

function gotoPlayGame(){
    document.location.replace('/battle');
}

function goToHowToPlay(){
    document.location.replace('/tutorial');
}

document
.getElementById('viewCharBtn')
.addEventListener('click', gotoViewCharacter);

document
.getElementById('playGameBtn')
.addEventListener('click', gotoPlayGame);

document
.getElementById('tutorialBtn')
.addEventListener('click', goToHowToPlay);
