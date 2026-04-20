const { extractFunctions } = require('./extractors/functionExtractor.js');
const { generateJSDoc } = require('./generators/JsDocGenerator.js');

const code = `
function sum(a, b) {
  let total = a + b;
  return total;
}

function isPrime(n) {
  if (n <= 1) return false;
  for(let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
`;

console.log("Extracting...");
const funcs = extractFunctions(code);
console.log(JSON.stringify(funcs.map(f => ({
  name: f.name,
  params: f.params,
  returns: f.returns
})), null, 2));

console.log("\nGenerating JSDoc:");
funcs.forEach(f => console.log(generateJSDoc(f)));
