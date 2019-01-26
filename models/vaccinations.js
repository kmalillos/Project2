module.exports = function(sequelize, DataTypes){
    var Vaccinations = sequelize.define("Vaccinations", {
        vaccines: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        vaccine_date: {
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