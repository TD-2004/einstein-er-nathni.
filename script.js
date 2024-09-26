const comments = [
    "Age is merely the number of years the world has been enjoying you! 🎉",
    "Life’s a picnic, so let’s celebrate your birthday with a basket full of fun and a blanket of joy! 😉",
    "You’re like a fine wine... you get better with age! 🍷",
    "khub bhalo thakben mam",
    "I spent 3 hours searching the internet for the perfect birthday message for you and then I gave up. Happy Birthday! 👴👵"
  ];
  
  function generateRandomComment() {
    const commentIndex = Math.floor(Math.random() * comments.length);
    document.getElementById('funny-comment').innerText = comments[commentIndex];
  }
  
  function releaseBalloons() {
    const balloonContainer = document.getElementById('balloons');
    balloonContainer.innerHTML = ''; // Clear existing balloons
    const colors = ['red', 'blue', 'green', 'yellow'];
    
    for (let i = 0; i < 10; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon', colors[i % colors.length]);
      balloon.style.left = `${Math.random() * 90}%`;
      balloonContainer.appendChild(balloon);
    }
  }
  