$(document).ready(function() {
	
	/**
	 * [description]
	 * @param  {Array}  ){		var words         [Liste des mots qui seront affichés]
	 * @param  {[integer]} 3500     [Temps en millisecondes]
	 */
	//Changement de la phrase d'accroche (toutes les 3.5 secondes)
	setInterval(function(){
		var words = ["un curieux", "un développeur", "un passionné", "un savoyard"],
		i = 0;
		//Effacement du mot à l'id "word"
		$("#word").fadeOut(function() {
			//Affichage aléatoire des mots sur l'id précédemment éffacé
			$(this).html(words[i = (i + 1) % words.length]).fadeIn();
		});
		//Temps en millisecondes
	}, 3500);


	$(".scroll").on("click", function(){
		var target = $(this).attr("href"),
			speed = 750;

			$("html", "body").animate({
				scrollTop: $(target).offset().top
			}, speed);
			return false;
	});
});