function totalwalletAmount()
{
			
		     var  user_id=localStorage.userID;
		    $.post('http://yoneak.com/web_services/wallet_detail.php?user_id='+user_id,function(res)
		    { 
			var newleads_data="";
			var amount="0.00";
			console.log(res);
				           newleads_data='<a>'+
							'<i class="fa fa-google-wallet w3-xxlarge" aria-hidden="true" style="cursor:pointer;"></i>'+
							'</a>';
							if(res.status==1)
							{
								amount=res.wallet_data;
							}
							newleads_data=newleads_data+'<div style="color:#fff;">&#8377 '+amount+'</div>';
				    	     $('#walletId').append(newleads_data);
				    	     
				              },"json");

			              
		}
		