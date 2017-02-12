$(document).ready(function()
     {	
		    $.post('http://yoneak.com/web_services/header.php',function(res){
			    var i=0;
				var newleads_div_data="";
				if(status==0)
				{

				}
				else
				{

				$.each(res, function( key, value ) 
				 {
				    switch(i)
				    {
				       case 0:
				    newleads_div_data='<div><a href="javascript:void(0)"  onclick="cat('+value.cat_id+')">';
				                    
				    	break;

				    	case 1:
				           newleads_div_data+='<h5 style="cursor:pointer;padding-left:20%;" class="accordion"><strong>'+ value.cat_name+'</strong></h5></a>';
				         
				                        
				    	break;
				     }
				     
				    	       i=i+1;
				    	       i%=2;
				    	       if(i==0)
				    	       {

				    	     $('#navbar').append(newleads_div_data);
				    	       }

                               });
			}
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
				    newleads_div_data='<div><a href="javascript:void(0)">';
				                    
				    	break;

				    	case 1:
				    	
				           newleads_div_data+='<h5 style="cursor:pointer;padding-left:20%;" class="accordion">'+value.website+'</h5></a>';
				                        
				    	break;

				    	case 2:
				    	if(value.webData!='')
				    	{
				    		var webdata=value.webData;
				    		var j=1;
				    		sub_menu_data='';
				    		$.each(webdata,function(k,v){
				    			switch(j)
				    			{
				    				case 1:
				    				     sub_menu_data_1+='<div><a href="javascript:void(0)" onclick="external_p('+v.catId+')" >'; 
				    				break;
				    				case 2:
				    				     sub_menu_data_1+='<h6  class="w3-center" style="cursor:pointer;"><strong>'+v.catName+'</strong></h6></a></div>';
                                                                 
				    				break;
				    			}
				    			j%=2;
				    			j++;
				    		 
				    		});
				    		sub_menu_data+=sub_menu_data_1;
				    		newleads_div_data+=sub_menu_data+'</div>';
				    		sub_menu_data_1='';
				    	}
                         else
                         {
                         	newleads_div_data+='</div>';
                         }
				        break;
				    	  }
				    	       i=i+1;
				    	       i%=3;
				    	       if(i==0)
				    	       {

				    	     $('#navbar').append(newleads_div_data);
				    	       }

                               });
				
				              },"json");
}


			            
				     