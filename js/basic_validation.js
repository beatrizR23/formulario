// variables usuario, contraseña, confirmar contraseña 
let uname;
let pwd;
let rpwd;

//Abrir formulario. 
function openForm(){
    document.getElementById("formBox").style.display='flex';
}

//Cerrar formulario.  Limpia campos. Desactiva campos contraseña
function closeForm(){
    document.getElementById('formBox').style.display='none';
    document.querySelector("#username").value = "";
    document.querySelector("#pword").value = "";
    document.querySelector("#rpword").value = "";
    document.querySelector("#pword").disabled = true;
    document.querySelector("#rpword").disabled = true;

}

//Valida Usuario. Si el campo NO está vacío, guarda value, activa el campo siguiente
//Si está vacío, vacía resto de campos y desactiva
function validUname(){
    if (document.querySelector("#username").value != ""){
        uname = document.querySelector("#username").value;
        document.querySelector("#pword").disabled = false;
    }else if(document.querySelector("#username").value == ""){
        document.querySelector("#pword").value = "";
        document.querySelector("#rpword").value = "";
        document.querySelector("#pword").disabled = true;
        document.querySelector("#rpword").disabled = true;
    }
}

//Valida Contraseña. Si el campo NO está vacío, guarda value, activa siguiente; 
//si ESTÁ vacío, desactiva siguiente y vacia
function validPword(){

    compruebPassword();

    // if (document.querySelector("#pword").value != ""){
    //     // pwd = document.querySelector("#pword").value;
    //     // document.querySelector("#rpword").disabled = false;
    // }
    // else {
    //     // document.querySelector("#pword:focus").style.backgroundColor = "#fff"; ==> PENDIENTE
    //     document.querySelector("#rpword").style.backgroundColor = "#fff";
    //     document.querySelector("#rpword").value = "";
    //     document.querySelector("#rpword").disabled = true;
    // }
    
}

function confirmPword(){
    
    compruebPassword();

    // if (document.querySelector("#pword").value != ""){
    //     rpwd = document.querySelector("#rpword").value;
    //     if (pwd == rpwd){
    //         document.querySelector("#rpword").style.backgroundColor = "#8bff93";
    //         document.querySelector("#pword").style.backgroundColor = "#8bff93";
    //     }
    // }
}

function compruebPassword(){
    if (document.querySelector("#pword").value != ""){
            pwd = document.querySelector("#pword").value;
            document.querySelector("#rpword").disabled = false;
            if(document.querySelector("#rpword").value != ""){
                rpwd = document.querySelector("#rpword").value;
                if (pwd == rpwd){
                    document.querySelector("#pword").style.backgroundColor = "#8bff93";
                    document.querySelector("#rpword").style.backgroundColor = "#8bff93";
                }else{
                    document.querySelector("#pword").style.backgroundColor = "tomato";
                    document.querySelector("#rpword").style.backgroundColor = "tomato";
                }
            }
        }
        else{
            document.querySelector("#pword").style.backgroundColor = "#fff";
            document.querySelector("#rpword").style.backgroundColor = "#fff";
            document.querySelector("#rpword").value = "";
            document.querySelector("#rpword").disabled = true;
        }
 }


    // if (pwd == rpwd){    
    //     document.querySelector("#nextStep").disabled = false;
    //     document.querySelector(".test").style.backgroundColor = "#8bff93"; /*verde*/
    //     // document.querySelector("#pword").style.backgroundColor = "#8bff93";
    // }
    // else if(document.querySelector("#rpword").value == ""){
    //     // document.querySelector(".test").style.backgroundColor = "#fff";
    //     document.querySelector("input:valid").style.backgroundColor = "#fff";
    // }
    // else{
    //     document.querySelector("#nextStep").disabled = true;
    //     document.querySelector(".test").style.backgroundColor = "tomato";
    //     document.querySelector("input:valid").style.backgroundColor = "#fff";
    // }
    //}

