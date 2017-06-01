/*Mostrar noticias*/
$(document).ready(function() {
	$('.mostrar1').hide();
	$('.mostrar2').hide();
	var win = $(window);
	// Funcion scroll
	win.scroll(function() {
		// cuando llegue al final del documento
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('.mostrar1').slideDown( "slow", function() {
				if ($(document).height() - win.height() == win.scrollTop()) {
					$('.mostrar2').slideDown( "slow", function() {
						
					});
				}
			});
		}
	});

});

