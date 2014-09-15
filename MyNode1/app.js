// initialize app
function start(app, express) {
	//use connect.session
	app.use(express.cookieParser());
	app.use(express.session({ key: 'node.acs', secret: "mysecret" }));
	
	//set favicon
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
}

// release resources
function stop() {
	
}