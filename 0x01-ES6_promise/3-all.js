import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Use Promise.all to wait for both promises to resolve
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Destructure results to get photo and user
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // In case of any error
      console.log('Signup system offline');
    });
}
