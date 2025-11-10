module.exports = function (sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER.UNSIGNED,
        },
        nombre: {
            type: dataTypes.STRING(255),
        },
        precio: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        deletedAt: "deletedAt"
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.hasMany(models.Comment, { 
            as: "comment",         
            foreignKey: "idProducto"    
        });
        Product.belongsTo(models.User, { 
            as: "user",
            foreignKey: "idUsuario"     
        });
    };

    return Product;
}