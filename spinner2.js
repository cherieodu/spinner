const sentence = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let print = (letter, i) => {setTimeout(() => {process.stdout.write(letter);}, 250 * i);};
for (let i = 0; i < sentence.length; i++) {print(sentence[i], i);}
setTimeout(() => {console.log('');}, 2500);