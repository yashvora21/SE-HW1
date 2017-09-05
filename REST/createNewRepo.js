var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "aed91c8d10d8e9b43bb204d07d91d4122d1b13de";
var userId = "yashvora21";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

createNewRepo();
function createNewRepo()
{
	var repo
	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:	{
			"name": "MyNewRESTRepo0",
			"description": "This is the first REST created repository",
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
			console.log( "Error Occured while creating new Repo")
	});

	process.exitCode = 1
}
