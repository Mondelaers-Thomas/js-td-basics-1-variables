/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true"). 

BONNE CHANCE 😀
*/
//-- Initialisation de la taille et poids de John et Mark :
const poidsJohn = prompt("Quel est le poids(en kg) de John");
const tailleJohn = prompt("Quel est la taille(en mètre) de John");
const poidsMark = prompt("Quel est le poids(en kg) de Mark");
const tailleMark = prompt("Quel est la taille(en mètre) de Mark");
//-- Calcul du BMI de John et Mark :
const bmiJohn = poidsJohn / (tailleJohn*tailleJohn);
const bmiMark = poidsMark / (tailleMark*tailleMark);
console.log(bmiJohn, bmiMark);

if(bmiMark < bmiJohn){
    console.log(`Le BMI de Mark (${bmiMark}) est inférieur à celui de John (${bmiJohn})`);
}
else if(bmiJohn === bmiMark){
        console.log(`Le BMI de Mark (${bmiMark}) est égal à celui de John (${bmiJohn})`);
} else {
    console.log(`Le BMI de Mark (${bmiMark}) est supérieur à celui de John (${bmiJohn})`);
}




