	$(document).ready(function() {
		$(window).scroll(function() {
			var distanceFromTop = $(document).scrollTop();
			if (distanceFromTop >= $('#menu-1').height())
			{
				$('#sticky').fadeIn(400).addClass('fixed');
			}
			else
			{
				$('#sticky').fadeOut(400).removeClass('fixed');
			}
		});
	});	