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

function updateTag() {
	//console.log(index);
	//cliber la class
	const paragraph = document.querySelector(".tagline");
	//console.log(paragraph);
	//vider contenu de la div
	paragraph.innerHTML = "";
	//on recupere le tag du fichier d'image
	console.log(index);
	let tagImage = slides[index].tagLine;
	//console.log(tagImage);
	//creer balise p
	const balisePara = document.createElement("p");
	//console.log(balisePara);
	//lier balise p avec le tagline
	balisePara.innerHTML += tagImage;
	//lier balise p avec div
	paragraph.appendChild(balisePara);
}

function updateDot() {
	//cibler les bouttons
	const baliseBoutton = document.querySelectorAll(".dots input");
	//console.log(baliseBoutton);
	for (let i = 0; i < baliseBoutton.length; i++) {
		baliseBoutton[index].classList.add("dot_selected");
		if (index != i) { baliseBoutton[i].classList.remove("dot_selected"); }
		//console.log(i);
	}
}

function createDots () {
	const divDots = document.querySelector(".dots");
	console.log(divDots);
	const inputDots = document.createElement("INPUT");
	inputDots.setAttribute("type", "button");
	inputDots.classList.add("dot");
	divDots.appendChild(inputDots);
}

//fonction init met en marche les fonctions 
function init() {
	for (let i =0; i< slides.length; i++) {createDots();}
	updateTag();
	updateImage();
	updateDot();
	//on appelle les variables dans le bloc de code 
	const flecheDroite = document.querySelector(".arrow_right");
	const flecheGauche = document.querySelector(".arrow_left");
	//on met en marche les evenements
	flecheDroite.addEventListener("click", () => {
		if (index == slides.length-1) {
			index = 0;
		} else { index++ }
		updateTag();
		updateImage();
		updateDot();
	});
	flecheGauche.addEventListener("click", () => {
		if (index == 0) {
			index = slides.length-1;
		} else { index-- }
		updateTag();
		updateImage();
		updateDot();
	});
};

init();

