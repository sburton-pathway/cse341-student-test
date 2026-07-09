import express from 'express';
import { getBooksHandler, getBookByIdHandler } from './controllers/books.js';
import {
	getAllAuthors,
	getAuthorById,
	createAuthor,
	updateAuthor,
	deleteAuthor,
} from './controllers/authors.js';

const router = express.Router();

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: A list of authors
 *       500:
 *         description: Unable to retrieve authors
 */
router.get('/authors', getAllAuthors);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get author by ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The author ID.
 *     responses:
 *       200:
 *         description: A single author
 *       404:
 *         description: Author not found
 *       500:
 *         description: Unable to retrieve author
 */
router.get('/authors/:id', getAuthorById);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Create an author
 *     tags:
 *       - Authors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - birthYear
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               birthYear:
 *                 type: number
 *           example:
 *             id: a4
 *             name: Example Author
 *             birthYear: 1980
 *     responses:
 *       201:
 *         description: Author created
 *       400:
 *         description: Missing required author fields or author ID already exists
 *       500:
 *         description: Unable to create author
 */
router.post('/authors', createAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Update an author by ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The author ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - birthYear
 *             properties:
 *               name:
 *                 type: string
 *               birthYear:
 *                 type: number
 *           example:
 *             name: Updated Author
 *             birthYear: 1981
 *     responses:
 *       200:
 *         description: Author updated
 *       400:
 *         description: Missing required author fields
 *       404:
 *         description: Author not found
 *       500:
 *         description: Unable to update author
 */
router.put('/authors/:id', updateAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Delete an author by ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The author ID.
 *     responses:
 *       204:
 *         description: Author deleted
 *       404:
 *         description: Author not found
 *       409:
 *         description: Author cannot be deleted because they still have books
 *       500:
 *         description: Unable to delete author
 */
router.delete('/authors/:id', deleteAuthor);

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
