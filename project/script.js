function validation() {
    if (document.formfill.username.value=="") {
        document.getElementById('text').innerHTML="Please enter your username!";
        return false;
        
    }
 else if(document.formfill.username.value.length <6) {
        document.getElementById('text').innerHTML="At Least six letters!";
        return false;
        
    }
    else if(document.formfill.Email.value=="") {
        document.getElementById('text').innerHTML="Please, enter your email! ";
        return false;
        
    }
    else if(document.formfill.password.value=="") {
        document.getElementById('text').innerHTML="Please, password must be 6 digits! ";
        return false;
        
    }
    
    else if(document.formfill.cpassword.value.length <6 ) {
        document.getElementById('text').innerHTML=" Please, confirm your password!";
        return false;

        }
        else if(document.formfill.password.value !== document.formfill.cpassword.value) {
            document.getElementById('text').innerHTML="your password dosen't matched!";
            return false;
        }
        else if(document.formfill.password.value == document.formfill.password.value) {
            popup.classList.add("open-slide");
            return false;
        }

}
let popup = document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove('open-slide')
}
