function newRedP(message) {
    const parentElement = document.querySelector('#container');
    const newP = document.createElement('p');
    newP.textContent = message;
    newP.style.color = 'red';
    parentElement.appendChild(newP);
}

function newBlueH3(message) {
    const parentElement = document.querySelector('#container');
    const newH3 = document.createElement('h3');
    newH3.textContent = message;
    newH3.style.color = 'blue';
    parentElement.appendChild(newH3);
}

function newDiv(message1, message2) {
    const parentElement = document.querySelector('#container');
    const bpDiv = document.createElement('div');
    bpDiv.style.cssText = 'background-color: pink; border: 2px solid black; width: 500px; height: 500px';
    const h1Message = document.createElement('h1')
    h1Message.textContent = message1;
    const pMessage = document.createElement('p')
    pMessage.textContent = message2;
    bpDiv.appendChild(h1Message)
    bpDiv.appendChild(pMessage);
    parentElement.appendChild(bpDiv);
}




newRedP("Hey I'm red!");
newBlueH3("I'm a blue H3!");
newDiv("I'm in a div", "ME TOO!");
