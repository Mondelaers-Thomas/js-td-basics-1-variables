/*****************************
* 10 - Opérateurs de base
*/

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2019, 28 et 33
let now, ageJohn, ageMark, yearJohn, yearMark;
[now,  ageJohn, ageMark] = [2019, 28, 33];

// Opérateurs mathématiques

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John 
// et "Mark est né en …"
yearJohn = now - 28;
yearMark = now - 33;
console.log(`John est né en ${yearJohn}`);
console.log(`John est né en ${yearMark}`);


// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année
const currentDate = Date();
let currentYear = currentDate.getFullYear();
parseInt(currentYear);
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);


// Opérateurs logiques

// 4. …



// Opérateur typeof

