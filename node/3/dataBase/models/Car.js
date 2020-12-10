module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            }
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    const User = require('./User')(client, DataTypes);

    // User.hasMany(Car, {
    //     foreignKey: 'user_id',
    //     as: 'car',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // });
    Car.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    return Car;
};
