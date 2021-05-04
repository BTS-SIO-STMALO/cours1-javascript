// Il existe en javascript des variables. Pour les déclarer on a plusieurs options. 

// La différence fondamentale entre let et var est la question de la portée de mes variables. Avec let la portée est circonscrite à la fonction ou au bloc d'instruction dans laquelle la variable a été déclarée avec let. La variable est ensuite "effacée" de la mémoire et n'existe plus. Tandis que la variable déclarée avec l'attribut var reste disponible et existante.

// option 1, utiliser l'attribut var. 
var bonjour = "bonjour";
console.log(bonjour);
console.log(typeof(bonjour));

for(var i=1; i< 5; i++){
    var chat = "chat";
    console.log(chat+i);
}
console.log(chat);

// option 2, utiliser l'attribut let 
let bonsoir = "bonsoir";
console.log(bonsoir);


for(let index=1; index< 5; index++){
    let chien = "chien";
    console.log(chien+index);
}

//console.log(chien);

// option 3, utiliser l'attribut const. L'attribut const permet de définir une constante. Une Constante est une variable dont la valeur n'est pas modifiée/modifiable. Cette variable ne peut pas être réassignée. Si j'essaye j'ai une erreur en console.
const aurevoir = "aurevoir";
console.log(aurevoir);
//aurevoir = 2;
//console.log(aurevoir);

// Explication de ce qu'est le DOM
// Le DOM (Document Objet Model) est une représentation/une interface (de programmation) de mon document html sous forme d'objets dont je vais pouvoir exploiter via JS les propriétés et les méthodes. Plus d'informations sur le DOM ici : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction et ici https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model
let salutation = document.getElementById('b1');
let ajouter = document.getElementById('b2');

// Je rajoute un événement à mon élément du DOM ciblé. Etant donné que Javascript est un langage de programmation tourné vers la gestion des interactions entre l'utilisateur et le site web et le navigateur, je vais avoir besoin d'écouter ce que fait mon utilisateur. Par exemple : scroller, cliquer, soumettre un formulaire, presser une touche de son clavier, tout ça ce sont des évènements sur lesquels le développeur peut associer du code qui va s'exécuter si l'événement survient. 
//https://developer.mozilla.org/fr/docs/Web/Events
salutation.addEventListener('click', alerte);
ajouter.addEventListener('click', ajout);

/*
addEventListener crée un écouteur d'événement. Un écouteur d'événement c'est une fonction qui va permettre d'indiquer au navigateur comment réagir à des événements d'un certain type (type que l'on spécifie).

element.addEventListener(eventType, handler)

- element c'est une référence vers un noeud du DOM
- eventType est une chaîne de caractère décrivant l'événement.
- handler c'est une fonction qui réalise l'action.
*/

// Ceci est une fonction anonyme
var creationAnonyme = function(){
    console.log('Salut je suis une fonction anonyme');
}

// Ceci est la même fonction que celle au dessus, sauf que je l'ai déclaré sensiblement différemment je l'ai nommée.
function creationNommée(){
    console.log('Salut je suis une fonction nommée');
}

creationNommée();
creationAnonyme ;
console.log(creationAnonyme);


function alerte() {
    alert("Bonjour");
}

function ajout() {
    let para = document.createElement('p');
    para.textContent = 'Je suis le paragraphe ajouté';
    document.body.appendChild(para);
}

console.log(typeof salutation);

let age = 36;
console.log(age);
console.log(typeof age);

// La concaténation en javascript
let texteUn = "JS c'est fantastique";
let phrase = texteUn + " et j\aime les sushis";
console.log(phrase);

// les tableaux en javascript 
// Ils fonctionnent sur le même principe qu'en php mais en JS les tableaux associatifs n'existent pas. 
var monTableau = [1, 3, "Salut", false];
console.log(monTableau);
console.log(monTableau[3]);

// Les objets sont très utilisés en JS
let person = {
    age: 35,
    prenom: "Mathilde",
    nom: "Renversade",
    taille: 160,
    ville: 35400,
}

console.log(person);

console.log(person.nom);

/* Il existe évidément en JS les opérateurs arithmétiques
+ Addition
- Soustraction
* Multiplication
/ Division
% Le Modulo (reste d'une division euclidienne) 
** Exponentielle (élévation à la puissance d'un nombre par un autre)
*/

/* Les opérateurs d'affectation
+= Additionne puis affecte le résultat
-= Soustrait puis affecte le résultat
*= Mutiplie puis affecte le résultat
/= Divise puis affecte le résultat
%= Calcule le module puis affecte le résultat
*/

/*
Les littéraux de gabarit
*/
let varUn = 50 ;
let varDeux = 25;

/*
prompt('ma variable varUn contient ' + varUn +
'\n ma varialbe varDeux contient ' + varDeux + 
'\n la somme de mes deux variables est égale à ' + (varUn + varDeux));
 */

// Les littéraux de gabarit vont me permettre de placer du texte et des variables ensemble sans avoir besoin d'utiliser l'opérateur de concaténation. Les variables sont directement interprétées, c'est à dire remplacer par leur valeur. 
// Pour utiliser les littéraux de gabarit, je commence et termine ma chaîne de caractère par le signe d'accent grave

prompt(`ma variable varUn contient ${varUn}
    ma variable varDeux contient ${varDeux}
    la somme de mes deux variables est égale à ${varUn + varDeux}
`);





