const displayGifs = (urls) => {
const container = document.getElementById('gif-container');
container.innerHTML = '';

urls.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('gif');
    const overlay = document.createElement('div');
    overlay.classList.add('gif-overlay');
    overlay.innerText = 'X';
    img.appendChild(overlay);
    img.addEventListener('click', () => {
      img.classList.toggle('gif-clicked');
      overlay.style.display = img.classList.contains('gif-clicked') ? 'flex' : 'none';
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    });
    container.appendChild(img);
  });
};

displayGifs([
  'https://media.tenor.com/gOyY6bBu9-UAAAAd/one-number.gif',
  'https://media.tenor.com/UQiBqbq6CsgAAAAC/peace-sign-lexnos.gif',
  'https://media.tenor.com/7MFHhFVJ3i8AAAAC/kstr-kochstrasse.gif',
  'https://media.tenor.com/6QJsym07m-gAAAAC/four.gif'
]);

const replaceButton = document.getElementById('replace-button');
replaceButton.addEventListener('click', () => {
  const input = document.getElementById('gif-input');
  const urls = input.value.split(' ').map((url) => url.trim());
  displayGifs(urls);
});