const Transaction = require('../db/models/transaction-schema');

module.exports.listTransactions = async (req, res) => {
  try {
    const dbResponse = await Transaction.find({ user: req.user });
    res.status(200).json(dbResponse);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    if (!amount || !type || !date) {
      return res
        .status(400)
        .json({ message: "Type, amount and date are required"});
    }
    //! Create
    const dbResponse = await Transaction.create({
      user: req.user,
      type,
      category,
      amount,
      date,
      description,
    });
    // res.status(201).json(transaction);
    return res.status(200).json({
      message: 'Transaction added Successfully' + dbResponse,
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.listFilteredTransactions = async (req, res) => {
  try {
    const { startDate, endDate, type, category } = req.query;
    let filters = { user: req.user };

    if (startDate) {
      filters.date = { ...filters.date, $gte: new Date(startDate) };
    }
    if (endDate) {
      filters.date = { ...filters.date, $lte: new Date(endDate) };
    }
    if (type) {
      filters.type = type;
    }
    if (category) {
      if (category === "All") {
        //!  No category filter needed here
      } else if (category === "Uncategorized") {
        //! Filter for 'Uncategorized' transactions
        filters.category = "Uncategorized";
      } else {
        filters.category = category;
      }
    }
    const dbResponse = await Transaction.find(filters).sort({ date: -1 });
    res.status(200).json(dbResponse);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id).populate('department');
    return res.status(200).json(transaction);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    // Check if the creator is the one updating the data
    if (transaction && transaction.user.toString() === req.user.toString()) {
       (transaction.type = req.body.type || transaction.type),
        (transaction.category = req.body.category || transaction.category),
        (transaction.amount = req.body.amount || transaction.amount),
        (transaction.date = req.body.date || transaction.date),
        (transaction.description = req.body.description || transaction.description);
      //update
      const dbResponse = await transaction.save();
    return res.status(200).json({
      message: 'Transaction updated successfully' + dbResponse,
      error: false,
      success: true,
    });
  }
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteTransaction = async (req, res) => {
  try {
    // Find Transaction
    const transaction = await Transaction.findById(req.params.id);
    // Delete Transaction
    if (transaction && transaction.user.toString() === req.user.toString()) {
      await Transaction.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: 'Transaction deleted successfully',
      error: false,
      success: true,
    });
  }
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
