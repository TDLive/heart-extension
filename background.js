var tabMonitor = function(tab){

  while( ! tab.status == "complete" ) {}

  if( tab.url.split("/").length > 4 && tab.url.split("/")[2] == "steamcommunity.com" && (tab.url.split("/")[3] == "id" || tab.url.split("/")[4] == "profiles") && tab.title.split("::").length > 1 ){
    chrome.tabs.sendMessage(tab.id, {iLove: "me"}, function(isPrivate){
      if( isPrivate ) return;
      chrome.pageAction.show(tab.id);
      chrome.pageAction.setTitle({tabId: tab.id, title: "Leave a ♥ on " + tab.title.split("::")[1].slice(1) + "'s profile!"});
    });
  }
  else {
    chrome.pageAction.hide(tab.id);
  }
}

chrome.tabs.onUpdated.addListener(function(id, info, tab){
  tabMonitor(tab);
});

chrome.tabs.onCreated.addListener(tabMonitor);

chrome.pageAction.onClicked.addListener(function(tab){
  if( tab ){
    chrome.tabs.sendMessage(tab.id, {iLove: "you"});
  }
})
