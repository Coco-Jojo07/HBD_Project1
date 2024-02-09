function createBalloons() {
    const balloons = document.querySelector('.balloons');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff']; 
  
    for (let i = 0; i < 20; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${Math.random() * 3 + 4}s`; 
      balloons.appendChild(balloon);
    }
  }
  
  createBalloons();
  