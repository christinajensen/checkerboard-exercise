window.onload = () => {
  let body = document.querySelector('body');
  body.setAttribute('style', 'margin: 0;');
  
  // // RED/BLACK CHECKERBOARD
  // for(var i = 0; i < 45; i++) { // refactor to non-hardcoded maximum
  //   let div = document.createElement('div');
  //     if(i % 2 === 0) {
  //       div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%; background-color: black;');
  //     } else {
  //       div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%; background-color: red;');
  //     }
  //   body.appendChild(div);
  // }

  // // RANDOM COLORS
  // function getRandomColor() {
  //   let letters = '0123456789ABCDEF'.split('');
  //   let color = '#';
  //   for(var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * letters.length)];
  //   }
  //   return color;
  // }

  // for(var i = 0; i < 45; i++) {
  //   let div = document.createElement('div');
  //   div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%;');
  //   div.style.backgroundColor = getRandomColor();
  //   body.appendChild(div);
  // }

  // // GRADIENT
  // let oddStartColor = {r: 52, g: 65, b: 251};
  // let evenStartColor = {r: 57, g: 43, b: 251};
  
  // for(var i = 0; i < 45; i++) { 
  //   let div = document.createElement('div');
  //     if(i % 2 === 0) {
  //       // refactor to function to prevent repetitive code
  //       oddStartColor = {r: Math.round(Math.min(oddStartColor.r * 1.06, 255)), g: Math.round(Math.min(oddStartColor.g * 1.06, 255)), b: Math.round(Math.min(oddStartColor.b * 1.06, 255))};
  //       div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%; background-color: rgb(' + oddStartColor.r + ',' + oddStartColor.g + ',' + oddStartColor.b + ')');
  //     } else {
  //       evenStartColor = {r: Math.round(Math.min(evenStartColor.r * 1.07, 255)), g: Math.round(Math.min(evenStartColor.g * 1.07, 255)), b: Math.round(Math.min(evenStartColor.b * 1.07, 255))};
  //       div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%; background-color: rgb(' + evenStartColor.r + ',' + evenStartColor.g + ',' + evenStartColor.b + ')');
  //     }
  //   body.appendChild(div);
  // }

  // FLASHING
  let containerDiv = document.createElement('div');
  containerDiv.setAttribute('id', 'container');
  body.appendChild(containerDiv);
  
  function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for(var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  function createDivs() {
    let count = 0;
    for(var i = 0; i < 45; i++) {
      let div = document.createElement('div');
      div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%;');
      div.setAttribute('id', count);
      div.style.backgroundColor = getRandomColor();
      containerDiv.appendChild(div);
      count++;
    } 
  }
  createDivs();

  function updateColor() {
    for(var i = 0; i < 45; i++) {
      let colorDiv = document.getElementById(i);
      let newColor = getRandomColor();
      colorDiv.style.backgroundColor = newColor;
    }
  }
  setInterval(updateColor, 2000);
  
  // AUDIO
  let audio = document.createElement('audio');
  body.appendChild(audio);
  let source = document.createElement('source');
  source.setAttribute('src', 'eric-clapton-layla.mp3');
  audio.appendChild(source);
  audio.play();

}