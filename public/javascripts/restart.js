(function(){

	var restart = $('#restart'),
		panel = $('#panel'),
		tip = $('#tip'),
		num = 0;

	restart.on('click', function(e){

		e.preventDefault();

		tip.html('pending ...');

		$.ajax({
			type : 'GET',
			url : '/restart'
		}).always(function(d){
			logging(d);
		})
	});

	function getStamp (){
		var date = Date().split(" "),
			time = date[4];

		return time;
	}

	function logging (d) {
		var tag = '<p>'+ getStamp() + ' - ' + d.result + ' </p>';
		panel.append(tag);
		tip.html('');
	}

}());