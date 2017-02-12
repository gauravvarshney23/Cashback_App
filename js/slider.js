
 $(document).ready(function()
		    {	
		    $.post('http://yoneak.com/web_services/slider_image.php',function(res){
			    var i=0;
				var newleads_div_data="";
				$.each(res, function( key, value ) 
				    {
				    switch(i)
				    	{
				    		
				     case 0:

				        newleads_div_data='<div data-p="112.50">'+
						                   '<img data-u="image" src="http://yoneak.com/admin/product_images/'+value.image+'"  />'+
					                         '</div>';
					                  

				    	break;

				    	  }

				    	       i=i+1;
				    	       i%=3;
				    	       if(i==0)
				    	       {

				    	     $('#slider_id').append(newleads_div_data);
				    	       }

                               });
				           jssor_1_slider_init();
					
				              },"json");

			                 });

