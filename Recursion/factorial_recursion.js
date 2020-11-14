const recursiveFactorial = (n) => {
  // Add a condition below
  if (n > 0){
    console.log(`Execution context: ${n}`);

    return recursiveFactorial(n - 1) * n;
  }
  if (n == 0) {
    return 1;
  }
}

const recursiveSolution = recursiveFactorial(4);
console.log(recursiveSolution);

module.exports = {
  recursiveFactorial
};
