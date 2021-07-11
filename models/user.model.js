module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define('Users',{
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
    Users.associate = function(models){
        Users.hasMany(models.Posts)
    };
    return Users;
}