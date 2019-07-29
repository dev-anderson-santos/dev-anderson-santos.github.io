var new_username = document.getElementById("new-username");
var new_username_password = document.getElementById("new-username-password");

var btn_criar_conta = document.getElementById("btn-criar-conta");

btn_criar_conta.addEventListener("click", function () {
    if (new_username.value == "" || new_username_password.value == "") {
        alert("Preencha os campos");
    } else {
        localStorage.setItem("user", new_username.value);
        localStorage.setItem("pw", new_username_password.value);
        window.location.href = "index.html";
    }
});
