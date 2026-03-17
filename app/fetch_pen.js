const https = require('https');

https.get('https://codepen.io/laurent-thevenet/pen/MYQOqj.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log("JS:", data); });
});

https.get('https://codepen.io/laurent-thevenet/pen/MYQOqj.css', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log("CSS:", data); });
});

https.get('https://codepen.io/laurent-thevenet/pen/MYQOqj.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log("HTML:", data); });
});
