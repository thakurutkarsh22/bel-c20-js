// Sql Injection
/**
 * PURPOSE - to inject malicious SQL code into the database
 * EXAMPLES - SELECT * FROM users WHERE username = 'admin' AND password = '123456'
 * Key/SECRETRequired: NO
 * 
 * */



/**
 * 
 * 
 * server.get("/books", (req, res) => {
 * const {title} = req.query;
 * 
 * const sql = `SELECT* FROM books WHERE title = '${title}'`;
 * 
 * 
 * db.all(sql, (error, rows) => {
 *  // play with data here
 * });
 * 
 * 
 * 
 * })
 * 
 * 
 */

/*
    NORMAL Request 
    GET /books?title=Clean Code

    Sql query: SELECT * FROM books WHERE title = 'Clean Code'
*/


/**
 * Attacker Request - OR injection / Always true injection
 * GET /books?title=Clean Code' OR '1'='1'
 * 
 * Sql query: SELECT * FROM books WHERE title = 'Clean Code' OR '1'='1' ---> This is true
 * Sql query: SELECT * FROM books;
 * 
 * This will return all books from the database
 * 
 */

/**
 * Attacker worst Attack - Query stacking / Query chaining
 * GET /books?title='; DROP TABLE books; --
 * 
 * Sql query: SELECT * FROM books WHERE title = ''; DROP TABLE books; --
 * 
 * 
 * sql could see 2 instuctions 
 * 1. SELECT * FROM books WHERE title = ''; -> 0 books 
 * 2.  DROP TABLE books;
 * 
 * This will drop/delete the books table
 * 
 */


// What are the fixes for this attack ? 
/**
 * 1. Using ORM (Object Relational Mapping)
 * 
 * 
 * 2. sanitization and validation
 * 
 * function sanitize(input) {
 *  return input.replace(/';/g, "''");
 * }
 * 
 * 3. Parameterized queries
 * 
 * const sql = `SELECT* FROM books WHERE title = ?`;
 * 
 * const sql = `SELECT* FROM books WHERE title = '; `;
 * 
 * db.all(sql, [title], (error, rows) => {
 *  // play with data here
 * });
 * 
 * 3. Type checking and validation libraries 
 * joi, zod, express-validator, etc.
 * 
 * 
 * 
 */



// Solution  

/**
 * server.get("/books", (req, res) => {
 * const {title} = req.query;
 * const sanatizedTitle = sanitize(title);
 * 
 * const sql = `SELECT* FROM books WHERE title = '${sanatizedTitle}'`;
 * 
 * 
 * db.all(sql, (error, rows) => {
 *  // play with data here
 * });
 */
