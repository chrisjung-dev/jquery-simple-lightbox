/*
 * jquery.simple-lightbox
 * CC-BY-NC-SA Chris Jung <campino2k@gmail.com>
 */
$(function(){
	$("a[href$='png']:has(img), a[href$='jpg']:has(img), a[href$='gif']:has(img)").click(
		function(e) {
			$this = $(this);
			var pic = new Image();
			$(pic).attr( src, $this.attr( 'href' ) );
			$pic = $(pic);
			$pic.click( function(){
				$(this).parent().trigger('click');
			});
			var xOvl = $('<div/>', {
					'click': function(e){ $(this).remove()},
					'id': 'simple-lightbox-overlay'
			})
			xOvl.css({
					'height': $(document).height() + 'px'
			});
			xOvl.appendTo( 'body' );
			pic.appendTo( xOvl ).css({
					'top': ( ( $(window).height()/2) - (pic.height() / 2) + $(document).scrollTop()  ) + "px",
					'left': ( ( $(window).width()/2) - (pic.width() / 2)  ) + "px",
				}).fadeIn('slow').css({
					'top': ( ( $(window).height()/2) - (pic.height() / 2) + $(document).scrollTop()  ) + "px",
					'left': ( ( $(window).width()/2) - (pic.width() / 2)  ) + "px",
				})
			return false; // prevent link click event
		}
	)
});
