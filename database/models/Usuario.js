module.exports = function (sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
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

    }
}