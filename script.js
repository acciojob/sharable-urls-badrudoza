// your code here
const urlDisplay=document.querySelector("#url");
const formSubmit=document.querySelector("form");

formSubmit.addEventListener("submit",(e)=>{
	e.preventDefault();
	let baseUrl=urlDisplay.textContent;

	const name=document.querySelector("#name");
	const year=document.querySelector("#year");
	let queryParam=[];
	if(name){
		queryParam.push("name="+name);
	}
	if(year){
		queryParam.push("year="+year);
	}
	if(queryParam.length>0){
		baseUrl+="?"+queryParam.join("&");
	}
	urlDisplay.textContent=baseUrl;
});

