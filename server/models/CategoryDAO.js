require('../utils/MongooseUtil');
const Models = require('./Models');

const CategoryDAO = {
  async selectAll() {
    return await Models.Category.find({});
  },

  async insert(category) {
    const mongoose = require('mongoose');
    category._id = new mongoose.Types.ObjectId();
    return await Models.Category.create(category);
  },

  async update(category) {
    return await Models.Category.findByIdAndUpdate(
      category._id,
      { name: category.name },
      { new: true }
    );
  },

  async selectByID(_id) {
    const category = await Models.Category.findById(_id).exec();
    return category;
  },

  async delete(_id) {
    return await Models.Category.findByIdAndDelete(_id);
  }
};

module.exports = CategoryDAO;
