// Thomas Besluau for GDI
$(document).ready(function () {
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
				lineNumbers: true
			});
			button.addClass('expanded');
			button.text('test my code');
		} else {
			// validation
			eval(window.GDICM[id].getValue());
			var isGood = eval(test);
			if (isGood === true) {
				alert('Awesome, your code works!');
			} else {
				alert('Sorry, your code does not seem to work.\n\n' + hint);
			}
		}
	});
});
