function logout()
{
	localStorage.removeItem("userID");
	location.href="login.html";	
}