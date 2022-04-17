

function render(){
	let source = document.getElementById("source").value;
  let current_branch = document.getElementById("tree");
	current_branch.innerHTML = ""
current_branch = current_branch.appendChild(buildBranch(""))
  let current_level = -1;
  source = source.split("\n")
  source.forEach(line => {
  	console.log(line);
    let level = line.match(/^[.]+/g);
    level = level?level[0].length:0;
    if(level == current_level){
    	current_branch = current_branch.parentElement.appendChild(buildBranch(line));
    }else if(level < current_level){
    	while(current_level>level){
      	current_branch = current_branch.parentElement.parentElement;
      	current_level--;
      }
    
      current_branch = current_branch.parentElement.appendChild(buildBranch(line));
    }else{ // level > current_level
    	current_branch = current_branch.lastElementChild.appendChild(buildBranch(line));
      current_level = level;
    }  
  })
document.querySelectorAll(".parent").forEach(x=>{
	if(x.nextElementSibling.childElementCount==0)return;
 x.classList.add("hasChildren")
    x.addEventListener("click",function(e){
        let child = e.target.nextElementSibling
        child.style.display = child.style.display=="none"?"inline-block":"none";
    })
})
}

function buildBranch(txt){
	let branch = document.createElement('div');
  branch.className = "branch"
  branch.appendChild(document.createElement('div')).className = "parent"
  branch.appendChild(document.createElement('div')).className = "child"
  branch.firstElementChild.innerText = txt.replace(/^[.]+/g,"");
  return branch;
}