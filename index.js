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

function handleYesClick() {
  alert('오빠찌 사랑해 알럽뿡짝슨 💕💕💕');
}

const noButtonAlertList = ["진짜?", "그짓말", "으심대ㅡㅡ+", "구라즐"]

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
