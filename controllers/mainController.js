let db = require("../database/models");

const mainController = {
    index: function(req, res) {
            db.Product.findAll({include: [{ association: "Comment" }] 
            }) 
                .then(function(resultados){
                    return res.render("index" ,  {Producto: resultados});
                })
                .catch(function(error){
                    return res.send(error);
                })
            
        }};
module.exports = mainController;