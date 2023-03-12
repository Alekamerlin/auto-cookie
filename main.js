const topBar = document.getElementById('topBar');

// The button that triggers Automatic clicks to the big cookie
const bigDiv = document.createElement('div');
const bigDivLink = document.createElement('a');

bigDivLink.innerText = 'Start BG clicks';
bigDivLink.setAttribute('href', '#bigCookie');

bigDiv.appendChild(bigDivLink);

topBar.insertBefore(bigDiv, topBar.firstChild);

// Automatic clicks to the big cookie
const bigCookieInterval = setInterval(() => {
  document.getElementById('bigCookie').click();
}, 50);

clearInterval(bigCookieInterval);

// Automatic clicks to the golden cookies
const goldenCookieInterval = setInterval(() => {
  Array.from(document.getElementById('shimmers').children).forEach((el) => {
    el.click();
  });
}, 50);

clearInterval(goldenCookieInterval);

