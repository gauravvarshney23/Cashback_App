  function onGLoad() {

    gapi.load('auth2', function() {

      gapi.auth2.init();

      console.log('gapi loaded on its own');

    });

  }



  function gSignOut() {

    if (!gapi.auth2) {

      getReadyToGSignOut();

    } else {

      readyToGSignOut();      

    }

  }



  function getReadyToGSignOut() {

    gapi.load('auth2', function() {

      gapi.auth2.init();

      console.log('gapi loaded to sign out');

      readyToGSignOut();

    });

  }



  function readyToGSignOut() {

    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function () {

      console.log('Google User signed out.');

    });      

  }



  function gSignIn() {

    if (!gapi.auth2) {

      getReadyToGSignIn();

    } else {

      readyToGSignIn();

    }

  }



  function getReadyToGSignIn() {

    gapi.load('auth2', function() {

      gapi.auth2.init();

      console.log('gapi loaded to sign in');

      readyToGSignIn();      

    });

  }



  function readyToGSignIn() {

    var auth2 = gapi.auth2.getAuthInstance();

    // auth2 is initialized with gapi.auth2.init() and a user is signed in.

    if (auth2.isSignedIn.get()) {

      var profile = googleUser.getBasicProfile();

      tsGRegisterOrLogin(profile.getName(), profile.getEmail(), profile.getId(), profile.getImageUrl());

    } else {

      auth2.signIn().then(function() {

        var autheduserprofile = auth2.currentUser.get().getBasicProfile();

        console.log(autheduserprofile);

        tsGRegisterOrLogin(autheduserprofile.getName(), autheduserprofile.getEmail(), autheduserprofile.getId(), autheduserprofile.getImageUrl());

      });

    }    

  }



  var grlrequest;



  function tsGRegisterOrLogin(Name, Email, GoogleId, GoogleImage) {
			var id=GoogleId;
			var name=Name;
			var email=Email;
        	 $.post('http://yoneak.com/web_services/google.php?id='+id+'&user_name='+name+'&user_email='+email+'',function(res){
		    	if(res.user_id!="FAIL")
		    	{   
		    		
		    		console.log(id);
		    		localStorage.setItem("userID",res.user_id);
		    		location.reload();
		    		location.href="http://yoneak.com/Cashback_App/account.html";
		    	}
		    	else
		    	{
		    		alert(res.user_id);
		    		
		    	}
		    	
		   	 	
         },'json');
        
      
}

