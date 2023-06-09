import{
    recettesDB
  }from './recettesDB.js';

import{
  getElement
}from './nav_footer.js';

function moyenneNote(i){
  var k=0;
  for(let j = 0; j < (recettesDB[i].comments).length; j++){
    k += recettesDB[i].comments[j].rating;

  }
  return k/(recettesDB[i].comments).length;
}





const params = new URLSearchParams(window.location.search);
const  fragment= params.get('recette');

console.log(fragment);



var posImg = 0;

const recipe = getElement('.recipe');



const titre =document.createElement("h3");
titre.id="titre";
titre.textContent=recettesDB[fragment-1].name;
titre.innerHTML='<span >'+ titre.textContent+'</span>';

const imgtitre = document.createElement("img");
imgtitre.src="../assets/star.svg";
titre.appendChild(imgtitre);

const spantitre = document.createElement("span");
spantitre.textContent=moyenneNote(fragment-1);
spantitre.className="jaune";
titre.appendChild(spantitre);

recipe.appendChild(titre);




const divImg = document.createElement("div");
divImg.className="recipe-img-div";
recipe.appendChild(divImg);


const divGauche = document.createElement("div");
divGauche.className="gauche";
divImg.appendChild(divGauche);

const divGaucheI = document.createElement("i");
divGaucheI.className="gg-chevron-double-left";
divGauche.appendChild(divGaucheI);

const divImgI = document.createElement("img");
divImgI.className="im recipe-img";
divImgI.id="recipe-img"+fragment;
divImgI.src="..\\assets\\recettes\\"+fragment+"\\1.png";
divImg.appendChild(divImgI);

const divDroite = document.createElement("div");
divDroite.className="droite";
divImg.appendChild(divDroite);

const divDroiteI = document.createElement("i");
divDroiteI.className="gg-chevron-double-right";
divDroite.appendChild(divDroiteI);







const divDetails = document.createElement("div");
divDetails.className="details";
recipe.appendChild(divDetails);



const divInfo = document.createElement("div");
divInfo.className="info";
divDetails.appendChild(divInfo);

const divInfoH4 = document.createElement("h4");
divInfoH4.textContent="Informations Generales";
divInfoH4.classList.add("name");
divInfo.appendChild(divInfoH4);

const divInfodiv = document.createElement("div");
divInfo.appendChild(divInfodiv);

const category = document.createElement("p");
const categoryh5 = document.createElement("h5");
categoryh5.textContent="Catégorie : ";
divInfodiv.appendChild(categoryh5);
category.textContent=recettesDB[fragment-1].category;
divInfodiv.appendChild(category);

const country = document.createElement("p");
const countryh5 = document.createElement("h5");
countryh5.textContent="Pays : ";
divInfodiv.appendChild(countryh5);
country.textContent=recettesDB[fragment-1].country;
divInfodiv.appendChild(country);

const duration = document.createElement("p");
const durationh5 = document.createElement("h5");
durationh5.textContent="Durée : ";
divInfodiv.appendChild(durationh5);
duration.textContent=recettesDB[fragment-1].duration;
divInfodiv.appendChild(duration);


const divInfoPrincipale = document.createElement("div");
divInfoPrincipale.className="info-principale";
divDetails.appendChild(divInfoPrincipale);

const Ingredients = document.createElement("div");
Ingredients.className="ingredients";
Ingredients.id="ingredients";
divInfoPrincipale.appendChild(Ingredients);


const IngredientsH4 = document.createElement("h4");
IngredientsH4.className="name";
IngredientsH4.textContent="Ingrédients";
Ingredients.appendChild(IngredientsH4);

const IngredientsOl = document.createElement("ol");
Ingredients.appendChild(IngredientsOl);


for (let i = 0; i < recettesDB[fragment-1].ingredients.length; i++) {
  const IngredientsOlLi = document.createElement("li");/* N FOIS  */
  IngredientsOlLi.textContent=recettesDB[fragment-1].ingredients[i];
  IngredientsOl.appendChild(IngredientsOlLi);
}







const Preparations = document.createElement("div");
Preparations.className="preparations";
Preparations.id="preparation";
divInfoPrincipale.appendChild(Preparations);

const PreparationsH4 = document.createElement("h4");
PreparationsH4.className="name";
PreparationsH4.textContent="Préparations";
Preparations.appendChild(PreparationsH4);

const PreparationsOl = document.createElement("ol");
Preparations.appendChild(PreparationsOl);

for (let i = 0; i < recettesDB[fragment-1].instructions.length; i++) {
  const PreparationsOlli = document.createElement("li");/* N FOIS  */
  PreparationsOlli.textContent=recettesDB[fragment-1].instructions[i];
  PreparationsOl.appendChild(PreparationsOlli);
}





const Commentaires = document.createElement("div");
Commentaires.className="commentaires";
recipe.appendChild(Commentaires);

const CommentairesH4 = document.createElement("h4");
CommentairesH4.className="name";
CommentairesH4.textContent="Commentaires";
Commentaires.appendChild(CommentairesH4);

for (let i = 0; i < (recettesDB[fragment-1].comments).length; i++) {

const CommentairesFieldset = document.createElement("fieldset");
CommentairesFieldset.id="Com"+i+1;

const CommentairesFieldsetLegend = document.createElement("legend");
CommentairesFieldsetLegend.textContent=recettesDB[fragment-1].comments[i].rating;
CommentairesFieldset.appendChild(CommentairesFieldsetLegend);

/*---------------------------------------------------------------- */
const CommentairesFieldsetLegendimg = document.createElement("img");
CommentairesFieldsetLegendimg.src="..\\assets\\star.svg";

CommentairesFieldsetLegend.appendChild(CommentairesFieldsetLegendimg);
/*---------------------------------------------------------------- */

/*---------------------------------------------------------------- */
const CommentairesFieldsetuserdiv= document.createElement("div");
CommentairesFieldsetuserdiv.className="userdiv";
CommentairesFieldset.appendChild(CommentairesFieldsetuserdiv);
/*---------------------------------------------------------------- */

const CommentairesFieldsetuser = document.createElement("h5");
CommentairesFieldsetuser.className="user";
CommentairesFieldsetuser.textContent=recettesDB[fragment-1].comments[i].user;
CommentairesFieldsetuserdiv.appendChild(CommentairesFieldsetuser);


/*---------------------------------------------------------------- */
const CommentairesFieldsetcommentairediv= document.createElement("div");
CommentairesFieldsetcommentairediv.className="commentairediv";
CommentairesFieldset.appendChild(CommentairesFieldsetcommentairediv);
/*---------------------------------------------------------------- */

const CommentairesFieldsetcommentaire = document.createElement("p");
CommentairesFieldsetcommentaire.className="commentaire";
CommentairesFieldsetcommentaire.textContent=recettesDB[fragment-1].comments[i].content;
CommentairesFieldsetcommentairediv.appendChild(CommentairesFieldsetcommentaire);

Commentaires.appendChild(CommentairesFieldset);


}














const gauche = getElement('.gauche');
const droite = getElement('.droite');
 

gauche.addEventListener('click', () => {
  posImg--;
  let j = ((posImg % 4 + 4) % 4)+1;
  var img = getElement('.recipe-img');
  img.src="..\\assets\\recettes\\"+fragment+"\\"+j+".png";
  console.log(img);
  
})

droite.addEventListener('click', () => {
  posImg++;
  let j = ((posImg % 4 + 4) % 4)+1;
  var img = getElement('.recipe-img');
  img.src="..\\assets\\recettes\\"+fragment+"\\"+j+".png";
  console.log(img);

  
})

