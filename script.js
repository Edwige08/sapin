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

// 1.5 Assemblage et décorations
const afficherPointeSapin = (hauteur) => {
    let result = afficherEspace(hauteur + 1) + "+";
    for (let x = 0 ; x < hauteur ; x++) {
        result += "\n" + afficherEspace(hauteur - x) + "/" + afficherEtoiles(x) + "|" + afficherEtoiles(x) + "\\";
    }
    return result;
}
console.log(afficherPointeSapin(4));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// ETAPE 2 : SAPIN A ETAGES
console.log(afficherPointeSapin(1))
console.log(afficherPointeSapin(2))
console.log(afficherPointeSapin(3))

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// 2.1 Afficher un étage
const afficherEtage1 = (hauteur, pointe_offset) => {
    let result = "";
    for (let x = pointe_offset ; x < pointe_offset + hauteur ; x++) {
        result += afficherEspace(pointe_offset + hauteur - x) + "/" + afficherEtoiles(x) + "|" + afficherEtoiles(x) + "\\\n";
    }
    return result;
}
console.log(afficherEtage1(3, 0));
console.log(afficherEtage1(3, 1));
console.log(afficherEtage1(3, 2));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// 2.2 Aligner les étages
const afficherEtage = (hauteur, pointe_offset, espacement) => {
    let result = "";
    for (let x = pointe_offset ; x < pointe_offset + hauteur ; x++) {
        result += afficherEspace(pointe_offset + hauteur - x + espacement) + "/" + afficherEtoiles(x) + "|" + afficherEtoiles(x) + "\\\n";
    }
    return result;
}
console.log(afficherEtage(3, 0, 3));
console.log(afficherEtage(3, 1, 2));
console.log(afficherEtage(3, 2, 1));
console.log(afficherEtage(3, 3, 0));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// 2.3 Factorisation
const afficherSapin = (etages, hauteur_etage) => {
    let result = afficherEspace(hauteur_etage + 1 + etages) + "+";
    for (let x = 0 ; x < etages ; x ++) {
        for (let y = 0 + x ; y < hauteur_etage + x ; y ++) {
            result += "\n" + afficherEspace(hauteur_etage + etages - y) + "/" + afficherEtoiles(y) + "|" + afficherEtoiles(y) + "\\";
        }
    }
    return result;
}
console.log(afficherSapin(3, 3));

// --------------------------------------------------
console.log('---------------------------------')
// --------------------------------------------------

// ETAPE 3 : SAPIN DE SALON
const afficherSapinAvecTronc = (etages, hauteur_etage) => {
    let result = afficherEspace(hauteur_etage + 1 + etages) + "+";
    for (let x = 0 ; x < etages ; x ++) {
        for (let y = 0 + x ; y < hauteur_etage + x ; y ++) {
            result += "\n" + afficherEspace(hauteur_etage + etages - y) + "/" + afficherEtoiles(y) + "|" + afficherEtoiles(y) + "\\";
        }
    }
    result += "\n" + afficherEspace(hauteur_etage + etages) + "###";
    result += "\n" + afficherEspace(hauteur_etage + etages) + "###";
    result += "\n" + afficherEspace(hauteur_etage + etages) + "###";
    return result;
}
console.log(afficherSapinAvecTronc(3, 3));
