									
function home_wallet()
{
			
		     var  user_id=localStorage.userID;
		     
		    $.post('http://yoneak.com/web_services/wallet_detail.php?user_id='+user_id,function(res)
		    { 
			var newleads_data="";
			var amount="0.00";
			console.log(res);
				           newleads_data='';
								
							if(res.status==1)
							{
								amount=res.wallet_amount;
							}
							newleads_data=newleads_data+'<a  href="" style="color:#000;text-decoration:none;"><img src="img/dashboard.png" style="width:25px;height:25px">'+
								'<span onclick="account()" style="color:#000;padding-top:5%">Dashboard</span>'+
								'<span  class="pull-right" style="padding-right:6%">'+
								'<i class="fa fa-inr" aria-hidden="true">&#8377 '+amount+'</i>'+
								'</span>'+
							'</a>';
				    	     $('#walletId').append(newleads_data);
				    	     
				              },"json");

			              
		}
		