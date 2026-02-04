const yesButton = document.querySelector('.yes-button');
const yeahMoji = document.querySelectorAll('.yeahMoji');
const noButton = document.querySelector('.no-button');
const noMoji = document.querySelectorAll('.noMoji');

function showYeahMojis() {
  yeahMoji.forEach(emoji => {
    emoji.style.opacity = '1';
    emoji.style.visibility = 'visible';
  });
}

function hideYeahmojis() {
  yeahMoji.forEach(emoji => {
    emoji.style.opacity = '0';
    emoji.style.visibility = 'hidden';
  });
}

function showNoMojis() {
  noMoji.forEach(emoji => {
    emoji.style.opacity = '1';
    emoji.style.visibility = 'visible';
  });
}

function hideNoMojis() {
  noMoji.forEach(emoji => {
    emoji.style.opacity = '0';
    emoji.style.visibility = 'hidden';
  });
}

const modalOverlay = document.getElementById('modalOverlay');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');

function showModal(message) {
  modalText.textContent = message;
  modalOverlay.classList.add('show');
}

function hideModal() {
  modalOverlay.classList.remove('show');
}

modalClose.addEventListener('click', hideModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) hideModal();
});

function handleYesClick() {
  showModal('사랑해요! 💕');
}

const noButtonAlertList = ["Are you sure?", "그짓말", "으심대ㅡㅡ+", "try again!"]

let index = 0;

function handleNoClick() {
  const text = noButtonAlertList[index % noButtonAlertList.length]
  alert(text)

  index += 1;
};

yesButton.addEventListener('mouseenter', showYeahMojis);
yesButton.addEventListener('mouseleave', hideYeahmojis);
noButton.addEventListener('mouseenter', showNoMojis);
noButton.addEventListener('mouseleave', hideNoMojis);
yesButton.addEventListener('click', handleYesClick);
noButton.addEventListener('click', handleNoClick);
