export const authenticate = async (username, password) => {
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
};