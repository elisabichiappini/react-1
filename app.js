const prodotti = process.env.LISTA.split(','); 
prodotti.forEach((p, index) => {
    console.log(`${index + 1}. ${p}`);
});

/*
elisachiappini@MacBook-Pro-di-Elisa-3 react-1 % LISTA="carote,pere,salame" node app.js 
1. carote
2. pere
*/