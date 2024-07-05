const randomColor = function(){
  let hex = '0123456789ABCDEF';
  let color ='#';
  for(i = 0; i < 6; i++){
  color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};

let intevalId;
let startchangeColor = function(){
  if(!intevalId){
    intevalId = setInterval(bgColor, 1000)
  }
  function bgColor (){
    document.body.style.backgroundColor = randomColor()
  };
}
let stopchangeColor = function(){
  clearInterval(intevalId);
  intevalId = null;
}

document.querySelector('#start').addEventListener('click', startchangeColor)

document.querySelector('#stop').addEventListener('click', stopchangeColor)