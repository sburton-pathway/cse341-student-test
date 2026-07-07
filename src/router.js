import express from 'express';
import { getBooksHandler, getBookByIdHandler } from './controllers/books.js';

const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve a list of books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: A list of books.
 */
router.get('/books', getBooksHandler);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retrieve a single book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID.
 *     responses:
 *       200:
 *         description: A single book.
 *       404:
 *         description: Book not found.
 */
router.get('/books/:id', getBookByIdHandler);

export default router;