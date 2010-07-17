/*
 * jquery.simple-lightbox
 * CC-BY-NC-SA Chris Jung <campino2k@gmail.com>
 */

(function($) {
	$.fn.simpleLightbox = function(options) {
		options = $.extend( {}, $.fn.simpleLightbox.defaults, options );
		return this.each( function(){
			$(this).click( function() {
				$this = $(this);
				$ovl = $('<div/>', {
					'id': 'simple-lightbox-overlay',
					'click': function(e){ 
						$(this).remove();
					},
					css: ({
						'height': $(document).height() + 'px'
					})
				})
				$ovl.appendTo( 'body' );
				$pic = $( '<img />', {
					'src': $this.attr('href'),
					css: ({'display': 'none'}),
					'load': function(){
						$(this).appendTo( $ovl ).css({
							'top': ( ( $(window).height()/2) - ($pic.height() / 2) + $(document).scrollTop()  ) + "px",
							'left': ( ( $(window).width()/2) - ($pic.width() / 2)  ) + "px"
						}).fadeIn( options.fadeSpeed  )
					},
					'click': function(){
						$(this).parent().trigger('click');
					}
				});
				return false; // prevent link click event
			})
		})
	},
	$.fn.simpleLightbox.defaults = {
		fadeSpeed: 'slow'
	}
})(jQuery);
