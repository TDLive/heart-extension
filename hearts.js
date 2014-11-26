doHeart = function(e){
	e=document.forms[1];
	e.getElementsByTagName("textarea")[0].value="♥"
	e.getElementsByTagName("span")[2].click();
}

isPrivate = function(){
  return (! document.forms[1] || document.forms[1].getElementsByTagName("textarea").length < 1);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  if( request.iLove && request.iLove == "you" ){
    doHeart();
  }
  else if( request.iLove && request.iLove == "me"){
    sendResponse(isPrivate());
  }

})
