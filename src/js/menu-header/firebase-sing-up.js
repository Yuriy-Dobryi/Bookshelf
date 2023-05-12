import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Відкриття-закриття модалки
const modalAuth = document.querySelector('.modal-sing-up');
const openModal = document.querySelector('[data-modal-open-sign]');
const closeModal = document.querySelector('.sing-up-close');

openModal.addEventListener('click', onOpenModal);
closeModal.addEventListener('click', onCloseModal);

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

const authForm = document.querySelector('.sing-up-form');
const userName = document.querySelector('#sing-up-username');
const userEmail = document.querySelector('#sing-up-email');
const userPassword = document.querySelector('#sing-up-password');

authForm.addEventListener('submit', onPostUser);

function onPostUser(e) {
  e.preventDefault();

  const email = userEmail.value;
  const password = userPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      user.displayName = userName;

      clearForm();
      onCloseModal();

      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function clearForm() {
  userName.value = '';
  userEmail.value = '';
  userPassword.value = '';
}

function onCloseModal() {
  modalAuth.classList.remove('active-sing');
}

function onOpenModal() {
  modalAuth.classList.add('active-sing');
}
