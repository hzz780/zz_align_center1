(function($) {
	$.hzz = {
		sum: function(array) {
			var total = 0;

			$.each(array, function(index, val) {
				var value = $.trim(val);
				var value = parseFloat(value) || 0;

				total += value;
			});

			return total;
		},
		average: function(array) {
			if ($.isArray(array)) {
				return $.hzz.sum(array) / array.length;
			}
			return '';
		}
	}
})(jQuery);


(function($) {
	$.fn.swapClass = function(class1, class2) {
		return this.each(function(index, val) {
			var $element = $(this);
			if ($element.hasClass(class1)) {
				$element.removeClass(class1).addClass(class2);
			} else if ($element.hasClass(class2)) {
				$element.removeClass(class2).addClass(class1);
			}
		});
	};
})(jQuery);


/*creat a shadow*/
(function($) {
	$.fn.shadow = function(opts) {
		var options = $.extend({}, $.fn.shadow.defaults, opts);
		return this.each(function(index, el) {
			var $originalElement = $(this);
			for (var i = 0; i < options.copies; i++) {
				var offset = options.copyOffset(i);
				//alert('sdf');
				$originalElement
					.clone()
					.css({
						position: 'absolute',
						left: $originalElement.offset().left + offset.x,
						top: $originalElement.offset().top + offset.y,
						opacity: options.opacity,
						filter: 'alpha(opacity = '+ options.alpha_opacity +')',
						margin: 0,
						zIndex: -1,
						backgroundColor: options.backgroundColor,
					}).appendTo('body');
			}
		});
	};

	$.fn.shadow.defaults = {
		backgroundColor:'#000',
		copies: 5,
		opacity: 0.5,
		alpha_opacity: 50,
		copyOffset: function(index) {
			return {
				x: index,
				y: index
			};
		}
	}
})(jQuery);


$(document).ready(function() {
	var numL = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numL.length);
	console.log($.hzz.sum(numL));
	console.log($.hzz.average(numL));

	$('#zz-text').click(function(event) {
		console.log('swap');
		$(this).swapClass("zz-text-01", "zz-text-02");
	});

	// $('h3').shadow({
	// 	copies:3,
	// 	copyOffset: function(index){
	// 		return { x:index, y:index};
	// 	}
	// });

	$('.zz-div-shadow').shadow({
		backgroundColor:'#ff0000',
		copies:9,
		opacity:0.1,
		alpha_opacity:10,
		copyOffset:function(index){
			return {x: index, y: index};
		}
	});
});