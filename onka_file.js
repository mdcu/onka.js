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

/*CSVToArray = function(csv,line_break="\n",delim=","){
    let result = [];
    let lines = csv.split(line_break);
    lines.forEach(line => {
        line = line.trim()
        if(!isNA(line))result.push(line.split(delim));
    });
    return(result)
}*/
function CSVToArray(S){
	let res = [[]]
	let sign = []
	S = S.replace(/\n\r/g,"\n").replace(/\r\n/g,"\n")
	if(!["\n","\r"].includes(S[S.length-1]))S = S+"\n"
	let p = /\"|\n|\r|,/g
	while((m = p.exec(S))!=null){
		sign.push(m.index)
	}
	sign.forEach(s=>console.log(s,S[s]))
	let si = 0
	let index = 0
	while(si < sign.length){
		if(S[sign[si]]==","){
			res[res.length-1].push(S.substr(index,sign[si]-index))
			index = sign[si]+1
		}else if(S[sign[si]]=="\n" || S[sign[si]]=="\r" ){
			res[res.length-1].push(S.substr(index,sign[si]-index))
			index = sign[si]+1
			res.push([])
		}else if(S[sign[si]]=='"'){
			//index = sign[si]+1
			do{console.log(sign[si++])}while(S[sign[si]]!='"' && si < sign.length)
			//res[res.length-1].push(S.substr(index,sign[si]-index))
			//index = sign[si++]+1
		}else{console.log(sign[si])}
		si++
	}
	for(x in res){if(res[x].length==0)res.splice(x,1)}
	return res
};
