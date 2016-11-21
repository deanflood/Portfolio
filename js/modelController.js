$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});

$(function() {
		$('.contactPop').on('click', function() {
			$('#contactModal').modal('show');   
		});		
});