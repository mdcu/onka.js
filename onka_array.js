// always include onka.js
/*
# is2DArray
check if the given array is 2D (may be unbalance)
# tableToArray
convert HTML table element to 2D array
# arrayToTable
convert 2D array to HTML table, speified if ging to use <th> or not
# arrayTranspose
do what the name implies
# array2DSort
## header = true to tell the function to skip first row
## sortby = index of column to sort
## mode = -1 for ascending, 1 for descending
*/
is2DArray = function(A){ //check if A is 2D array?
    if(!Array.isArray(A) || A.length==0)return false;
    A.forEach(a => {if(!Array.isArray(a))return false;})
    return true;
}

tableToArray = function(TableId){
    let T = $(TableId);
    if(T.tagName!='TABLE'){log(TableId+" is not a TABLE!");return [];}
    let A = [];
    for(let r = 0; r<T.rows.length;r++){
      A[r]=[];
    	for(let c=0; c<T.rows[r].cells.length;c++){
    		//console.log(r,c);
    		A[r].push(T.rows[r].cells[c]);
    	}
    }
    return A;
}

arrayToTable = function(A,use_th=true){
    if(!is2DArray(A)){log("non 2D array is trying to tabulize!");return []}
    let HTML_text = '';
    for(let r = 0;r<A.length;r++){
        HTML_text += (r==0 && use_th)? '<th>' : '<tr>';
        for(let c=0;c<A[r].length;c++){
            HTML_text += '<td>';
            HTML_text += ifNA(arr[r][selected[c]],"-");
            HTML_text += '</td>';
        }
        HTML_text += (r==0 && use_th)? '</th>' : '</tr>';
    }
    return HTML_text;
}

arrayTranspose = function(A){
    if(!is2DArray(A)){log("non 2D array is trying to transpose!");return []}
    let newarr =[];
    for(let i=0;i<A[0].length;i++){
        newarr[i]=[];
        for(let j=0;j<A.length;j++)
            newarr[i].push(A[j][i])
    }
    return newarr;
}

array2DSort = function(A,header=false,sortby=0,mode=1){
    if(!is2DArray(A)){log("non 2D array is trying to 2D sort!");return []}
    if(header){
        let temp = A.slice(0,1)
        A = array2DSort(A.slice(1,A.length),header=false,sortby,mode);
        return temp.concat(A);
    }
    if(!Array.isArray(sortby))sortby = [sortby];
    if(!Array.isArray(mode))mode = [mode];
    if(mode.length!=sortby.length){
        Error("Length of sorting not equal");
        return A;
    }

    for(let i=sortby.length-1;i>=0;i--){
        A.sort(function(a,b){
            a = a[sortby[i]];
            b = b[sortby[i]];
            if(a<b) return mode[i];
            if(a>b) return -mode[i];
            return 0;
        })
    }
    return A;
}
