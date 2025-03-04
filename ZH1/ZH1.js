function HttpRequest() {
    const url = "http://localhost/htdocs/adat.txt" //change it if you put it somewhere else !! 
    var fetch = new XMLHttpRequest()
    fetch.onreadystatechange = function() {
        if (fetch.readyState == 4 && fetch.status == 200) {
            let array = fetch.responseText.split('\n')
            ShowTxt(array)
        }
    }
    fetch.open('GET', url, true)
    fetch.send()
}

function ShowTxt(txt){
    const div = document.getElementById('output')
    const p = document.createElement('p')
    txt[0] = Short(txt[0])
    txt[1] = Month(txt[1])
    txt[txt.length-1] = Round(txt[txt.length-1])
    for (let index = 0; index < txt.length; index++) {
        p.innerText = txt[index]
        div.appendChild(p)
    }
}

function Month(month){
    let date = Date.parse(month)
    return date.getMonth()
}

function Short(txt){
    return txt.substring(0, 0) + "."
}

function Round(num){
    return num + " " + Math.round(num)
}

function main(){
    document.getElementById("fetchBtn").addEventListener('click', HttpRequest)
}

document.addEventListener('DOMContentLoaded', main)
