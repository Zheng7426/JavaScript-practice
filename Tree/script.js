const TreeNode = require('/TreeNode');
const randomize = () => Math.floor(Math.random() * 20);
const tree = new TreeNode(1);

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);
console.log(tree);

tree.removeChild(15);
console.log(tree);

tree.removeChild(node);
console.log(tree);


tree.print();
tree.depthFirstTraversal();
