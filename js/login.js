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
            var redirectPage=0;
            if((localStorage.url===null) || !(localStorage.url))
            {
                 if((localStorage.proName===null) || !(localStorage.proName))
                {
                     if((localStorage.cart===null) || !(localStorage.cart))
                     {
                           redirectPage=0;
                     }
                     else{
                        redirectPage=3;
                     }
                }
                else
                {
                    redirectPage=2;
                }
                 
            }
            else
            {
                redirectPage=1;
            }
            if(redirectPage==1){
                
    
                var userId=localStorage.userID;
                var affiliateId=localStorage.affiliateId;
                var url=localStorage.url;
                var catName=localStorage.catName;
                var catId=localStorage.catId;
                
        $.post('http://yoneak.com/web_services/track_offer.php?userId='+userId+'&affiliateId='+affiliateId+'&referralUrl='+url+'&catName'+catName+'catId'+catId,function(res){
            
            if(res.message=="success")
            {
                window.location=url;
            }
            else{
                alert("Something Went wrong");
                window.location="yoneak.html";
            }
        localStorage.removeItem("url");
        localStorage.removeItem("catName");
        localStorage.removeItem("affiliateId");
        localStorage.removeItem("catId");
            
        },"json");
            }
            
            else if(redirectPage==2)
            {
                var userId=localStorage.userID;
                var proName=localStorage.proName;
                var url=localStorage.url;
                var proId=localStorage.proId;
       $.post('http://yoneak.com/web_services/track_offer2.php?userId='+userId+'&affiliateId='+proId+'&referral_url='+url+'&product_name'+proName,function(res){
            
            if(res.message=="success")
            {
                window.location=url;
            }
            else{
                alert("Something Went wrong");
                window.location="yoneak.html";
            }
        localStorage.removeItem("url");
        localStorage.removeItem("proName");
        localStorage.removeItem("proId");
            
        },"json");
            }
            else if(redirectPage==3)
            {
                 window.location='cartDetail.html';
            }
            else if(redirectPage==0)
            {
                 alert("Successfully Login.."); 
                 window.location='yoneak.html';
            }
                                
           
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