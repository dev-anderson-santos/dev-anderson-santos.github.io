import { FirebaseService } from "../service/FirebaseService.js";

export class UsuarioDao extends FirebaseService {

    createUser(username, fullname, email, senha) {
        this.database.ref('usuarios/' + username + '/').set({
            username: username,
            fullname: fullname,
            email: email,
            pw: senha
        });
    }

}