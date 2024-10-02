// 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

// To observe the output of the resolved or rejected promise, use async/await or `.then` and `.catch`
getFullResponseFromAPI(true)
  .then(response => console.log(response))
  .catch(error => console.error(error));

getFullResponseFromAPI(false)
  .then(response => console.log(response))
  .catch(error => console.error(error));

