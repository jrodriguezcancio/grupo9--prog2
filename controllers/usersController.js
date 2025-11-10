const olddb = require('../localData/db');
let db = require("../database/models");
const bcrypt = require("bcryptjs");

const usersController = {
    register: function (req, res) { //solo debe aparecer si no esta loagueado con un if, se enacrga de renderizar nada mas
        if (req.session.user) {
            return res.redirect("/users/profile");
        }
        return res.render("register");
    },
    createRegister: function (req, res) { //encargado de procesar el registro y cargarlo en la db, POST
        let form = req.body;

        if (!form.email) {
            return res.render('register', { error: 'El email es obligatorio' });
        }

        if (form.contrasenia == undefined) {
            return res.render('register', { error: 'La contraseña es obligatoria' });
        }

        if (form.contrasenia.length < 3 ) {
            return res.render('register', { error: 'La contraseña debe tener por lo menos 3 o mas caracteres'});
        }

        let contra = bcrypt.hashSync(form.contrasenia, 10);

        let usuarioGuardar = {
            nombre: form.nombreUsuario,
            email: form.email,
            password: contra,
            fechaNacimiento: form.nacimiento,
            domicilio: form.domicilio,
            avatar: form.avatar
        };

        // Verificar si ya existe un usuario con ese email
        db.User.findOne({
             where: { email: usuarioGuardar.email } 
        })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.render('register', { error: 'Este email ya está registrado' });
                }

                // Crear nuevo usuario
                db.User.create(usuarioGuardar)
                .then(function(results) {
                    return res.redirect("/users/login")
                })
                .catch(function(error) {
                    return res.send(error);
                })
            })
            .catch(function (error) {
                return res.send(error);
            });
    },
    profile: function (req, res) {
        let id = req.params.id;

        if (!id && req.session.user) {
            id = req.session.user.id;
        }

        if (!id) {
            return res.redirect('/users/login');
        }

        db.User.findByPk(id, {
            include: [
                {
                    association: 'Product', 
                    include: [{ association: 'Comment' }] 
                },
                {
                    association: 'Comment' 
                }
            ]
        })
            .then(function (resultados) {
                if (!resultados) {
                    return res.redirect("/");
                }

                return res.render('profile', {
                    usuario: resultados,
                    allproducts: resultados.product
                });
            })
            .catch(function (error) {
                console.error("Error al cargar perfil:", error);
                return res.send("Error al cargar el perfil.");
            });
    },
    login: function (req, res) {
    if (req.session.user != undefined) {
            return res.redirect("/users/profile")
        } 
        return res.render("login");
    },
    processLogin: function (req, res) {
        let email = req.body.email;
        let password = req.body.contrasenia;

        if (!email) {
            return res.render('login', { error: 'Email y contraseña son obligatorios' });
        }

        if (!password) {
            return res.render('login', { error: 'Email y contraseña son obligatorios' });
        }

        db.User.findOne({ where: { email: email } })
            .then(function (user) {
                if (!user) {
                    return res.render('login', { error: 'El email no está registrado' });
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    return res.render('login', { error: 'La contraseña es incorrecta' });
                }

                req.session.user = {
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email
                };

                if (req.body.recordarme) {
                    let userCookieData = { id: user.id, email: user.email };
                    res.cookie('userLogueado', userCookieData, { maxAge: 6000000 });
                }

                return res.redirect("/users/profile/" + user.id);
            })
            .catch(function (error) {
                console.error("Error al intentar iniciar sesión:", error);
                return res.render('login', { error: 'Error interno del servidor.' });
            });
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('userLogueado');

        return res.redirect("/users/login");
    }

}

module.exports = usersController