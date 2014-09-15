
var ACS = require('acs').ACS;
ACS.initACS('BbvuMbjM1FVO9HGwqjlCjdIfL44i54Hs');

function show(req,res){
	var menulist = [];
	ACS.Users.login({
    	login: 'nybistroadmin',
    	password: 'admin1234'
	}, function (e) {
    	if (e.success) {
    	ACS.Objects.query({
	 		classname : 'MenuItem',
	 	}, function(e) {
	 		if (e.success) {
        		console.log("In show<<<<<<<<<<<");
        		//console.log("Menu Length = " + e.MenuItem.length);
        	
        		for(var i=0;i<e.MenuItem.length;i++)
            	{
            		menulist.push(e.MenuItem[i]);
            		console.log("Menu in for= " + JSON.stringify(e.MenuItem[i]));
            		
				}
				res.render('index', {
					menuitem : menulist,
					title : 'Menu Fetched Successfully'
					});
				/*
				for(var i=0;i<menulist.length;i++){
									console.log("Menu list=" + menulist[i]);
								}*/
				
				
			}
	 	});
    	} else {
        	 console.log("Error to login: " + e.message);
    	}
	}, req, res);
}


function update(req,res){
	
	var pricetag = req.body.price_name;
	var itemid = req.body.item_name;
	console.log("Price of item ==== " + pricetag + " === "+ itemid);
	
	ACS.Users.login({
    	login: 'nybistroadmin',
    	password: 'admin1234'
	}, function (e) {
    	if (e.success) {
    		console.log("In update login>>>>>>>>>>>>");
			
			/*
			ACS.Objects.update({
							 classname : 'MenuItem',
							 MenuItemId : 10,
							 fields : {
								 Price : 20
							 }
						 }, function(e) {
							 if(e.success){
				
								console.log("In update query>>>>>>>>>>>>");
								res.render('price', {
								title : 'Price updated Successfully'
								});
							} else {
						 console.log("Error to update: " + e.message);
					}
						});*/
			
			
			ACS.Objects.create({
    classname: 'cars',
    fields: {
        make: 'nissan',
        color: 'blue',
        year: 2005
    }
}, function (e) {
    if (e.success) {
        var car = e.cars[0];
        console.log ("make: " + car.make + "\n" + "color: " + car.color + "\n" + "year: " + car.year);
        res.render('price', {
								title : 'Table created Successfully'
								});
    } else {
        console.log("Error to create: " + e.message);
    }
});
	}  else {
        	 console.log("Error to login: " + e.message);
    	}
	}, req, res);	
			
}