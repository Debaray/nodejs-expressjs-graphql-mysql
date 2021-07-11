module.exports = (sequelize,DataTypes) =>{
    const Tags = sequelize.define('Tags',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            // unique: true,
            // allowNull: false
        },
        // slug: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        description: DataTypes.STRING
    },{
        paranoid: true,
        timestamps: true,
        deleteAt: 'deleteAT'
    });

    Tags.associate = function(models){
        // Tag.belongsToMany(models.Product, {through: 'post_tag'});
        Tags.belongsToMany(models.Products, {through: 'ProductTags'});
    }


    return Tags;
}