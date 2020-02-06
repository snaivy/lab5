var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		//"imageURL": 'http://lorempixel.com/400/400/people'
		"imageURL": 'https://vignette.wikia.nocookie.net/yuruyuri/images/8/80/AkariAkaza-YY10.png/revision/latest?cb=20191006144557'
	};

	data.friends.push(newFriend);
	res.render('add', data);
 }