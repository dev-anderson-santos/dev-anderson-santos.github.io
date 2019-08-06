import { Usuario } from "../model/Usuario.js";
import { UsuarioDao } from "../dao/UsuarioDao.js";

class UsuarioController extends UsuarioDao {

    createUser() {
        let usuario = new Usuario();

        usuario.user = $('#new-username').val();
        usuario.fullname = $('#new-fullname').val();
        usuario.email = $('#new-email').val();
        usuario.pw = $('#new-password').val();      

        super.createUser(usuario.user, usuario.fullname, usuario.email, usuario.pw);
        window.location.href = "/projetos/estoque/login.html";
    }
}

var usuarioconstroller = new UsuarioController();

$('#form-new-account').submit(function(event) {
    usuarioconstroller.createUser();
    event.preventDefault();
}); 
    


