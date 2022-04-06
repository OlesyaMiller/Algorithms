
var longestCommonPrefix = function(strs) {
    let most = "";
    const first = strs[0];
    let exit;
    
    for(var i=0; i < first.length; i++) {
        strs.forEach((element) => {
            if(first[i] !== element[i])
                exit = true;
            });
        
        if(exit === true)
            break;
        
        most=most.concat(first[i])
        console.log(most)
    }
return most
}