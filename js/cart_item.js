function cart_item()
  {	

	$.getJSON("http://jsonip.com?callback=?", function (data) 

	{
			
		    var ipAddress=data.ip;
		     
		    $.post('http://yoneak.com/web_services/get_cartitem.php?ipAddress='+ipAddress,function(res)
		    { 
			var newleads_data="";
			var amount="NO";
			console.log(res);
			  
							
				newleads_data='<a onclick="goToCart();">'+
				'<i class="fa fa-shopping-cart w3-large" style="cursor:pointer;color:#fff"><span>'+res.count+'</span></i>'+
					'</a>';
				
							
							
							
				    	     $('#cart_data').html(newleads_data);
				    	     
				              },"json");

		                  });
	  }

	cart_item();		              
		
		