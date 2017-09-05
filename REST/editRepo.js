var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "<your-token-here>";
var userId = "<your-username-here>";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

editRepo(userId, "MyNewRESTRepo");
function editRepo(owner, repo)
{
	var repo
	var options = {
		url: urlRoot + "/repos/" + owner + "/" + repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:	{
			"name": repo,
			"description": "This is the first REST edit to your created repository",
			"homepage": "https://github.com",
			"private": true,
			"has_issues": true,
			"has_projects": true,
			"has_wiki": true
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(body)
			console.log( body );
		else
			console.log( "Error Occured while editing the Repo")
	});

	process.exitCode = 1
}
