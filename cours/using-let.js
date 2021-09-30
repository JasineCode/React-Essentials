//define const msg 
const ERROR_ZERO_MSG = "Error division on Zero 😥"

//prompt a and b 
var a = parseInt(prompt("Enter the value of a : "))
var b = parseInt(prompt("Entrer the value of b : "))


//treatment
if(b==0) alert(ERROR_ZERO_MSG)
else {
    
    let d = a/b;//define localy within else(block)
    alert("d = "+d)
}

// console.log(d) d error not define 
// ERROR_ZERO_MSG="" error const cannot be changed