const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_Id: {
      type: DataTypes.UUID,
      references: {
        model: 'Product',
        key: 'id'
      },
      tag_Id: {
        type: DataTypes.UUID,
        references: {
          model: 'tag',
          key: 'id'
        }
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
