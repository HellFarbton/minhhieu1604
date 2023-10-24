// coding implementation
function send(){
    var email= document.getElementById("email").value;
    var rate = document.getElementById("rate").value;
    var comment = document.getElementById("com").value;

    if(!isEmail(email)){
        alert("nhap lai email !\n");
        return;
    }

    if(!isRate(rate)){
        alert("nhap lai rate !\n");
        return;
    }
    if(comment == ""){
        alert("nhap comment !");
        return;
    }
    var inf = confirm("INFORMATION" + "\n" + email+"\n"+comment+"\n"+rate);
    if(inf==1){
        alert("thong tin da duoc gui");
    }
    function isEmail(value){
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    }
    function isRate(value){
        return /\d{1,3}/.test(value);
    }    
}

// end coding implementation