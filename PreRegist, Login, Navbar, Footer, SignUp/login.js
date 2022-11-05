var inputs = document.getElementsByTagName('input')
function validateuserid(){
    var id = inputs[0]
    var temp = id.value
    if(temp.length > 15){
        alert("User id must be atmost 15 characters")
    }
}
function validatepassword(){
    var pass = inputs[1]
    var temp = pass.value
    var capcount = 0
    var numcount = 0
    for(let i = 0; i < temp.length; i++){
        if(temp.codePointAt(i) >= 65 && temp.codePointAt(i) <= 90){
            capcount++
        }
        else if(temp.codePointAt(i) >= 48 && temp.codePointAt(i) <= 57){
            numcount++
        }
    }
    if(capcount == 0){
        alert("Password must contain atleast 1 uppercase character")
    }
    else if(temp.length > 8){
        alert("Password must be at most 8 characters")
    }
    else if(numcount < 1){
        alert("Password must contain at least 1 number")
    }
}
function validsubmit(){
    var id = inputs[0]
    var pass = inputs[1]
    if(id.value == ''){
        alert("User ID must be filled")
    }
    else if(pass.value == ''){
        alert("Password must be filled")
    }
}