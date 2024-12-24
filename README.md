# Unhandled Database Query Error in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: neglecting to handle potential errors during database queries within route handlers.

The `bug.js` file shows the problematic code, which silently fails if a database query encounters an error.  The `bugSolution.js` file presents the corrected code with appropriate error handling.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the buggy code (`bug.js`) and simulate a database error (e.g., by intentionally causing a query failure).
4. Observe the silent failure or application crash.
5. Run the corrected code (`bugSolution.js`) and simulate the same error.
6. Note the proper error handling and response.