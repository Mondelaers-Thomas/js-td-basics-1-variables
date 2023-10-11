/*****************************
* 009 - Mutation de variable et conversion de type
*/

// 1. Initialiser les variables firstName à John et age à 28
const firsName = "John";
let age = 28;

// Conversion de type

// 2. Ecrire l'instruction qui affiche "John a 28 ans"
// et afficher le type de cette expression
console.log(`${firsName} a ${age}`);
console.log(typeof(`${firsName} a ${age}`));

// 3. Déclarer en une seule instruction les varaibles job et isMarried
let job, isMarried;
// puis affecter la valeur professeur à job et false à isMarried
job = "professeur";
isMarried = false;
// enfin, écrire l'instruction qui affiche
// "John est un professeur de 28 ans. Est-il marié ? false"
console.log(`John est un ${job} de 28 ans. Est-il marié ? ${isMarried}`);


// Variable mutation

// 4. Affecter la valeur 'vingt-huit' à la variable age
age = Object.toString();
age = 'vingt-huit';
console.log(age);
// et la valeur 'conducteur' à la variable job.
job = 'conducteur';
// Afficher ensuite la phrase précédente dans une boîet de dialogue
alert(`John est un ${job} de ${age}. Est-il marié ? ${isMarried}`);

// 5. Afficher une boîte de dialogue 'Quel est son nom de famille ?'
// qui permet à l'utilisateur d'entrer le nom de famille de John
// et stocker ce nom dans une variable lastName
// puis afficher "Le nom de famille de John est … (le nom entré)"
const lastName = prompt("Quel est son nom de famille ?");
console.log(`Le nom de famille de John est ${lastName}`);