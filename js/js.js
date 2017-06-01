/*Mostrar noticias*/
$(document).ready(function() {
	$('.mostrar1').hide();
	$('.mostrar2').hide();
	$('#boton2').hide();
	$('#boton1').click(function() {
		$('.mostrar1').slideDown( "slow", function() {
			$('#boton1').hide();
			$('#boton2').show();
		});
	});

	$('#boton2').click(function() {
		$('.mostrar2').slideDown( "slow", function() {
			$('#boton2').hide();
		});
	});
});
