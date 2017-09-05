var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "<your-token-here>";
var userId = "<your-username-here>";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

listReactions(userId, "MyNewRESTRepo");
function listReactions(owner,repo)
{
	var repo
	var options = {
		url: urlRoot + '/repos/' + owner + '/' + repo + '/issues/1/reactions',
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			"Accept": "application/vnd.github.squirrel-girl-preview"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(body) {
			var obj = JSON.parse(body);
			console.log( obj );
			for( var i = 0; i < obj.length; i++ )
			{
				var name = obj[i].name;
				console.log( name );
			}
		} else
			console.log( "Error Occured while listing all reactions.")
	});

	process.exitCode = 1
}
