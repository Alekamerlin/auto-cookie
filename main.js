const topBar = document.getElementById('topBar');

// Variables of the big cookie button;
const BIG_COOKIE_TEXT_START = 'Start BG clicks';
const BIG_COOKIE_TEXT_STOP = 'Stop BG clicks';
let bigCookieInterval = null;

// The button that triggers Automatic clicks to the big cookie
const bigDiv = document.createElement('div');
const bigDivLink = document.createElement('a');

bigDivLink.innerText = BIG_COOKIE_TEXT_START;
bigDivLink.setAttribute('href', '#bigCookie');
bigDivLink.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (bigCookieInterval) {
    bigDivLink.innerText = BIG_COOKIE_TEXT_START;

    clearInterval(bigCookieInterval);
    bigCookieInterval = null;
  } else {
    bigDivLink.innerText = BIG_COOKIE_TEXT_STOP;

    bigCookieInterval = setInterval(() => {
      document.getElementById('bigCookie').click();
    }, 50);
  }
});

bigDiv.appendChild(bigDivLink);

topBar.insertBefore(bigDiv, topBar.firstChild);

// Automatic clicks to the golden cookies
const goldenCookieInterval = setInterval(() => {
  Array.from(document.getElementById('shimmers').children).forEach((el) => {
    el.click();
  });
}, 50);

clearInterval(goldenCookieInterval);

