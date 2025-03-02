function HttpRequest(url) {
    var fetch = new XMLHttpRequest()
    fetch.onreadystatechange = function() {
        if (fetch.readyState == 4 && fetch.status == 200) {
            ShowXML(fetch.responseXML)
            //not need to to do status based error handling and json parsing 
        }
    }
    //edit url if needed
    fetch.open('GET', url, true)
    fetch.send()
}

function ShowXML(xml) {
    let x = xml.getElementsByTagName('placeholder') //dont forget to change the tag to what you want to show
    for (let i = 0; i < x.length; i++) {
        console.log(x[i].childNodes[0].nodeValue) // dont forget to change to what ever htlm tag you want to show
    }
}

function ShowJson(json){
    let obj = JSON.parse(json)
    console.log(obj)
    //parse json and show it
}

function ShowCSV(csv){
    let lines = csv.split('\n')
    for(let i = 0; i < lines.length; i++){
        console.log(lines[i])
    }
}

function main(){
    //html event listeners
}

document.addEventListener('DOMContentLoaded', main)