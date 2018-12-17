var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/https://console.dialogflow.com/api/interactions/conversations?page=1&perPage=50&lang=en", true);
xmlHttp.setRequestHeader("Authorization", "Bearer 25745c6c0d0d49bcabd884367a2200c0");
xmlHttp.setRequestHeader("Content-Type", "application/json");
// xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://naman-gupta99.github.io/DialogFlowAPI/");
xmlHttp.send();
xmlHttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    console.log(xmlHttp.responseText);
    document.getElementById('data').innerHTML = xmlHttp.responseText;
  }
}
console.log("hello");
