readURL = function(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    return xmlhttp.responseText;
  }
}


readINPUT = function(e){ //promise
    var f = e.target.files[0]
    var reader = new FileReader()
    return new Promise(function(resolve,reject){
        reader.onerror = function(){
            reader.abort()
            reject()
        }
        reader.onload = function(){
            resolve(reader.result)
        }
        reader.readAsText(f)
    })
}
var my_clipboard ;
export_promise = async function(P){my_clipboard = (await P)}

CSVToArray = function(csv,line_break="\n",delim=","){
    let result = [];
    let lines = csv.split(line_break);
    lines.forEach(line => {
        line = line.trim()
        if(!isNA(line))result.push(line.split(delim));
    });
    return(result)
}
