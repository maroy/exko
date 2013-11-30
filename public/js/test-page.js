var ExKo = ExKo || {};

ExKo.testPage = (function() {

	var viewModel = {};

	function init() {

		$('#select-item').prop('disabled', true);

		ko.applyBindings(viewModel);

		$.getJSON('/api/items', function(data,status,jqxhr) {
			$('#select-item')
				.autocomplete({source: data})
				.prop('disabled', false)
				.animate({backgroundColor: '#0c0'}, function() {
					$('#select-item').animate({backgroundColor: '#fff'});
				});
		});
	}

	return {
		init: init
	};

})();

$(ExKo.testPage.init)