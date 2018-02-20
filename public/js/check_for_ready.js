const addListener = function() {
  let readyButton = document.getElementById('ready');
  readyButton.onclick = startGamePlay;
};

const areAllShipsPlaced=function(){
  return shipsHeadPositions.length == 0;
};

const startGamePlay=function(){
  if (areAllShipsPlaced()) {
    // document.getElementsByClassName('popup')[0].style.display = 'block';
    canStartGame();
    document.querySelector('#oceanGrid').onclick = null;
  }
  document.querySelector('.messageBox').innerHTML="Please place all your ships";
};
