module.exports = (sequelize, DataTypes) =>{
    const Posts = sequelize.define('Posts',{
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
        // slug:{
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        content: {
            type: DataTypes.STRING,
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
    Posts.associate = function(models){
        Posts.belongsTo(models.Users);
        // Post.belongsToMany(models.Tag, {through: 'post_tag'});
    };
    return Posts;
}