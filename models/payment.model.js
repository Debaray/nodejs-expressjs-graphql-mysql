
module.exports = (sequelize,DataTypes) =>{
    const Payments = sequelize.define('Payments',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        status: DataTypes.STRING,
        amount: DataTypes.DECIMAL
    });

    Payments.associate = models =>{
        Payments.hasOne(models.Orders);
    }

    return Payments;
}