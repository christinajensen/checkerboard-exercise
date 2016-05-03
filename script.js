window.onload = () => {
  let body = document.querySelector('body');
  body.setAttribute('style', 'margin: 0;');
  
  for(var i = 0; i < 45; i++) { // refactor to non-hardcoded maximum
    let div = document.createElement('div');
      if(i % 2 === 0) {
        div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%; background-color: black;');
      } else {
        div.setAttribute('style', 'width: 11.1%; float: left; padding-bottom: 11.1%; background-color: red;');
      }
    body.appendChild(div);
  }

}