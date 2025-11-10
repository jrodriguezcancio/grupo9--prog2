module.exports = function (sequelize, dataTypes) {
    let alias = "Comment"; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER.UNSIGNED,
        },
        idProducto: {
            type: dataTypes.INTEGER.UNSIGNED,
        },
        comentario: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "comentarios",
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        deletedAt: "deletedAt"
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {

        Comment.belongsTo(models.Product, { 
            as: "product",          
            foreignKey: "idProducto"
        });
        Comment.belongsTo(models.User, { 
            as: "user",              
            foreignKey: "idUsuario"
        });
    };

    return Comment;
}