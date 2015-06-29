var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smsConfig = require('../config/sms');
var emailConfig = require('../config/email');
var client = require('twilio')(
	smsConfig.accountSid,
	smsConfig.authToken
);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.render('index', { title: 'Test222' });
});

router.get('/send-text', function(req, res) {
	client.messages.create({
		body: "Jenny please?! I love you <3",
		to: "+16085142563",
		from: smsConfig.fromNumber
	}, function(err, message) {
		if(err) {
			console.log(err);
		}
		else {
			console.log(message);
		}
		res.send('finished');
	});
});

router.get('/send-email', function(req, res) {
  var transporter = nodemailer.createTransport(
  	emailConfig
  );


  var message = {
    from: 'aaron@theironyard.com',
    to: 'aaron@theironyard.com', // comma separated list
    subject: 'This is a test email',
    text: 'Hello world',
    html: '<b>Hello world</b>'
  };

  transporter.sendMail(message, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
  res.send('working on it..');
});

module.exports = router;
