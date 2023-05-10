import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Відкриття-закриття модалки
const modalAuth = document.querySelector('.modal-auth');
const openModal = document.querySelector('.login-button');
const closeModal = document.querySelector('.auth-close');

closeModal.addEventListener('click', () => (modalAuth.style.display = 'none'));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALEkLtygY4ClPeNnBWsjWWRHuqNt2hGg0',
  authDomain: 'book-shelf-01.firebaseapp.com',
  projectId: 'book-shelf-01',
  storageBucket: 'book-shelf-01.appspot.com',
  messagingSenderId: '643395349069',
  appId: '1:643395349069:web:a33ae1c6eee3be9ea34a04',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const authForm = document.querySelector('.auth-form');

authForm.addEventListener('submit', onPostUser);

function onPostUser(e) {
  e.preventDefault();
  const userEmail = document.querySelector('#auth-email').value;
  const userPassword = document.querySelector('#auth-email').value;
  const userName = document.querySelector('#auth-username');

  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      user.displayName = userName;

      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
