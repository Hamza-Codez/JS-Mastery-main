const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intId;
const Startchangingcolor = function(){
  if(!intId){
    intId = setInterval(bgcolor, 1000);
  }
  function bgcolor() {
     document.body.style.backgroundColor = randomColor();
    }
}
const Stopchangingcolor = function(){
  clearInterval(intId);
  intId = null;
}

document.querySelector('#start').addEventListener('click',Startchangingcolor)

document.querySelector('#stop').addEventListener('click', Stopchangingcolor)
