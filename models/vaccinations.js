module.exports = function(sequelize, DataTypes){
    var Vaccinations = sequelize.define("Vaccinations", {
        vaccineName: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        vaccineDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expires: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
            freezeTableName: true,
            timestamps: false 
    });
    return Vaccinations;
};