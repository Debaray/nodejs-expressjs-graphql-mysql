module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define('Post',{
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
    Post.associate = function(models){
        Post.belongsTo(models.User)
    };
    return Post;
}