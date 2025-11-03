module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";

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
        idProducto: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true
        },
        comentario: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "comentarios",
        timestamps: true,
        createdAt: "createdAt",
        updatedAT: "updatedAt",
        deletedAt: "deletedAt"

    }
}