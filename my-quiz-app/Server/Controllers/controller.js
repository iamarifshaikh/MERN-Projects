import Questions from '../Models/QuestionSchema.js';
import Results from '../Models/ResultSchema.js';
import questions, { answers } from '../Data/data.js';

/**
 * Get all questions
 * @route {GET} /questions
 * @returns {Object} All questions
 * @throws {Error} If an error occurs while getting the questions
 */
export const getQuestions = async (req, res) => {
    try {
        const question = await Questions.find();
        res.json(question);
    } catch (error) {
        res.json({ error });
    }
};

/**
 * Add a new question
 * @route {POST} /questions
 * @returns {Object} The added question
 * @throws {Error} If an error occurs while adding the question
 */
export const addQuestions = async (req, res) => {
  try {
    await Questions.insertMany({ questions, answers });
    res.json({ message: "Data Saved Successfully!" });
  } catch (error) {
    res.json({ error });
  }
};

/**
 * Delete a question by ID
 * @route {DELETE} /questions/:id
 * @returns {Object} A success message
 * @throws {Error} If an error occurs while deleting the question
 */
export const deleteQuestions = async (req, res) => {
    try {
        await Questions.deleteMany();
        res.json({message:"All Questions are deleted"});
    } catch (error) {
        res.json({ error });
    }
}

/**
 * Get results
 * @route {GET} /results
 * @returns {Object} All results
 * @throws {Error} If an error occurs while getting the results
 */
export const getResult = async (req, res) => {
    try {
        const result = await Results.find();
        res.json(result);
    } catch (error) {
        res.json({ error });
    }
};

/**
 * Store a result
 * @route {POST} /results
 * @returns {Object} The stored result
 * @throws {Error} If an error occurs while storing the result
 */
export const storeResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username && !result) throw new Error("Data not provided");

        const newResult = await Results.create({ username, result, attempts, points, achieved });
        res.json({ message: "Result Saved Successfully!", result: newResult });
    } catch (error) {
        res.json({ error: error.message });
    }
};

/**
 * Delete a result by ID
 * @route {DELETE} /results/:id
 * @returns {Object} A success message
 * @throws {Error} If an error occurs while deleting the result
 */
export const deleteResult = async (req, res) => {
    try {
        await Results.deleteMany();
        res.json({ message: "Result Deleted Successfully!" });
    } catch (error) {
        res.json({ error });
    }
}