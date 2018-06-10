var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
	console.log("### SERVING /");
	res.render('index', { title: 'Express' });
});

// GET home page.
router.get('/onty', function(req, res, next) {
	console.log("### SERVING /onty");
	res.render('onty', { title: 'mah page' });
});

// GET wacky inconsistent page page.
router.get('/inconsistent', function(req, res, next) {
	console.log("### SERVING /inconsistent");

	let data = [ "one", "two", "three", "four", "five" ];
	let showOrNot = [];
	let count = data.length;
	for ( let i=0; i<count; i++ ) {
		let v = Math.floor( Math.random() * 2 );
		showOrNot.push(v);
	}

	let text = "AND WE HAVE:";
	for ( let i=0; i<count; i++ ) {
		if ( showOrNot[i] )
			text += " " + data[i];
	}

	res.send( text );
	//res.render('index', { title: 'Express' });
});


module.exports = router;
