/*
 * jquery.simple-lightbox
 * CC-BY-NC-SA Chris Jung <campino2k@gmail.com>
 */
$(function(){
	$("a[href$='png']:has(img), a[href$='jpg']:has(img), a[href$='gif']:has(img)").click(
		function(e) {
			$this = $(this);
			$pic = $( '<img />', {
				'src': $this.attr('href'),
				'load': function(){
					$(this).appendTo( xOvl ).css({
						'top': ( ( $(window).height()/2) - ($pic.height() / 2) + $(document).scrollTop()  ) + "px",
						'left': ( ( $(window).width()/2) - ($pic.width() / 2)  ) + "px"
					}).fadeIn('slow')
				},
				'click': function(){
					$(this).parent().trigger('click');
				}
			});
			var xOvl = $('<div/>', {
					'click': function(e){ 
						$(this).remove();
					},
					'id': 'simple-lightbox-overlay'
			})
			xOvl.css({
					'height': $(document).height() + 'px'
			});
			xOvl.appendTo( 'body' );
			return false; // prevent link click event
		}
	)
});
