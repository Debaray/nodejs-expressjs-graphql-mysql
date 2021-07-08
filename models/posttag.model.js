module.exports = (sequelize, DataTypes) =>{
    const PostTag = sequelize.define('PostTag',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },{
        paranoid: true,
        timestamps: true,
        deleteAt: 'deleteAT',
    }); 
    
    return PostTag;
}