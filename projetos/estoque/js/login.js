var user = localStorage.getItem("user");
var pw = localStorage.getItem("pw");

var username = document.getElementById("username");
var password = document.getElementById("password");

var btn_login = document.getElementById("btn-login");

btn_login.addEventListener("click", function () {
    if (user != username.value || pw != password.value) {
        alert("Dados incorretos ou o usuário não existe");
    } else {
        window.location.href = "dashboard.html";
    }
});