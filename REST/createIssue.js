var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "<your-token-here>";
var userId = "<your-username-here>";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

createNewIssue(userId, "MyNewRESTRepo");
function createNewIssue(owner,repo)
{
	var repo
	var options = {
		url: urlRoot + '/repos/' + owner + '/' + repo + '/issues',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:	{
			"title": "My new REST created issue",
			"body": "This is the first REST created issue",
			"assignee": owner,
			"labels": [
				"QA", "FoundUsingAutomation"
			]
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(body)
			console.log( body );
		else
			console.log( "Error Occured while creating new Issue.")
	});

	process.exitCode = 1
}
