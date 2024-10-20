<<<<<<< HEAD
const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});
=======
const Razorpay = require('razorpay');
require('dotenv').config();


const instance = new Razorpay({
  key_id: 'RAZORPAY_KEY_ID', // Use the key from the .env file
  key_secret: 'RAZORPAY_KEY_SECRET' // Use the secret from the .env file
});

module.exports = instance;
>>>>>>> 2fde0a7 (Second commit)
