
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Routine extends Model {}

Routine.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'routine',
  }
);

module.exports = Routine;
