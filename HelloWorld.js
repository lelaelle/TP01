import readline from "readline-sync";

console.log("Hello World!");

let prenom = readline.question("Entrer votre prenom:");
console.log("Hello" + prenom);
//Exercice 1
let x = 5;
let y = 8;

x = y + x;
y = x - y;
x = x - y;
console.log(x);
console.log(y);

//Exercice 2
let a = "32";
console.log(Number(a));

//Exercice 3
let b = 10;
b += 5;
b -= 3;
console.log(b);

//Exercice 4
let age = 20;
let estAdulte = age > 18 ? true : false;
console.log(estAdulte);

//Exercice 5
let chaine = readline.question("Veuillez entrer un mot:");
console.log(chaine.length);

//Exercice 6
let maChaine = "Lelaelle";

console.log(maChaine[3]);

//Exercice 7
const PI = 3.14159;
PI = 568;
  console.log(`La durée totale en secondes est : ${totalSecondes} secondes.`);
}

//Exercie 14
import readline from "readline-sync";

let prenom = readline.question("Entrez votre prenom : ");
let anneeNaissance = readline.questionInt("Entrez votre annee de naissance : ");

let motDePasse = prenom + anneeNaissance + "!";

console.log(`Votre mot de passe est : ${motDePasse}`);

console.log(PI);
//Le type d’erreur est que l’on affecte de nouveau une valeur à une constante , ce qui n’est pas du tout normal.

//Exercice 8
import readline from "readline-sync";

let PHT = readline.questionInt("Veuillez entrer le prix hors taxe:");
let TVA = readline.questionFloat("Veuillez entrer un TVA en pourcentage:");

let TTC = PHT + (1 + TVA / 100);

console.log(`Le TTC est :${TTC}DH`);

//Exercice 9
import readline from "readline-sync";

let a = readline.question("Veuillez entrer le prefixe:");
let b = readline.questionInt("Veuillez entrer un numero de base:");
let c = readline.question("Veuillez entrer le suffixe:");

console.log(a + "-" + b + "-" + c);

//Exercice 10

import readline from "readline-sync";
let i;
let mot = readline.question("Veuillez saisir un mot:");

for (i = mot.length - 1; i >= 0; i--) console.log(mot[i]);

//Exercice 12
import readline from "readline-sync";
let n = readline.questionFloat("Veuillez entrer la premier note:");
let m = readline.questionFloat("Veuillez entrer la deuxieme note:");
let f = readline.questionFloat("Veuillez entrer la troisieme note:");
let g = readline.questionInt("Veuillez entrer le premier coefficient:");
let k = readline.questionInt("Veuillez entrer le deuxieme coefficient:");
let j = readline.questionInt("Veuillez entrer le troisieme coefficient:");

let s;
let M;
s = n * g + m * k + f * j;

M = s / (g + k + j);
console.log(`La somme pondere est:${s}`);
console.log(`La moyenne pondere est:${M.toFixed(2)}`);

//Exercice 13
import readline from "readline-sync";

let heures = readline.questionInt("Entrez le nombre d'heures : ");
let minutes = readline.questionInt("Entrez le nombre de minutes : ");
let secondes = readline.questionInt("Entrez le nombre de secondes : ");

if (heures < 0 || minutes < 0 || secondes < 0) {
  console.log("Les valeurs doivent être positives !");
} else {
  let totalSecondes = heures * 3600 + minutes * 60 + secondes;
