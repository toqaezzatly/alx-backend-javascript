export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log when the promise resolves
      console.log('Got a response from the API');
      // Return the required object when resolved
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      // Log when the promise rejects
      console.log('Got a response from the API');
      // Return an empty error object when rejected
      return new Error();
    });
}
