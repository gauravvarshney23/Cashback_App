function getIp()
{
$(document).ready( function() 
	{
   $.getJSON( "http://smart-ip.net/geoip-json?callback=?", function(data)
	{ 
	 alert( data.host); 
	 } );
	});
}
function myid()
{
    $ip_add = getIp();
}