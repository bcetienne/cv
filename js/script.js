$(document).ready(function() {
	var words = ["un curieux", "un passionné", "dynamique", "un gars sympa", "un savoyard"],
		i = 0;

	//Changement de la phrase d'accroche (toutes les 3.5 secondes)
	setInterval(function(){
		//Effacement du mot à l'id "word"
		$("#word").fadeOut(function() {
			//Affichage aléatoire des mots sur l'id précédemment éffacé
			$(this).html(words[i = (i + 1) % words.length]).fadeIn();
		});
		//Temps en millisecondes
	}, 3500);
});