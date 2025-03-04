import readline from "readline-sync";

console.log("Hello World!");

let prenom = readline.question("Entrer votre prenom:");
console.log("Hello" + prenom);
Exercice 1
let x = 5;
let y = 8;

x = y + x;
y = x - y;
x = x - y;
console.log(x);
console.log(y);

Exercice 2
let x = "32";
console.log(Number(x));

Exercice 3
let x = 10;
x += 5;
x -= 3;
console.log(x);


Exercice 4
let age = 20;
let estAdulte = age > 18 ? true : false;
console.log(estAdulte);

Exercice 6
let maChaine = "Lelaelle";

console.log(maChaine[3]);

Exercice 7
const PI = 3.14159;
PI = 568;
console.log(PI);

Exercice 5
let mot = readline.question("Veuillez entrer un mot:");
console.log(mot.length);

Exercice 10

import readline from "readline-sync";
let i;
let mot = readline.question("Veuillez saisir un mot:");

for (i = mot.length - 1; i >= 0; i--) console.log(mot[i]);

Exercice 11
import readline from "readline-sync";
let x = readline.question("Veuillez entrer un prefixe de facture :");
let y = readline.questionInt("Veuillez entrer un numero de base :");
let z = readline.question("Veuillez entrer un suffixe :");

console.log(x + "-" + y + "-" + z);
