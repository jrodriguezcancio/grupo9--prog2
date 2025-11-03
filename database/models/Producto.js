module.exports = function (sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
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
        updatedAT: "updatedAt",
        deletedAt: "deletedAt"

    }
}