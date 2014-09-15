
var ACS = require('acs').ACS;
ACS.initACS('BbvuMbjM1FVO9HGwqjlCjdIfL44i54Hs');

function show(req,res){
	var menulist = [];
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
		}, req, res);
}