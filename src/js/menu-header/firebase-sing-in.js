import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// Відкриття-закриття модалки
const modalAuth = document.querySelector('.modal-sing-in');
const openModal = document.querySelector('[data-modal-open-sign]');
const closeModal = document.querySelector('.sing-in-close');

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
// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authForm = document.querySelector('.sing-in-form');

authForm.addEventListener('submit', onGetUser);

function onGetUser(e) {
  e.preventDefault();

  const userEmail = document.querySelector('#sing-in-email').value;
  const userPassword = document.querySelector('#sing-in-email').value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      modalAuth.style.display = 'none';
      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// Наглядач за даними користувача
onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    logIn();
  } else {
    console.log('User не знайдений');
  }
});

function logIn() {
  openModal.innerText = 'Log-out -->';
}
