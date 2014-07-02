(function($){
	$.fn.alignCenter = function(opts){
		var options = $.extend({}, $.fn.alignCenter.defaults , opts);
		return	this.each(function(index, el) {
			var $oElement = $(this);
			//var corrTemp = null;

			if( 0 == options.place ){
				
				// var sWidth = $(window).width();
				// var sHeight= $(window).height();
				var eWidth = $oElement.width();
				var eHeight = $oElement.height();
				// console.log('screen center sWH & eWH: ' 
				// 	+ sWidth 
				// 	+  '|' + sHeight 
				// 	+ '|' + eWidth + '|' 
				// 	+ eHeight);

				// var eLeft = (sWidth - eWidth) / 2;
				// var eTop = (sHeight - eHeight) / 2;


				if (0 == options.correction_tag) {
					// $oElement.css({
					// 	position: 'absolute',
					// 	left: eLeft + options.offset_x,
					// 	top: eTop + options.offset_y,
					// 	z_index: options.z_index
					// });
					$.fn.alignCenter.abCenter( opts, eWidth, eHeight, $(this) );
				} else if (1 == options.correction_tag) {

					// $oElement.css({
					// 	position: 'absolute',
					// 	left: eLeft + options.offset_x,
					// 	top: eTop + options.offset_y,
					// 	z_index: options.z_index
					// });
					$.fn.alignCenter.abCenter( opts, eWidth, eHeight, $(this) );
					console.log('corr_time' + options.correction_time);
					setInterval(function() {
						// $oElement.css({
						// 	position: 'absolute',
						// 	left: eLeft + options.offset_x,
						// 	top: eTop + options.offset_y,
						// 	z_index: options.z_index
						// });
						$.fn.alignCenter.abCenter( opts, eWidth, eHeight, $(this) );
						console.log('refresh');
					}, options.correction_time);
				}
				

			}else if( 1 == options.place ){
				console.log('fathter div center');
			}

			
		});
	};

	$.fn.alignCenter.abCenter = function(opts,eWidth, eHeight, $oElement){
		var options = $.extend({}, $.fn.alignCenter.defaults , opts);
		var sWidth = $(window).width();
		var sHeight = $(window).height();
		// var eWidth = elem.width();
		// var eHeight = elem.height();
		console.log('screen center sWH & eWH: ' 
			+ sWidth + '|' 
			+ sHeight + '|' 
			+ eWidth + '|' + eHeight);

		var eLeft = (sWidth - eWidth) / 2;
		var eTop = (sHeight - eHeight) / 2;


		$oElement.css({
			position: 'absolute',
			left: eLeft + options.offset_x,
			top: eTop + options.offset_y,
			z_index: options.z_index
		});
	}

	$.fn.alignCenter.reCenter = function(){
		
	}

	$.fn.alignCenter.defaults = {
		offset_x: 0,
		offset_y: 0,
		z_index:0,
		place:0,
		correction_tag:0,
		correction_time:5000
	};
})(jQuery);


$(document).ready(function() {
	$('.center-temp').alignCenter({
		// offset_x:0,
		// offset_y:0,
		correction_tag: 1,
		correction_time: 1000
	});
	
	
});