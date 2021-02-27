// resemble $ of Jquery
function $(identifier){
    let dollar = document.querySelectorAll(identifier);
    if(dollar.length==0){alert(identifier+" not found!");return false;}
    if()return dollar[0];
    return [...dollar];
}

// get table representation
function T(TableId){
    let theT = document.getElementById(TableId);
    if(theT.tagName!='TABLE'){alert(TableId+" is not a TABLE!");return false;}
    let TArray = [];
    for(let r = 0; r<theT.rows.length;r++){
    	TArray[r]=[];
    	for(let c=0; c<theT.rows[r].cells.length;c++){
    		//console.log(r,c);
    		TArray[r].push(theT.rows[r].cells[c]);
    	}
    }
    return TArray;
}

function decode(code,keyArr,err='N/A'){
	if(keyArr[code])return keyArr[code];
	Error(code+' not found!');
	return err;
}

function arraySort(arr,header=false,sortby=0,mode=1){
    console.log('Array sorting: ',arr)
    if(header){
        let temp = arr.slice(0,1)
        arr = arraySort(arr.slice(1,arr.length),header=false,sortby,mode);
        return temp.concat(arr);
    }
    if(!Array.isArray(sortby))sortby = [sortby];
    if(!Array.isArray(mode))mode = [mode];
    if(mode.length!=sortby.length){
        Error("Length of sorting not equal");
        return arr;
    }

    for(let i=0;i<sortby.length;i++){
        arr.sort(function(a,b){
            let A = a[sortby[i]].toLowerCase();
            let B = b[sortby[i]].toLowerCase();

            if(A<B) return mode[i];
            if(A>B) return -mode[i];
            return 0;
        })
    }
    console.log(arr)
    return arr;
}

function tableBuilder(arr,classname='',selected=0){
    let htmlTxt = '';
    if(isNestedObj(arr))
        arr=obj2nested(arr);
    for(let r = 0;r<arr.length;r++){
        htmlTxt+='<tr>';
        for(let c=0;c<Math.min(selected.length,arr[r].length);c++){
            htmlTxt+='<td>';
            htmlTxt+=vNA(arr[r][selected[c]],"-");
            htmlTxt+='</td>';
        }
        htmlTxt+='</tr>';
    }

    return htmlTxt;
}

function arrTranspose(arr){
    let newarr =[];
    for(let i=0;i<arr[0].length;i++){
        newarr[i]=[];
        for(let j=0;j<arr.length;j++)
            newarr[i].push(arr[j][i])
    }
    return newarr;
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

function isNestedArray(A){ //check if A is 2D array?
    if(!Array.isArray(A) || A.length==0)return false;
    for(let i=0;i<A.length;i++)
        if(!Array.isArray(A[i]))return false;
    return true;
}

function isNestedObj(A){ //check if A is 2D array?
    if(!Array.isArray(A) || A.length==0)return false;
    for(let i=0;i<A.length;i++)
        if(typeof(A[i])!='object' || !Array.isArray(A[i].content))return false;
    return true;
}

function nested2obj(A,vertical=true){
    if(!isNestedArray(A)){
        console.log('ERROR: input is not nested array')
        return A;
    }
    console.log("N2O:",A)
    if(vertical)
        A = arrTranspose(A);
    var Out = [];
    for(let r = 0; r<A.length; r++){
        //console.log(A[r])
        let content = A[r];
        content = content.toDate ? getNormalDate(content.toDate()) : content;
        Out.push({content})
    }
    return Out;
}

function obj2nested(A,vertical=true){
    if(!isNestedObj(A)){
        console.log('ERROR: input is not nested object')
        return A;
    }
    console.log("O2N:",A)
    let Out=[];
    for(let i=0;i<A.length;i++){
        A[i].content = A[i].content.toDate ? getNormalDate(A[i].content.toDate()) : A[i].content;
        Out.push(A[i].content);
    }
    if(vertical)
        Out = arrTranspose(Out);
    return Out;
}

function repairTree(Tree,mode='n2o'){
    console.log(Tree,mode)
    if(Tree==null)return null
    Tree = Tree.toDate ? getNormalDate(Tree.toDate()) : Tree
    console.log(Tree,"post date check")
    if(typeof(Tree)!='object'){
        console.log("non-obj leave:", Tree)
        return Tree;
    }
    if(mode=='n2o'&&isNestedArray(Tree))
        Tree = nested2obj(Tree);
    if(mode=='o2n'&&isNestedObj(Tree))
        Tree = obj2nested(Tree);
    if(Array.isArray(Tree)){
        for(let t=0;t<Tree.length;t++){
            Tree[t]=repairTree(Tree[t],mode)
        }
        console.log("***ARR->ARR: ",Tree)
    }else{
        Object.entries(Tree).forEach(pair=>{
            if(pair[0]!='Timestamp')
                Tree[pair[0]]=repairTree(pair[1],mode)
        })
    }
    console.log("leave: ",Tree)
    return Tree;
}

function isSameDay(a,b){
    a = a.toDate ? a.toDate() : new Date(a);
    b = b.toDate ? b.toDate() : new Date(b);
    if(a.getFullYear()==b.getFullYear())
        if(a.getMonth()==b.getMonth())
            if(a.getDate()==b.getDate())
                return true;
    return false;
}

function isNA(a){
    if(Number.isNaN(a) | a==null | ["null","undefined","NaN","NA"].includes(a))return true
    return false
}

function vNA(a,nil=""){
    return isNA(a)?nil:a
}

    /*Object.entries(oldTree
).forEach(pair=>{if(Array.isArray(oldTree[pair[0]]))oldTree[pair[0]]=oldTree[pair[0]][0]})*/
