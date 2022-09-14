console.log('Début du programme');

const age = prompt('Quel age avez-vous ?');
const genre = prompt('Etes-vous un homme ou une femme (H/F) ?');


console.log(age, "Age");
console.log(genre, "Genre");
// Ici j'ai l'age et le genre de la personne
// Je veux lui afficher le tarif de l'assurance:
// 60€ pour les hommes 60 ans et plus
// 55€ pour les femmes de 60 ans et plus
// 50€ pour les hommes de moins de 60 ans
// 45€ pour les femmes de moins de 60 ans
// Afficher "Vous êtes trop jeune si la personne à moins de 18 ans"

if (age >= 60 && genre == "Femme"){
    console.log("vous devez payer 55 €")
}else if (age >= 60 && genre == "Homme"){
    console.log("vous devez payer 60 €")
}else if (age <= 60 && genre == "Femme"){
    console.log("vous devez payer 45 €")
}else if(age <= 60 && genre == "Homme"){
    console.log("vous devez payer 50€")
}else if(age <= 18){
    console.log("vous êtes trop jeune car vous avez moins de 18 ans")
}else{
    console.log("vous avez dépasser l'age")
}

console.log(" vous avez " + age + " et vous êtes " + genre)

console.log('Fin du programme');