/*
# log(x,mode,sep)
this function serves 2 purpose
1) shorthand of console.log
2) shunt console.log to HTML object like <p> <div>
## global variable
### GLOBAL_stdout
should refer to DOB object or left undefined
### GLOBAL_stdout_mode
- set = reset text
- append = add the message to the end
- stack = add the message upfront
### GLOBAL_stdout_sep
a characters to intervene between messages when mode is append or stack
*/
var GLOBAL_stdout = undefined; // should be a DOM element with innerHTML
var GLOBAL_stdout_mode = "append";
var GLOBAL_stdout_sep = "<br>";
log = function(x="random alert",mode=GLOBAL_stdout_mode,sep=GLOBAL_stdout_sep){
  if(GLOBAL_stdout==undefined ||
    ! ("innerHTML" in GLOBAL_stdout) ||
    !["set","append","stack"].includes(mode))console.log(x);
  else if (mode == "set") GLOBAL_stdout.innerHTML = x;
  else if (mode == "stack") GLOBAL_stdout.innerHTML = x + sep + GLOBAL_stdout.innerHTML;
  else if (mode == "append") GLOBAL_stdout.innerHTML += sep + x;
}

/*
# getVarName
return the variable name
to use this function, always wrap the variable in {}
for example: getVarName({x}) --> should return x
*/
getVarName = function(V){return Object.keys(V)[0]}

/*
# isNA(a)
the function check if given variable is NaN, null, undefined
additional parameter NA_text is declared to include string recorded NA type value
could be edited to include your own missing label
# ifNA(a)
a wrapper of isNA to replace NA with specified value
*/

isNA =function(a,NA_text=["null","undefined","NaN","NA"]){return [null,undefined,NaN].includes(a) || NA_text.includes(a)}
ifNA = function(a,nil=""){return isNA(a)? nil : a}

/*
# $(idnetifier)
this is a shorthand for querySelectorAll
if the identifier is an id (beginning with #) the function returns single Object
otherwise return an array of objects
*/
$ = function(identifier){
    let dollar = document.querySelectorAll(identifier);
    if(dollar.length==0) dollar = document.querySelectorAll("#"+identifier);
    if(dollar.length==0){log(identifier+" not found!");return [];}
    if(identifier[0]=="#")return dollar[0];
    return [...dollar];
}

parseHTML = function (htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.childNodes;
}


function getNormalDate(dated){
    dated = dated.toDate ? dated.toDate() : new Date(dated);
    yyyy = String(dated.getFullYear())
    MM = "00"+String(1+dated.getMonth())
    MM = MM.substr(MM.length-2,2)
    dd = "00"+String(dated.getDate())
    dd = dd.substr(dd.length-2,2)
    console.log(dated)
    return `${yyyy}-${MM}-${dd}`;
}
