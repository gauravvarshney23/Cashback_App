$(document).ready(function()
     {	
		    $.post('http://yoneak.com/web_services/header.php',function(res){
			    var i=0;
				var newleads_div_data="";
				$.each(res, function( key, value ) 
				 {
				    switch(i)
				    	{
				       case 0:
				    newleads_div_data='<li><a href="javascript:void(0)"  onclick="cat('+value.cat_id+')" style="text-align:left;padding-left:30px;">';
				                    
				    	break;

				    	case 1:
				           newleads_div_data+=value.cat_name+'</a>';
				                        
				    	break;
				    	  }
				    	       i=i+1;
				    	       i%=2;
				    	       if(i==0)
				    	       {

				    	     $('.navbar').append(newleads_div_data);
				    	       }

                               });
					callExternalProduct();
				              },"json");
    });

function callExternalProduct()
{
	$.post('http://yoneak.com/web_services/ExternalProducts.php',function(res){
			    var i=0;
				var newleads_div_data="";
				var sub_menu_data='';
				var sub_menu_data_1='';
				
				$.each(res, function( key, value ) 
				 {
				    switch(i)
				    	{
				       case 0:
				    newleads_div_data='<li><a href="javascript:void(0)" style="text-align:left;padding-left:30px;">';
				                    
				    	break;

				    	case 1:
				    	
				           newleads_div_data+=value.website+'</a>';
				                        
				    	break;

				    	case 2:
				    	if(value.webData!='')
				    	{
				    		var webdata=value.webData;
				    		var j=1;
				    		sub_menu_data='<ul>';
				    		$.each(webdata,function(k,v){
				    			switch(j)
				    			{
				    				case 1:
				    				     sub_menu_data_1+='<li><a href="javascript:void(0)" onclick="external_p('+v.catId+')" >'; 
				    				break;
				    				case 2:
				    				     sub_menu_data_1+=v.catName+'</a></li>';
                                                                 
				    				break;
				    			}
				    			j%=2;
				    			j++;
				    		 
				    		});
				    		sub_menu_data+=sub_menu_data_1+'</ul>';
				    		newleads_div_data+=sub_menu_data+'</li>';
				    		sub_menu_data_1='';
				    	}
                         else
                         {
                         	newleads_div_data+='</li>';
                         }
				        break;
				    	  }
				    	       i=i+1;
				    	       i%=3;
				    	       if(i==0)
				    	       {

				    	     $('.navbar').append(newleads_div_data);
				    	       }

                               });
				
				              },"json");
}


			            
				     