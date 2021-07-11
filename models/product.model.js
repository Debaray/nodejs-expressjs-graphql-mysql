module.exports = (sequelize,DataTypes) =>{
    const Products = sequelize.define('Products',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
    });

    Products.associate = models =>{
        Products.belongsToMany(models.Tags, {through: 'ProductTags'});
    }
    return Products;
}