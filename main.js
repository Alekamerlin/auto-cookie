const topBar = document.getElementById('topBar');

// Variables of the big cookie button;
const BIG_COOKIE_TEXT_START = 'Start BG clicks';
const BIG_COOKIE_TEXT_STOP = 'Stop BG clicks';
let bigCookieInterval = null;

// Variables of the golden cookies button;
const GOLDEN_COOKIE_TEXT_START = 'Start GG clicks';
const GOLDEN_COOKIE_TEXT_STOP = 'Stop GG clicks';
let goldenCookieInterval = null;

// The button that triggers automatic clicks to the big cookie
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

// The button that triggers automatic clicks to the golden cookies
const goldenDiv = document.createElement('div');
const goldenDivLink = document.createElement('a');

goldenDivLink.innerText = GOLDEN_COOKIE_TEXT_START;
goldenDivLink.setAttribute('href', '#goldenCookie');
goldenDivLink.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (goldenCookieInterval) {
    goldenDivLink.innerText = GOLDEN_COOKIE_TEXT_START;

    clearInterval(goldenCookieInterval);
    goldenCookieInterval = null;
  } else {
    goldenDivLink.innerText = GOLDEN_COOKIE_TEXT_STOP;

    goldenCookieInterval = setInterval(() => {
      Array.from(document.getElementById('shimmers').children).forEach((el) => {
        el.click();
      });
    }, 50);
  }
});

goldenDiv.appendChild(goldenDivLink);

// Append the buttons to the top bar of the application
topBar.insertBefore(goldenDiv, topBar.firstChild);
topBar.insertBefore(bigDiv, topBar.firstChild);

