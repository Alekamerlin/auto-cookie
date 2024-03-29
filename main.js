// A function that creates buttons in the top bar
const createButton = (intervalId, textStart, textStop, func) => {
  const topBar = document.getElementById('topBar');
  const block = document.createElement('div');
  const link = document.createElement('a');

  // I use here a link instead of a button only to support styles of the app
  link.innerText = textStart;
  link.setAttribute('href', '#cookies');
  link.addEventListener('click', (event) => {
    event.preventDefault();

    if (intervalId) {
      link.innerText = textStart;

      clearInterval(intervalId);
      intervalId = null;
    } else {
      link.innerText = textStop;

      intervalId = setInterval(func, 50);
    }
  });

  block.appendChild(link);
  topBar.insertBefore(block, topBar.firstChild);
};

// Variables to store interval IDs
let goldenCookieInterval = null;
let bigCookieInterval = null;
let newsInterval = null;


// The button that triggers automatic clicks to the golden cookies
createButton(
  goldenCookieInterval,
  'Start GG clicks',
  'Stop GG clicks',
  () => {
    Array.from(document.getElementById('shimmers').children).forEach((el) => {
      el.click();
    });
  },
);

// The button that triggers automatic clicks to the big cookie
createButton(
  bigCookieInterval,
  'Start BG clicks',
  'Stop BG clicks',
  () => document.getElementById('bigCookie').click(),
);

// The button that triggers automatic clicks to the news
createButton(
  newsInterval,
  'Start News clicks',
  'Stop News clicks',
  () => {
    const news = document.getElementById('commentsText1');

    Array.from(news.children).forEach((el) => {
        el.className === 'fortune' && news.click();
    });
  },
);

