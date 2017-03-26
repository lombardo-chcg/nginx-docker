function getGreetings() {
  fetch('/api/greetings')
    .then(response => response.json())
    .then(data => handleJsonArray(data))
    .catch(error => console.log(error));
}

function setContentByDomID(content, id) {
  document
    .getElementById(id)
    .innerHTML = content;
}

function handleJsonArray(jsonArray) {
  const content = jsonArray.map(node => node.content).join(' - ');

  setContentByDomID(content, 'greetings');
}
