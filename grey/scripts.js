let frames = [...document.getElementsByClassName('frame')];

frames.forEach(element => {
  element.style.backgroundColor = element.innerText;
});
