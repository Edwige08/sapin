// ETAPE 1 : UN TRIANGLE D'ETOILES
// 1.1 Une ligne d'étoiles
const afficherEtoiles = (n) => {
    let result = "";
    for (let x = 0 ; x < n ; x++) {
        result += "*";
    }
    return result;
}
console.log(afficherEtoiles(5));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// 1.2 Carré d’étoiles
const afficherRectangle = (hauteur, largeur) => {
    let result = "";
    for (let x = 0 ; x < hauteur ; x ++) {
        result += afficherEtoiles(largeur) + '\n';
    }
    return result
}
console.log(afficherRectangle(4, 2));

// --------------------------------------------------
console.log('---------------------------------');
// --------------------------------------------------

// 1.3 Triangle d’étoiles
const afficherTriangleDroite = (n) => {
    let result = "";
    for (let x = 0 ; x < n ; x ++) {
        result += afficherEtoiles(x) + "\\\n";
    }
    return result;
}
console.log(afficherTriangleDroite(5));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// 1.4 Seconde moitié et espaces
const afficherEspace = (n) => {
    let result = "";
    for (let x = 1 ; x < n ; x++) {
        result += " ";
    }
    return result;
}
const afficherTriangleGauche = (n) => {
    let result = "";
    for (let x = 0 ; x < n ; x ++) {
        result += afficherEspace(n - x) + "/" + afficherEtoiles(x) + "\n";
    }
    return result;
}
console.log(afficherTriangleGauche(5));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// ETAPE 2 : SAPIN A ETAGES
const afficherSapin = (etages, hauteur_etage) => {}
