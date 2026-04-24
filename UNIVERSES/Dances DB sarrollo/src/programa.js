const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--- ACTIVIDAD: ENTRADA Y SALIDA DE DATOS ---");

rl.question('Nombre: ', (nombreInput) => {
    rl.question('Apellido: ', (apellidoInput) => {
        rl.question('Edad: ', (edadInput) => {
            rl.question('Altura (ej: 1.75): ', (alturaInput) => {

                // 👉🏽 ASIGNACIÓN DE TIPOS DE DATOS
                let nombre = String(nombreInput);      
                let apellido = String(apellidoInput);  
                let edad = Number(edadInput);          
                let altura = Number(alturaInput);      

                // SALIDA DE DATOS
                console.log("\n-------------------------------------------");
                console.log(`Hola, mi nombre es ${nombre} ${apellido}.`);
                console.log(`Tengo ${edad} años y mi altura es de ${altura} metros.`);
                console.log("-------------------------------------------\n");

                rl.close();
            });
        });
    });
});
