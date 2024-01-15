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

const flecheDroite = document.querySelector(".arrow_right");
const flecheGauche = document.querySelector(".arrow_left");
const point = document.querySelectorAll("input[type=button]");


flecheDroite.addEventListener("click", ()=> {
	const message = "j'ai cliqué sur le boutton droit.";
	alert(message);
})

flecheGauche.addEventListener("click", ()=> {
	const message ="j'ai cliquê sur le boutton gauche.";
	alert(message);
})



