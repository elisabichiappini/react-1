// const argomenti = process.argv.slice(2);
// argomenti.forEach(element => {
//     console.log(element)
// });

// const prodotti = process.argv.slice(2);
// console.log('La mia lista della spesa:\n')
// prodotti.forEach((element, index) => {
//     console.log(`${index+1} - ${element}`);
// });

/*node app.js frutta verdura carote
La mia lista della spesa:
1 - frutta
2 - verdura
3 - carote
elisachiappini@MacBook-Pro-di-Elisa-3 react-1 % 
*/


const apiKey = process.env.apiKey;
console.log(`La tua api key è: ${apiKey}`);

/*
apiKey="ahskd3lsxdk" node app.js
La tua api key è: ahskd3lsxdk*/