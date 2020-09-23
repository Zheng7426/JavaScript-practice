const Stack = require('./Stack');

const Stack = require('./Stack');


const pizzaStack = new Stack(6);

for (let n= 1; n<=6; n++) {
  pizzaStack.push(`Pizza #${n}`);
}

try {
  pizzaStack.push('Pizza #7');
} catch(e) {
  console.log(e);
}


console.log(pizzaStack.peek());


for (let i=0; i<6; i++) {
  pizzaStack.pop();
}


try {
  pizzaStack.pop();
} catch(e) {
  console.log(e);
}
