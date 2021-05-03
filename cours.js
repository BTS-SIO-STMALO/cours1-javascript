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
// Le DOM (Document Objet Model) est une représentation/une interface de mon document html sous forme d'objets dont je vais pouvoir exploiter via JS les propriétés et les méthodes. Plus d'informations sur le DOM ici : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction et ici https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model
let salutation = document.getElementById('b1');
let ajouter = document.getElementById('b2');

// Je rajoute un événement à mon élément du DOM ciblé. Etant donné que Javascript est un langage de programmation tourné vers la gestion des interactions entre l'utilisateur et le site web et le navigateur, je vais avoir besoin d'écouter ce que fait mon utilisateur. Par exemple : scroller, cliquer, soumettre un formulaire, presser une touche de son clavier, tout ça ce sont des évènements sur lesquels le développeur peut associer du code qui va s'exécuter si l'événement survient. 
//https://developer.mozilla.org/fr/docs/Web/Events
salutation.addEventListener('click', alerte);
ajouter.addEventListener('click', ajout);

function alerte() {
    alert("Bonjour");
}

function ajout() {
    let para = document.createElement('p');
    para.textContent = 'Je suis le paragraphe ajouté';
    document.body.appendChild(para);
}

console.log(typeof salutation);



