module.exports = function(sequelize, DataTypes){
    var Activities = sequelize.define("Activities", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        address: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        review: {
            type: DataTypes.TEXT,
        }
    });
    return Activities;
};