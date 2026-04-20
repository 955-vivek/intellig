const espree = require('espree');

/**
 * Parses JavaScript code and returns the Abstract Syntax Tree (AST).
 *
 * @param {string} code - The JavaScript code to parse.
 * @returns {Object} - The parsed AST.
 */
function parseCode(code) {
    try {
        return espree.parse(code, {
            ecmaVersion: 'latest',
            sourceType: 'script',
            loc: true,
            range: true,
            tokens: true
        });
    } catch (error) {
        throw error; // Rethrow the error for handling in the caller
    }
}
function tokenizeCode(code) {
    // Return only the tokens array
    const ast = espree.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tokens: true
    });
    return ast.tokens;
}

function getParseTree(code) {
    // Return the full AST for demonstration
    return espree.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        loc: true,
        range: true,
        tokens: true
    });
}

module.exports = { parseCode, tokenizeCode, getParseTree };