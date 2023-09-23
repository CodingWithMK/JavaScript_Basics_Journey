// String primitive
const message = '   This is my\n \'first message!   ';

console.log(typeof message);
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.startsWith('This'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.replace('my', 'your'));
console.log(message.toUpperCase(message));
console.log(message.trim);
console.log(message.trimStart);
console.log(message.trimEnd);
console.log(message.split(' '));




// String object
const another = new String('Hi!');

console.log(typeof another);