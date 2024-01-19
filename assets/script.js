"use strict";
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const img = document.querySelectorAll(".banner-img");
let index = 0;

function updateImage() {
	//etape 1 selectionner balise img 
	const img = document.querySelector(".banner-img");
	//etape 2 recuperer le nom du fichier de la premiere image des sliders
	const nomImage = slides[index].image;
	//etape 3 construire le chemin src
	const cheminSrc = "./assets/images/slideshow/" + nomImage;
	//etape 4 mettre a jour le src de la balise image
	img.src = cheminSrc;
}

//fonction init met en marche javascript 
function init() {
	//on appelle les variables dans le bloc de code 
	const flecheDroite = document.querySelector(".arrow_right");
	const flecheGauche = document.querySelector(".arrow_left");
	//on met en marche les evenements
	flecheDroite.addEventListener("click", () => {
		updateImage();
		index++;
		if (index == 4){
			index=0;
		}
	});
	flecheGauche.addEventListener("click", ()=> {
		updateImage();
		index--;
		if(index == 0){
			index =4;
		}
	})
};

	init();
