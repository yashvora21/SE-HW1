var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
      });

var token = "token " + "aed91c8d10d8e9b43bb204d07d91d4122d1b13de";
var userId = "yashvora21";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourReposAndBranches(userId);
function getYourReposAndBranches(userName)
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
		try {
			obj = JSON.parse(body);
		} catch (e) {
			alert(e)
		}
		console.log( "List of Repos available are:" );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );			
		}
		// Take Input from User
		console.log("Please Enter name of your Repo to get List of Branches or 'quit' to exit program:")
		rl.on('line', (input) => {
			console.log(`Input Received: ${input}`);
			if(`${input}` == "quit") {
				console.log(`Exiting...`)
				rl.close()
			} else {
			listBranches(userName,`${input}`)
			}
		});
	});
}

function listBranches(owner,repo)
{
	var options = {
                url: urlRoot + '/repos/'+ owner + '/'  + repo + "/branches",
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
                try {
			obj = JSON.parse(body);
		} catch (e) {
			alert(e)
		}
		if (obj.length == undefined){
			console.log(`No Branches found for this Repo;`)
			console.log(`Please check your Input of RepoName and try again`)
		} else {
			console.log("Branch Names for Repo: " + repo + obj.length)
                	for( var i = 0; i < obj.length; i++ )
               	 	{
			var name = obj[i].name;
                        console.log( name );
			}
		}
        });
}

