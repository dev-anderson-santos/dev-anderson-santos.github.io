let firebaseConfig = {
  apiKey: "AIzaSyD_MfCUlSvh6StZyXj3yYuch_efhKdp2W0",
  authDomain: "sacolao-2d.firebaseapp.com",
  databaseURL: "https://sacolao-2d.firebaseio.com",
  projectId: "sacolao-2d",
  storageBucket: "",
  messagingSenderId: "785939967024",
  appId: "1:785939967024:web:aa929f73d830e976"
};

// Your web app's Firebase configuration
export class FirebaseService {
  
  constructor() {  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Get a reference to the database service
    this._db = firebase.database();
  }

  get database() {
    return this._db;
  }

}
/*
var username = $('#username').val();
var senha = $('#password').val();

var new_fullname = $("#new-fullname").val();
var new_username = $("#new-username").val();
var new_email = $("#new-email").val();
var new_username_password = $("#new-password").val();

var btn_criar_conta = $("#btn-criar-conta");
var btn_login = $("#btn-login");

$('#form-login').submit(function (event) {
  if($('#username').val() != "" || $('#password').val() != "") {
    login();
  } else {
    alert("Preencha os dados");
  }  
  event.preventDefault();
});

$('#form-new-account').submit(function (event) {  
  
  if ($("#new-username").val() == "" || $("#new-fullname").val() == "" || $("#new-email").val() == "" || $("#new-password").val() == "") {
    alert("Preencha os campos");
  } else {
    createUser($("#new-username").val(), $("#new-fullname").val(), $("#new-email").val(), $("#new-password").val());
    window.location.href = "login.html";
    event.preventDefault();
  }
});

function createUser(username, fullname, email, senha) {
  db.ref('usuarios/' + username + '/').set({
    username: username,
    fullname: fullname,
    email: email,
    pw: senha
  });
}

function login() {
  const userObj = db.ref('usuarios');
  userObj.once("value")
    .then(function (snapshot) {

      var user = snapshot.child($('#username').val() + '/username').val();
      var pw = snapshot.child($('#username').val() + '/pw').val();    
      
      if (user != $('#username').val() || pw != $('#password').val()) {
        alert("Dados incorretos ou o usuário não existe");
      } else {
        window.location.href = "restrito/dashboard.html";
      }
      
    });
}
*/