import sirv from 'sirv';
// import polka from 'polka';
import express from 'express'
import compression from 'compression';
import * as sapper from '@sapper/server';
import { authenticationMiddleware } from './lib/auth'
import { apiUrl } from './config'
// const sslRedirect = require('heroku-ssl-redirect');
// import sslRedirect from 'strong-ssl-redirect'

let { PORT, NODE_ENV, API_URL } = process.env;

const proxy = require('http-proxy-middleware');
const apiProxy = proxy('/api', { target: API_URL || apiUrl, changeOrigin: true });
const imgProxy = proxy('/images', { target: API_URL || apiUrl, changeOrigin: true });

let dev = NODE_ENV === 'development';

express()
	.use(
		compression({ threshold: 0 }),
	
		// async function (req, res, next) {
		// 	let www = 1
		// 	if ('production') {
		// 		var host = req.header('host');
		// 		console.log(host)
		// 		if (www) {
		// 			var correctHost = host.match(/^www\..*/i);

		// 			if (!correctHost) {
		// 				return res.redirect(301, 'https://www.' + host);
		// 			}
		// 		}
		// 		if (req.headers['x-forwarded-proto'] !== 'https') {
		// 			console.log(statusCode, 'https://' + req.hostname + req.originalUrl)
		// 			return res.redirect(statusCode, 'https://' + req.hostname + req.originalUrl);
		// 		}
		// 		next();
		// 	} else {
		// 		next();
		// 	}
		// },
		
		sirv('static', { dev }),
		apiProxy,
		imgProxy,
		// authenticationMiddleware,
		sapper.middleware({
			session: (req, res) => ({
				user: req.user || {},
				token: req.token,
				cart: req.cart || {},
				settings: req.settings || {}
			}),
			
		})
		
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});