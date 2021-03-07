readURL = function(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    return xmlhttp.responseText;
  }
}

readINPUT = function(e){ // readINPUT(event) in input file
    console.log(e)
    var f = e.target.files[0]
    console.log(f)
    var reader = new FileReader()
    reader.onload = function(){
        let data = reader.result
        console.log(data)
    }
    return reader.readAsText(f)
}

CSVToArray = function(csv,line_break="\n",delim=","){
    let result = [];
    let lines = csv.split(line_break);
    lines.forEach(line => {
        if(!isNA(line))result.push(line.split(delim));
    });
    return(result)
}
