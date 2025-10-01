let messageIndex = 0;
let isMessageStarted = false;

function startSequentialMessage() {
  if (isMessageStarted) return;
  
  const messages = document.querySelectorAll('.sequential-message p');
  isMessageStarted = true;
  messageIndex = 0; 
  
  function showNextMessage() {
    messages.forEach(msg => msg.classList.remove('active'));
    
    if (messageIndex < messages.length) {
      messages[messageIndex].classList.add('active');
      messageIndex++;
      
      setTimeout(() => {
        showNextMessage();
      }, 3000); 
    }
  }
  
  showNextMessage();
}

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.birthday-card');
let isFlipped = false;

cardContainer.addEventListener('click', function() {
  isFlipped = !isFlipped;
  card.style.transform = isFlipped ? 'rotateY(180deg)' : '';
  
  if (isFlipped) {
    const messages = document.querySelectorAll('.sequential-message p');
    messages.forEach(p => p.classList.remove('active'));
    messageIndex = 0;
    isMessageStarted = false;
    
    setTimeout(() => {
      startSequentialMessage();
    }, 800);
  } else {
    const messages = document.querySelectorAll('.sequential-message p');
    messages.forEach(p => p.classList.remove('active'));
    messageIndex = 0;
    isMessageStarted = false;
  }
});

cardContainer.addEventListener('mouseenter', function() {
  if (!isFlipped) {
    card.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      if (!isMessageStarted) {
        startSequentialMessage();
      }
    }, 800);
  }
});

cardContainer.addEventListener('mouseleave', function() {
  if (!isFlipped) {
    card.style.transform = '';
    const messages = document.querySelectorAll('.sequential-message p');
    messages.forEach(p => p.classList.remove('active'));
    messageIndex = 0;
    isMessageStarted = false;
  }
});

