module.exports = function (sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING(255),
        },
        email: {
            type: dataTypes.STRING, 
        },
        password: {
            type: dataTypes.STRING,
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        domicilio: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        createdAt: "createdAt",
        updatedAT: "updatedAt",
        deletedAt: "deletedAt"
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        
        User.hasMany(models.Product, {
            as: "product",           
            foreignKey: "idUsuario"    
        });
        User.hasMany(models.Comment, { 
            as: "Comment",       
            foreignKey: "idUsuario"     
        });
    };

    return User;
}