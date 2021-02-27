function ReadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function CSVToArray(csv,line_break="\n",delim=","){
    let result = [];
    let lines = csv.split(line_break);
    lines.forEach(line => {
        result.push(line.split(delim));
    });
    return(result)
}
