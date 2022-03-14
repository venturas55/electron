const fs = require('fs');
fichero = fs.readFileSync("./componentes.json");
componentes = JSON.parse(fichero);
console.log(componentes)