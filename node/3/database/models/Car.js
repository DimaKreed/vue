module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    // const User = require('./User')(client, DataTypes);
    //
    // Car.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    return Car;
};
