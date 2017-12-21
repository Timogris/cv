$(document).ready(function() { // Vérifie si la page est chargée
	$('.goto').on('click', function() { // Au clic sur un élément possedant la classe .goto
		var wrap = $(this).attr('data-to'); // Le weap cible est celui dont l'id correspond à l'attribut data-to du lien
		var duration = 1000; // Durée de l'animation (en ms)
		$('html, body').animate({ scrollTop: $(wrap).offset().top }, duration); // Anime le body avec avec un scroll vers wrap à partir du haut de la page
		return false; 
	});
});
