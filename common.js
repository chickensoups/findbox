let message = document.getElementById('message');
let nextLevelBtn = document.getElementById('next-level-btn')
const MSG_INFO = 'info'
const MSG_SUCCESS = 'success'
const MSG_FAIL = 'fail'

function updateMessage(content, type = MSG_INFO) {
  message.innerHTML = content;
  switch (type) {
    case MSG_INFO:
      message.style.color = 'black';
      break;
    case MSG_SUCCESS:
      message.style.color = 'green';
      break;
    case MSG_FAIL:
      message.style.color = 'red';
      break;
  }
}

function showTheNextLevelButton() {
  nextLevelBtn.style.display = 'unset';
}

function nextLevel(levelName) {
  window.location.href = levelName + '.html';
}


function displaySuccessSound() {

}

function displayFailedSound() {

}

