
 	$(document).ready(function()
		  {	
		     var  user_id=localStorage.userID;
		      var i=0;
		    $.post('http://yoneak.com/web_services/user_detail.php?user_id='+user_id,function(res)
		    { 
			var newlead_div1_data="";
			console.log(res);
			if((localStorage.userID!=null) || (localStorage.userID))

		                {
		                	
		                	if(res.image==null)
		                	{

				        
							newlead_div1_data='<div  onclick="edit()" class="row" style="background-color:#080771;">'+
					                      '<div class="col-xs-3" style="padding-top:1%">'+
						                   '<a href="">'+
							     '<img src="img/menu-user.png" class="img-circle" style="width:40px;height:65px;">'+
						         '</a>'+
				            	'</div>';
				            }
				            else
				            {
				            	newlead_div1_data='<div  onclick="edit()" class="row" style="background-color:#080771;">'+
					                      '<div class="col-xs-3" style="padding-top:1%">'+
						                   '<a href="">'+
							     '<img src="http://yoneak.com/Cashback_App/img/'+res.image+'" class="img-circle" style="width:40px;height:65px;">'+
						         '</a>'+
				            	'</div>';
				            	

				            }
					newlead_div1_data+='<div class="col-xs-6" style="padding:5% 0% 0% 0%">'+
						'<a href="">'+
							'<h5 style="font-size:14px;color:#fff">'+res.user_name+'</h5>'+
						'</a>';
						newlead_div1_data+='<a href="" class="ui-link">'+
							'<h6 style="color:#fff">'+res.user_email+'</h6>'+
						'</a>'+
					'</div>';
				    	     $('#ser_valoue').append(newlead_div1_data);
				    	 }
				    	 else
				    	 {
				    	newlead_div1_data='<div onclick="main()" class="row" style="background-color:#080771;">'+
					                      '<div class="col-xs-3" style="padding-top:1%">'+
						                   '<a href="">'+
							     '<img src="img/menu-user.png" class="img-circle" style="width:40px;height:65px;">'+
						       '</a>'+
					'</div>'+
					'<div class="col-xs-8" style="padding:5% 0% 0% 0%">'+
						'<a href="">'+
							'<h5 style="font-size:14px;color:#fff">SIGN IN</h5>'+
						'</a>'+
						'<a href="" class="ui-link">'+
							'<h6 style="color:#fff">Get a personalized experience</h6>'+
						'</a>'+
					'</div>';

					       $('#ser_valoue').append(newlead_div1_data);

				    	 }
				    	     
				              },"json");

			                  });

