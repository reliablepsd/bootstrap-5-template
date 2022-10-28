// import jquery - if needed
// import $ from "jquery";

// import component bootstrap!
import Modal from 'bootstrap/js/dist/modal.js'
import Carousel from 'bootstrap/js/dist/carousel.js'


document.addEventListener("DOMContentLoaded", function() {
	carouselExample()
	modalExample()
});

function carouselExample() {
	const  carousel = new Carousel('#myCarousel', {
		interval: 3000,
	})
}

function modalExample() {
	const myModal = new Modal('#myModal', {
		keyboard: false
	})
}
