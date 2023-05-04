import Transaction from '../models/Schema.js';

/** 
 * @method GET /transactions
 * @access public 
 * @description get all the transactions history
*/
export const getTransactions = async(req, res, next) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({success: true, count: transactions.length, data: transactions});
    } catch (error) {
        return res.send(500).json({ success: false, error: "Server Error" });
    };
};

/**
 * @method POST /transaction
 * @access public
 * @description add a new transaction
*/
export const addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: transaction
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

/**
 * @method DELETE /transaction/:id
 * @access public
 * @description delete a transaction
 */
export const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Transaction not found'
      });
    }

    await transaction.deleteOne();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
      console.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
