var inputs = document.getElementsByTagName('input')
function isalpha(){
    var mail = inputs[0].value
    if((mail.codePointAt(0) >= 'A' && mail.codePointAt(0) <= 'Z') && 
    (mail.codePointAt(0) >= 'a' && mail.codePointAt(0) <= 'z')){
        return true
    }
    return false
}
function validatemail(){
    var email = inputs[0].value
    var len = email.length
    var atidx = -1
    var dotidx = -1
    for(let i = 0 ; i < email.length ; ++i){
        if(email[i] == '@'){
            atidx = i
        }
        else if(email[i] == '.'){
            dotidx = i
        }
    }
    if(atidx > dotidx || email[len-1] == '.' || email[atidx+1] == '.'){
        alert("Email invalid")
    }
}
function validatecountry(){
    var countryidx = document.getElementById('country').selectedIndex
    if(countryidx == 0){
        alert("Please fill in the country")
    }
}
function validatedob(){
    var dob = inputs[1].valueAsDate
    var datenow = new Date()
    if(datenow.getFullYear() - dob.getFullYear() < 12){
        alert("You have to be 12 years of age to play the game")
    }
}
function validateid(){
    var id = inputs[2].value
    var len = id.length
    if(len > 15){
        alert("Username must be atmost 15 characters")
    }
}
function validatepassword(){
    var pass = inputs[3].value
    var capcount = 0
    var numcount = 0
    for(let i = 0; i < pass.length; i++){
        if(pass.codePointAt(i) >= 65 && pass.codePointAt(i) <= 90){
            capcount++
        }
        else if(pass.codePointAt(i) >= 48 && pass.codePointAt(i) <= 57){
            numcount++
        }
    }
    if(capcount == 0){
        alert("Password must contain atleast 1 uppercase character")
    }
    else if(pass.length > 8){
        alert("Password must be at most 8 characters")
    }
    else if(numcount < 1){
        alert("Password must contain at least 1 number")
    }
}
function revalpassword(){
    var pass = inputs[3].value
    var pass2 = inputs[4].value
    if(pass2 != pass){
        alert("Password must match")
    }
}
function validateform(){
    var mail = inputs[0].value
    var countryidx = document.getElementById('country').selectedIndex
    var dob = inputs[1].value
    console.log(dob)
    var id = inputs[2].value
    var pass1 = inputs[3].value
    var pass2 = inputs[4].value
    var checkbox = inputs[5]
    if(mail == ''){
        alert("Please fill in your e-mail")
    }
    else if(dob == ""){
        alert("Please fill in your date of birth")
    }
    else if(countryidx == 0){
        alert("Please fill in the country")
    }
    else if(id == ''){
        alert("Please fill in your new username")
    }
    else if(pass1 == ''){
        alert("Please fill in your new password")
    }
    else if(!checkbox.checked){
        alert("Please check the box")
    }
}