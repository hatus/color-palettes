const palettes = [
  {
    key: 'grey',
    value: 'Grey',
    colors: ['#121212', '#1e1e1e', '#212121', '#222222', '#515151'],
  },
  {
    key: 'blue-grey',
    value: 'Blue Grey',
    colors: ['#627D9B', '#F0F4F8', '#D9E2EC', '#BCCCDC', '#9FB3C8'],
  },
];

const wrapper = document.getElementById('wrapper');
const menu = document.getElementById('menu');
const selectElement = document.querySelector('#select');

function setColor(colors) {
  colors.forEach(color => {
    const div = document.createElement('div');
    div.classList.add('frame');
    div.innerHTML = color;
    div.style.backgroundColor = color;
    wrapper.appendChild(div);
  });
}

function renderMenu() {
  palettes.forEach(palette => {
    const option = document.createElement('option');
    option.value = palette.key;
    option.innerText = palette.value;
    selectElement.appendChild(option);
  });
}

selectElement.addEventListener('change', e => {
  palettes.forEach(palette => {
    if (palette.key === e.target.value) {
      wrapper.innerHTML = '';
      wrapper.appendChild(menu);
      setColor(palette.colors);
    }
  });
});

renderMenu();
setColor(palettes[0].colors);
