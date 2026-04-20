const espree = require('espree');

const { parseWithManualParser } = require('./manualParser.js');

/**
 * Parses JavaScript code and returns the Abstract Syntax Tree (AST).
 * First attempts to use a custom Manual Parser. If unsupported syntax
 * is detected, it falls back to the robust Espree compiler.
 *
 * @param {string} code - The JavaScript code to parse.
 * @returns {Object} - The parsed AST and parserType.
 */
function parseCode(code) {
    try {
        const ast = parseWithManualParser(code);
        console.log("Parsed using Manual Parser");
        // Maintain AST shape compatibility and append active parser type!
        ast.parserType = "manual";
        return ast;
    } catch (manualError) {
        console.warn(`Manual parser failed (${manualError.message}), switching to Espree`);
        try {
            const ast = espree.parse(code, {
                ecmaVersion: 'latest',
                sourceType: 'script',
                loc: true,
                range: true,
                tokens: true
            });
            ast.parserType = "espree";
            return ast;
        } catch (espreeError) {
            throw espreeError; // Fatal Syntax error in file overall
        }
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