import express from "express";
import * as transactions from "../controllers/transactions.js";

const router = express.Router();

router.get("/transactions", transactions.getTransactions);

router.post("/transaction", transactions.addTransaction);

router.delete('/transaction/:id', transactions.deleteTransaction);

export default router;