(function(){

	var restart = $('#restart'),
        stop = $('#stop'),
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
			logging('restart', d);
		})
	});

    stop.on('click', function(e){
        e.preventDefault();

        tip.html('pending ...');

        $.ajax({
            type : 'GET',
            url : '/stop'
        }).always(function(d){
            logging('stop', d)
        })

    })

	function getStamp (){
		var date = Date().split(" "),
			time = date[4];

		return time;
	}

	function logging (method, d) {
		var tag = '<p>'+ getStamp() + ' - ' + method + ' ' + d.result + ' </p>';
		panel.append(tag);
		tip.html('');
	}

}());