
module.exports = (sequelize,DataTypes) =>{
    const Customers = sequelize.define('Customers',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
    })

    Customers.associate = models =>{
        Customers.hasMany(models.Orders);
    }

    return Customers;
}