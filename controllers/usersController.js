const olddb = require('../localData/db');
let db = require("../database/models");

const usersController = {
    register: function(req, res){ //solo debe aparecer si no esta loagueado con un if, se enacrga de renderizar nada mas
 if (req.session.userLogged) {
            return res.redirect("/users/profile");
        }
        res.render("register");
    },
    createRegister: function(req, res){ //encargado de procesar el registro y cargarlo en la db, POST
        let nombre = req.body.nombre;
        let email = req.body.email;
        let password = req.body.password;
        let fechaNacimiento = req.body.fechaNacimiento;


        if ( password.length < 3) {
            return res.send("La contraseña debe tener al menos 3 caracteres");
        }


        const passwordEncriptada = bcrypt.hashSync(password, 10);

        // Verificar si ya existe un usuario con ese email
        db.User.findOne({ where: { email: email } })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.send("Ya existe un usuario con ese email");
                }

                // Crear nuevo usuario
                return db.User.create({
                    nombre: nombre,
                    email: email,
                    password: passwordEncriptada,
                    fechaNacimiento: fechaNacimiento,
                });
            })
            .then(function (nuevoUsuario) {
                if (nuevoUsuario) {
                    return res.redirect("/users/login");
                }
            })
            .catch(function (error) {
                return res.send(error);
            });
    },
    profile: function (req, res) { // 
        const usuario = db.usuario;
        res.render('profile');
    },
    login : function (req, res) { //solo debe aparecer si no esta loagueado con un if, se enacrga de renderizar nada mas
        return res.render("login");
    },
    processLogin: function (req, res) {
        res.render("/") //falta todo session y cookies para acceder a la db y ver si el form coincide con la db, POST
    },
    logout: function (req, res) { //todavia no va a funcionar , hay que procesar el login para hacer un logout
        req.session.destroy();
        res.clearCookie('userData');

        return res.redirect("/");
    }

}

module.exports = usersController