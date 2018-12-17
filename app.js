var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://console.dialogflow.com/api/interactions/conversations?page=1&perPage=50&lang=en", true);
xmlHttp.setRequestHeader("Authorization", "Bearer 25745c6c0d0d49bcabd884367a2200c0");
xmlHttp.setRequestHeader("Content-Type", "application/json");
xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://naman-gupta99.github.io/DialogFlowAPI/");
xmlHttp.withCredentials = true;
xmlHttp.send();
document.getElementById('data').innerHTML = xmlHttp.responseText;
