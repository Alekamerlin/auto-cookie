// Atomatic clicks to the big cookie
setInterval(() => document.getElementById('bigCookie').click(), 50);

// Atomatic clicks to the golden cookies
setInterval(() => {
  Array.from(document.getElementById('shimmers').children).forEach((el) => {
    el.click();
  });
}, 50);

