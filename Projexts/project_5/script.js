const generateRandomColor = () => {
  const hexCharacters = '0123456789ABCDEF';
  let colorCode = '#';
  for (let i = 0; i < 6; i++) {
    colorCode += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return colorCode;
};

let intervalId;
const startColorChange = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = generateRandomColor();
    }, 1000);
  }
};

const stopColorChange = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);
