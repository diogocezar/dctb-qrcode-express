const express = require('express');
const qr      = require('qr-image');
const app     = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/qrcode', (req, res) => {
	const url  = 'https://www.diogocezar.com';
	const code = qr.image(url, {type : 'svg'});
	res.type('svg');
	code.pipe(res);
});

app.listen(3000, () =>{
	console.log('server is running on port 3000.');
});