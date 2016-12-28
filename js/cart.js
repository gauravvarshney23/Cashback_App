function addToCart(productId,quantity)
{
			$.getJSON("http://jsonip.com?callback=?", function (data) {
   		    var ipAddress=data.ip;

$.post('http://yoneak.com/web_services/addToCart.php?id='+productId+'&ip='+ipAddress+'&proQuantity='+quantity,function(res){
			if(res.result=="success")
			{
				alert("Product Successfully Added to Cart");
			}
			else
			{
			    alert("Something Went wrong with cart");
			}
    	     
		},"json");
	});
}
