module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define('Product',{
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

    return Product;
}