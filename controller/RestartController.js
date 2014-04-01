var exec = require('child_process').exec,
	async = require('async');

exports.restart = function(req, res) {
	async.waterfall([
		changeDirectory,
		gitPull,
		stopServer,
		startServer,
		function(err, result){
			if(err !== null && (typeof err != 'function')){
				res.json({
					result:'Fail',
					error : err
				})
			}
			else{
				res.json({
					result: 'Success'
				})
			}
		}
	]);
}

function changeDirectory (callback) {
	process.chdir('../namist');

	console.log('- current working directory' + process.cwd());
	callback(null);
}

function gitPull (callback) {
	console.log('- git pull start ...');

	exec('git pull', function(err, stdout, stderr){
		//console.log('-- stdout(git) : ' + stdout);

		if(err !== null){
			console.log('-- ' + err);
		}
		else{
			callback(null);
		}
	});
}

function stopServer (callback) {
	console.log('- forever stop server ...');
	exec('forever stop server/app.js', function(err, stdout, stderr){
		//console.log('-- stdout(stop) : ' + stdout);

		if(err !== null){
			console.log('-- ' + err);
		}
		else{
			callback(null);
		}
	});
}

function startServer (callback) {
	console.log('forever start server ...');
	exec('forever start server/app.js', function(err, stdout, stderr){
		//console.log('-- stdout(start) : ' + stdout);

		if(err !== null){
			console.log('-- ' + err);
		}
		else{
			callback(null);
		}
	})
}