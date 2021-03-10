
// SET is use to set attributes and style of DOM element quickly

SET = function(obj,properties,styles){
    if(properties)Object.keys(properties).forEach(k=>{
        obj[k] = properties[k]
    })
    if(styles)Object.keys(styles).forEach(k=>{
        obj.style[k] = styles[k]
    })
    return(obj)
}

// ID is simply a shorthand of document.getElementById
// plus, if call ID with no argument, it retuns array of all IDs

ID = function(id){
    if(id===undefined){
        let ID = []
        $("*").forEach(o=>{
            o.id ? ID.push(o.id) : ""
        })
        return(ID)
    }
    return(document.getElementById(id))
}

// CE is simply a document.createElement
// plus build-in SET function

CE = function(tagname,properties,styles){
    let res = document.createElement(tagname)
    return(SET(res,properties,styles))
}
