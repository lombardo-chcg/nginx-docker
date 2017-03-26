const GREETINGS_ENDPOINT = '/api/greetings';

async function getGreetings() {
  const greetings = await makeApiCall(GREETINGS_ENDPOINT);

  greetings
    .map(data => createDivs(data))
    .map(val => appendToDom(val, 'greetings'));
}

const Result = (val) => {
  return {
    map: (func) => func(val),
    value: () => val
  };
}

function makeApiCall(endpoint) {
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => Result(data))
    .catch(error => console.log(error));
}

function createDivs(jsonArray) {
  const content = jsonArray
    .map(node => `<div><h3>${node.language}: ${node.content}</h3></div>`)
    .join('');

  return Result(content);
}

function appendToDom(content, DomId) {
  document
    .getElementById(DomId)
    .innerHTML = content;
}
