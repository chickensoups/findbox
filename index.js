let gameTitle = document.getElementById('game-title-input');
let message = document.getElementById('message');

function displaySuccessSound() {

}

function displayFailedSound() {

}

function mysubmit() {
  if (gameTitle.value.toLowerCase() === 'findbox') {
    message.innerHTML = 'Brilliant! So let find some boxes.';
  } else {
    message.innerHTML = 'Oh, no!'
  }
}