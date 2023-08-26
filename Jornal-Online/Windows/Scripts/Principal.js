function Func1() {
    var Senha = document.getElementsByName("senha")[0].value;
    var Usuario = document.getElementsByName("usuario")[0].value;
   
    if (Usuario == "ADM"){
        if (Senha == "AB1245SD"){
            alert("Bem vindo " + Usuario);
        }
        else{
            alert("Usuario ou Senha Invalidos!")
        }    
    }
    else{
        alert("Usuario ou Senha Invalidos!")
    }
}
