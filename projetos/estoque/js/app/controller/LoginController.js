import { UsuarioDao } from "../dao/UsuarioDao.js";
import { Usuario } from "../model/Usuario.js";

class LoginController extends UsuarioDao{

    signin() {
        let usuario = new Usuario();
        usuario.user = $('#username').val();
        usuario.pw = $('#password').val();

        let userObj = this.database.ref('usuarios');
        userObj.once("value")
               .then(function (snapshot) {    
                    var user = snapshot.child(usuario.user + '/username').val();
                    var pw = snapshot.child(usuario.user + '/pw').val();   
                    
                    if (user != $('#username').val() || pw != $('#password').val()) {
                        alert("Dados incorretos ou o usuário não existe");
                    } else {
                        window.location.href = "restrito/dashboard.html";
                    }
                });
        
    }

}

// if (user != username || pw != $('#password').val()) {
//     alert("Dados incorretos ou o usuário não existe");
// } else {
//     var login = new LoginController();
//     login.signin();
//     window.location.href = "restrito/dashboard.html";
// }

$('#form-login').submit(function (event) {
    if($('#username').val() != "" || $('#password').val() != "") {
        var login = new LoginController();
        
            //firebase.initializeApp({});
            login.signin();
        
        
    } else {
        alert("Preencha os dados");
    }  
    event.preventDefault();
});