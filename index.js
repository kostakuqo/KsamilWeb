import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import {
  getDatabase,
  set,
  get,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtjyLL_uNEvCnGyq4AwoawOs8HzrhUm6k",
  authDomain: "ksamilweb-274bb.firebaseapp.com",
  databaseURL:
    "https://ksamilweb-274bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ksamilweb-274bb",
  storageBucket: "ksamilweb-274bb.appspot.com",
  messagingSenderId: "604015083241",
  appId: "1:604015083241:web:42c92f0649fc9260bb7a78",
  measurementId: "G-Z0TC3Y15KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let register = document.querySelector(".wrapper");
let firstnamereg = document.getElementById("firstnameregister");
let lastnamereg = document.getElementById("lastnameregister");
let emailreg = document.getElementById("emailregister");
let passwordreg = document.getElementById("passwordregister");
let emailin = document.getElementById("emaillogin");
let passwordin = document.getElementById("passwordlogin");
const createUser = document.getElementById("submitregister");
const signInUser = document.getElementById("login");

createUser.addEventListener("click", function () {
  createUserWithEmailAndPassword(
    auth,
    emailreg.value,
    passwordreg.value,
    lastnamereg.value,
    firstnamereg.value
  )
    .then((credentials) => {
      set(ref(db, "UsersAuthList/" + credentials.user.uid), {
        firstname: firstnamereg.value,
        lastname: lastnamereg.value,
        email: emailreg.value,
        password: passwordreg.value,
      });
      alert("Thank you , your registration has been saved!!");
      register.style.display = "none";
    })

    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
});

signInUser.addEventListener("click", function () {
  signInWithEmailAndPassword(auth, emailin.value, passwordin.value)
    .then((credentials) => {
      return get(child(dbref, "UsersAuthList/" + credentials.user.uid)).then(
        (snapshot) => {
          console.log(snapshot);
          if (snapshot.exists()) {
            sessionStorage.setItem(
              "user-info",
              JSON.stringify({
                email: snapshot.val().emailin,
                password: snapshot.val().passwordin,
                firstname: snapshot.val().firstname,
                lastname: snapshot.val().lastname,
              })
            );
            sessionStorage.setItem(
              "user-creds",
              JSON.stringify(credentials.user)
            );
            window.location.href = "index.html";
          }
        }
      );
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
});

let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let msgHead = document.getElementById("msg");
let greetHead = document.getElementById("greet");
let signoutbtn = document.getElementById("signout");

let signout = () => {
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");
  window.location.href = "index.html";
};

let checked = () => {
  if (!sessionStorage.getItem("user-creds")) {
    //window.location.href = "index.html";
  } else {
    msgHead.innerText = `User widh email"${UserCreds.email}"logged in!`;
    // greetHead.innerText = `Welcome ${
    //   UserInfo.firstname + " " + UserInfo.lastname
    // }!`;
    btnPopup.remove();
    signoutbtn.style.display = "flex";
  }
};

window.addEventListener("load", checked);
signoutbtn.addEventListener("click", signout);
