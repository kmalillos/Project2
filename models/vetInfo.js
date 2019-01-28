module.exports = function(sequelize, DataTypes){
    var VetInfo = sequelize.define("VetInfo", {
        hospital: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vetName: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return VetInfo;
};