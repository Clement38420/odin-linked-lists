import LinkedList from "./LinkedList.js";

const test = new LinkedList();
test.append(1);
test.append(2);
test.prepend(0);
test.insertAt(1.5, 2);

console.log(test.head());
console.log(test.tail());
console.log(test.contains(0));
console.log(test.find(2));
console.log(test.toString());
test.removeAt(1);
console.log(test.toString());

const list = new LinkedList({ head: test.head() });

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.pop();
console.log(list.toString());
