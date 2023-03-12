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

