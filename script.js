const changeBackgroundColor = function() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += (Math.floor(Math.random() * 16).toString(16));
  }
  document.body.style.backgroundColor = color;
}

document.getElementById('start').addEventListener('click',function(){

    changeBackgroundColor();

})