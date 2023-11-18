document.addEventListener('DOMContentLoaded', function () {
  // Create main div
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'mainDiv');
  mainDiv.style.display = 'flex';
  mainDiv.style.flexDirection = 'column';
  mainDiv.style.alignItems = 'center';

  // Create button
  const button = document.createElement('button');
  button.textContent = 'Lets Celebrate';
  button.addEventListener('click', function () {
    button.style.display = 'none'; // Hide the button once clicked

    let count = 10;

    function countdown() {
      if (count === 0) {
        showHappySmile();
        showImage();
        
      } else {
        const countText = document.createElement('div');
        countText.textContent = count;
        countText.style.fontSize = '90px';
        mainDiv.appendChild(countText);

        if (count === 2) {
          playBeepSound();
        }

        setTimeout(function () {
          mainDiv.removeChild(countText); // Hide the countdown digit
          count--;
          countdown();
        }, 1000);
      }
    }

    countdown();
  });

  // Append for main div and button to the body
  document.body.appendChild(mainDiv);
  document.body.appendChild(button);
  
  function showHappySmile() {
    const happyInd = document.createElement('div');
    happyInd.setAttribute('id', 'happyInd')
    happyInd.style.fontSize = "40px";
    happyInd.innerHTML = '<p><span style="text-align: center; text-shadow: 0 2px 2px blue;  background-image: linear-gradient(to right, red, white, green); border: none; ">HAPPY INDEPENDENCE DAY</span></p>';
    mainDiv.appendChild(happyInd);
  }

  function showImage() {
    const image = document.createElement('img');
    image.src = 'https://cdn.pixabay.com/animation/2022/08/21/20/03/20-03-41-348_512.gif'; 
    image.alt = 'national flag';
    mainDiv.appendChild(image);

    // Hide the count 0
    const countText = document.createElement('div');
    countText.setAttribute('id', 'countText');
    countText.textContent = ''; // When count is 0 = Empty text
    countText.style.fontSize = '60px';
    mainDiv.appendChild(countText);
  }

 

  function playBeepSound() {
    const beepAudio = new Audio('./Assets/beep-06.wav'); // playing beep on every second once button clicked. 
    beepAudio.play();
  }
});

