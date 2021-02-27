readFile = function(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    return xmlhttp.responseText;
  }
}

CSVToArray = function(csv,line_break="\n",delim=","){
    let result = [];
    let lines = csv.split(line_break);
    lines.forEach(line => {
        if(!isNA(line))result.push(line.split(delim));
    });
    return(result)
}
