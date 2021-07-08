module.exports = (sequelize,DataTypes) =>{
    const Tag = sequelize.define('Tag',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: DataTypes.STRING
    },{
        paranoid: true,
        timestamps: true,
        deleteAt: 'deleteAT'
    });

    Tag.associate = function(models){
        Tag.belongsToMany(models.Post, {through: 'post-tag'});
    }


    return Tag;
}