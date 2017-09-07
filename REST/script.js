var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');
const readline = require('readline');

var token = "token " + "<your-token-here>";
var userId = "<your-userId-here>";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourReposAndBranches(userId,"<your-Repo-name>");
createNewRepo("<your-Repo-name>");
createNewIssue(userId,"<your-Repo-name>");
editRepo(userId, "<your-Repo-name>");
listReactions(userId, "<your-Repo-name>");

function getYourReposAndBranches(userName,repo)
{
	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var options = {
            url: urlRoot + '/repos/'+ userName + '/'  + repo + "/branches",
            method: 'GET',
            headers: {
                    "User-Agent": "EnableIssues",
                    "content-type": "application/json",
                    "Authorization": token
            }
    };
        try {
            obj = JSON.parse(body);
     } catch (e) {
            alert(e)
        }
        if (obj.length == undefined) {
        console.log(`No Branches found for this Repo;`)
         } else {
            console.log("Branch Names for Repo: " + repo )
             for( var i = 0; i < obj.length; i++ )
                {
                    var name = obj[i].name;
                    console.log( name );
                }
             }
         });
    }

function createNewRepo(repo)
{
	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:	{
			"name": repo,
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
		if(body.message == null )
			console.log( "Successfully created the Repo: "+ body.name );
		else
			console.log( "Error Occured while creating new Repo: " + body.message)
	});

}

function createNewIssue(owner,repo)
{
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
		if(body.message == null)
			console.log( "Issue Created successfully." );
		else
			console.log( "Error Occured while creating new Issue: "+ body.message)
	});
}

function editRepo(owner, repo)
{
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
		if(body.message == null)
			console.log( "Successfully Edited the Repo." );
		else
			console.log( "Error Occured while editing the Repo : " + body.message)
	});

}

function listReactions(owner,repo)
{
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
			console.log( "Listing all the reactions." );
			for( var i = 0; i < obj.length; i++ )
			{
				var name = obj[i].name;
				console.log( name );
			}
		} else
			console.log( "Error Occured while listing all reactions.")
	});
}
