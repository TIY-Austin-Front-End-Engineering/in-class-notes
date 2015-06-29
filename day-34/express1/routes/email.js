var express = require('express');
var nodemailer = require('nodemailer');
var emailConfig = require('../config/email');
var router = express.Router();

var transporter = nodemailer.createTransport(emailConfig);

/* GET users listing. */
router.get('/', function(req, res, next) {
	var mailOpts = {
		from: 'aaron@theironyard.com',
		to: 'aaron@theironyard.com',
		subject: 'test subject',
		text : 'test message form mailgun',
		html : '<b>test message form mailgun</b>'
	};
	transporter.sendMail(mailOpts, function (err, response) {
		if (err) {
			res.send(err);
		 //ret.message = "Mail error.";
		} else {
			res.send('email sent');
		 //ret.message = "Mail send.";
		}
	});
});

module.exports = router;
