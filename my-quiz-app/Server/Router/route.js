import { Router } from 'express';
import { addQuestions, deleteQuestions, getQuestions, getResult, storeResult } from '../Controllers/controller.js'
import { deleteResult } from '../Controllers/controller.js';

const router = Router();


/**
 * Route to get all questions.
 *
 * @route {GET} /questions
 * @returns {Object} 200 - An object containing all the questions in the database.
 * @access public
 * @description get all the questions
 */
router.get("/question", getQuestions);


/**
 * Route to add a new question.
 * @route {POST} /question
 * @access private
 * @description add a new question
 * @returns {Object} 201 - An object containing the details of the added question.
 */

router.post("/question", addQuestions);

/**
 * Route to delete a question.
 * @route {DELETE} /question
 * @access private
 * @description delete a question
 * @returns {Object} 204 - An empty object.
 */
router.delete("/question", deleteQuestions);

/**
 * Route to get all results.
 * @route {GET} /results
 * @access public
 * @description all existing results
 * @returns {Object} 200 - An object containing all the results in the database.
 */
router.get("/result", getResult);

/**
 * Route to store a new result.
 * @route {POST} /result.
 * @access private
 * @description create the new result
 * @returns {Object} 200 - An object containing the details of the stored result.
 */
router.post("/result", storeResult);

/**
 * Route to delete a result
 * @route {DELETE} /result
 * @access private
 * @description delete all the results
 * @returns {Object} 200 - An empty object.
 */
router.delete("/result", deleteResult);

export default router;