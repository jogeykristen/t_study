var palindrome = (str)=>{
    var reversed = ""
    for(let i=str.length-1; i>=0;i--){
        reversed += str[i];
    }
    console.log("sstr === ",reversed)
    if(reversed == str){
        console.log("palindrome")
        return "this is palindrome"
    }
    else{
        console.log("not palindrome")
        return "not palindrome"
    }
}
palindrome("malayalam");