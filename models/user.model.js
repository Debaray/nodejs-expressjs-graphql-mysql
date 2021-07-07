module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        paranoid: true,
        timestamps: true,
        deleteAt: 'deleteAT',
    });
    User.associate = function(models){
        User.hasMany(models.Post)
    };
    return User;
}