function login()
			{
$("#email").keypress(function(){
$("#email_error_msg").fadeOut();
});
$("#password").keypress(function(){
$("#password_error_msg").fadeOut();			
});			

			var email =$("#email").val();
	
			var password=$("#password").val();
			
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
                {  
                  verify_err=true; 
                } 
                else
                {
                $('#email_error_msg').html('Invalid Email Id.');
               verify_err=false;
                if(email=='')
                {
                	$('#email_error_msg').html('please enter your email');
                }
                }
               
				if(password=='')
				{
					$('#password_error_msg').html('please enter your Password');
				}
				
				else
				{
				$.post('http://yoneak.com/web_services/login.php?email='+email+'&password='+password,function(res){
        if(res.message == "Login Success")
        {  
            localStorage.setItem("userID",res.user_id);
           						
            window.location='account.html';
        }
        if(res.message == "invalid Email Or Password")
        {
        	$('#email_error_msg').html('invalid Email Or Password');
        }
        
    }, "json").fail(function(){
        //alert("invalid Email Or Password");
    });

   }
 }