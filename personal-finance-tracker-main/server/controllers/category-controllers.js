const Category = require('../db/models/category-schema');
const Transaction =require('../db/models/transaction-schema');
// DISPLAY THE USERS CATEGORIES
module.exports.getCategory = async (req, res) => {
  try {
    const dbResponse = await Category.find({ user: req.user });
    res.status(200).json(dbResponse);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

// CREATE A CATEGORY
module.exports.postCategory = async (req, res) => {
  try {
    const { name, type } = req.body;
    if (!name || !type) {
      return res
        .status(400)
        .json({ message: 'Name and type are required fields: ' });
    }
    const normalizedName = name.toLowerCase();
    //! Check if the type is income or expense
    const validTypes = ['income', 'expense'];
    if (!validTypes.includes(type.toLowerCase())) {
      return res
        .status(400)
        .json({ message: 'Invalid category type: ' + type });
    }
    //!Check if category already exists on the user
    const categoryExists = await Category.findOne({
      name: normalizedName,
      user: req.user,
    });
    if (categoryExists) {
      return res.status(400).json({
        message: `Category ${categoryExists.name} already exists in the database`,
      });
    }

    const dbResponse = await Category.create({
      name: normalizedName,
      user: req.user,
      type,
    });
    return res
      .status(200)
      .json({ message: 'Category added successfully' + dbResponse, error: false });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

// module.exports.getCategoryById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const category = await Category.findById(id);
//     return res.status(200).json(category);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

module.exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (category && category.user.toString() === req.user.toString()) {
      //!  Update transactions that have this category
      const defaultCategory = "Uncategorized";
      await Transaction.updateMany(
        { user: req.user, category: category.name },
        { $set: { category: defaultCategory } }
      );
      //! Remove category
      await Category.findByIdAndDelete(id);
      res.json({ message: "Category removed and transactions updated" });
    } else {
      res.json({ message: "Category not found or user not authorized" });
    }

    // Redundant response
    // return res.status(200).json({
    //   message: 'Category deleted successfully',
    //   error: false,
    //   success: true,
    // });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, name } = req.body;
    const normalizedName = name.toLowerCase();
    // const normalizedType = type.toLowerCase(); // No type given will be error
    const category = await Category.findById(id);
    if (!category && category.user.toString() !== req.user.toString()) {
      return res
      .status(400)
      .json({ message: 'Category not found or Invalid user or Unauthorized User'});
    }
    const oldName = category.name;
    // Update category 
    category.name = normalizedName || category.name;
    category.type = type || category.type;
    const updatedCategory = await category.save();
    // Update affected transaction
    if (oldName !== updatedCategory.name) {
      await Transaction.updateMany(
        {
          user: req.user,
          category: oldName,
        },
        { $set: { category: updatedCategory.name } }
      );
    }
    return res.status(200).json({
      message: 'Category updated successfully' + updatedCategory,
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
