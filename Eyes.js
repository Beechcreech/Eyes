const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
};

document.onmousemove = (event) => {
  
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
//Codio marked my loop as incorrect because of my formatting
//I had to format it exactly as how it was in the completed
//Documents
for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
