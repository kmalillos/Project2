module.exports = function(sequelize, DataTypes){
    var Vaccinations = sequelize.define("Vaccinations", {
        vaccines: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        vaccineDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        expires: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Vaccinations;
};