import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      results.forEach((result) => {
        if (result.body) {
          console.log(result.body.firstName, result.body.lastName);
        } else {
          console.log('Signup system offline');
        }
      });
    })
    .catch(() => console.log('Signup system offline'));
}
