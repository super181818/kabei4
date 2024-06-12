
	var apiUrl = 'http://111.223.12.77:1201/hello.php';
	var websiteUrl,appid,baseCDN,version = '';
	var queryUrl = apiUrl
	var urlParams = parseURLParams(window.location.href)
	if (urlParams.room){
	    queryUrl = queryUrl + '?room=' + urlParams.room;
	} else if (urlParams.cardNo){
	    $("#cardno").html(urlParams.cardNo);
	}else if (urlParams.skinNo){
	    $("#skinno").html(urlParams.skinNo);
	}else if (urlParams.headNo){
	    $("#headno").html(urlParams.headNo);
	}else if(urlParams.invitation) {
	     $("#invitation").html(urlParams.invitation);
	}else{
	    queryUrl = queryUrl
	}
     
	
	//getCurrentAgent();
       


    


	
    
    
    
