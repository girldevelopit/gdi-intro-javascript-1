// Thomas Besluau for GDI
$(document).ready(function () {
	$('.gdi-handson').wrap('<div class="gdi-handson-wrapper"></div>');
	$('.gdi-handson').on('click', 'button', function () {
		var button = $(this);
		var handson = $(this).parent();
		var initial = handson.attr('data-initial') || '';
		var test = handson.attr('data-check') || '';
		var hint = handson.attr('data-hint') || '';
		var id = handson.attr('id');
		// rant
		window.GDICM = window.GDICM || {};
		if (!button.hasClass('expanded')) {
			// setup
			window.GDICM[id] = CodeMirror(handson[0], {
				value: initial,
				mode: "javascript",
				lineNumbers: true,
				indentUnit: 4
			});
			button.addClass('expanded');
			button.text('test my code');
		} else {
			// validation
			try {
				eval(window.GDICM[id].getValue());
			} catch (err) {
				alert('Watch out! It looks like your code has incorrect syntax.');
				return;
			}
			try {
				var isGood = eval(test);
				if (isGood === true) {
					alert('Awesome, your code works!');
				} else {
					alert('Sorry, your code does not seem to work.\n\nhint: ' + hint);
				}
			} catch (err) {
				alert ('Sorry, looks like one of the required variable or function is missing.');
			}
		}
	});
});
