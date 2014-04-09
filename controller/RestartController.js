var exec = require('child_process').exec,
	async = require('async');

exports.restart = function(req, res) {
	async.waterfall([
		changeDirectory,
		gitPull,
		stopServer,
		startServer
	],function(err, result){
			if(err !== null){
				res.json({result:'Fail : ' + err.Error})
			}
			else{
				res.json({
					result: 'Success'
				})
			}
		}
	);
}

function changeDirectory (callback) {
	process.chdir('../namist');

	//console.log('- current working directory' + process.cwd());
	callback(null);
}

function gitPull (callback) {
	exec('git pull', function(err, stdout, stderr){
		//console.log(stdout);
		callback(err);
	});
}

function stopServer (callback) {
	exec('forever list | grep server/app.js', function(err, stdout, stderr){
		if(stdout){
			stop();
		}else{
			callback(null);
		}
	});

	function stop (){
		exec('forever stop server/app.js', function(err, stdout, stderr){
			callback(err);
		});
	}
}

function startServer (callback) {
	exec('forever start server/app.js', function(err, stdout, stderr){
		callback(err);
	})
}