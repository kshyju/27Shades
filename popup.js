
/**************************************
  Author  : Shyju Krishnankutty
  Twitter : @kshyju
**************************************/
document.addEventListener("DOMContentLoaded",function(e){
	document.getElementById("shadeSlider").addEventListener("change",function(){
		var val=document.getElementById("shadeSlider").value;	
		document.getElementById("spnShade").innerHTML=val/2;		

         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {greeting: val}, function(response) {
    			console.log(response.farewell);
  			});
		});

	});
});

