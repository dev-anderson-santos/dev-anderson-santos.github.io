// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_MfCUlSvh6StZyXj3yYuch_efhKdp2W0",
  authDomain: "sacolao-2d.firebaseapp.com",
  databaseURL: "https://sacolao-2d.firebaseio.com",
  projectId: "sacolao-2d",
  storageBucket: "",
  messagingSenderId: "785939967024",
  appId: "1:785939967024:web:aa929f73d830e976"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
const db = firebase.database();

var username = $('#username').val();
var senha = $('#password').val();
var new_username = $("#new-username").val();
var new_username_password = $("#new-username-password").val();

var btn_criar_conta = $("#btn-criar-conta");
var btn_login = $("#btn-login");

btn_login.click(function () {
  login();
});

btn_criar_conta.click(function () {

  /*if (new_username == "" || new_username_password == "") {
    alert("Preencha os campos");
  } else {*/

  createUser($("#new-username").val(), $("#new-username-password").val());
  window.location.href = "index.html";
  //}
});

function createUser(user, senha) {
  db.ref(user + '/').set({
    email: user,
    pw: senha
  });
}

function login() {
  const userObj = db.ref($('#username').val());
  userObj.once("value")
    .then(function (snapshot) {

      var user = snapshot.child('email').val();
      var pw = snapshot.child('pw').val();

      if (user != $('#username').val() || pw != $('#password').val()) {
        alert("Dados incorretos ou o usuário não existe");
      } else {
        window.location.href = "dashboard.html";
      }

    });
}