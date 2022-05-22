

/*Código de javascript generado para el taller final de html, css3 y javascript en canteras nivel 1
Realizado por: Jonathan Daniel Pinilla Forero*/



function main() {//función main que verifica cual es el color actual tomando la variable de la memoria solo si existe, si no se mantiene el tema predeterminado
    var color;
    if (localStorage.getItem("colorActual") != null && localStorage.getItem("colorActual") == "rojo") {
        clicRojo();
    } else if (localStorage.getItem("colorActual") != null && localStorage.getItem("colorActual") == "azul") {
        clicAzul();
    } else if (localStorage.getItem("colorActual") != null && localStorage.getItem("colorActual") == "verde") {
        clicVerde();
    } else {
        var color = localStorage.setItem("colorActual", "default");
    }
}


function clicRojo() {//cambia a color rojo y guarda la variable local para que sea mantenido este color en los otros html
    var color = "rojo";
    localStorage.setItem("colorActual", color);
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "red";
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "red"
    }
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page != "portafolio.html"){
        document.getElementById("tit1").style.color = "red";
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == "indexhv.html") {
            document.getElementById("tit2").style.color = "red";
            document.getElementById("tit3").style.color = "red";
        } else {
            document.getElementById("tit2").style.color = "white";
            document.getElementById("tit2").style.backgroundColor = "red";
            document.getElementById("tit3").style.color = "white";
            document.getElementById("tit3").style.backgroundColor = "red";
        }
    
        if (document.getElementById("tit4") != null) {
            document.getElementById("tit4").style.color = "white";
            document.getElementById("tit4").style.backgroundColor = "red";
        }
        if (document.getElementById("tit5") != null) {
            document.getElementById("tit5").style.color = "white";
            document.getElementById("tit5").style.backgroundColor = "red";
        }
    }
    document.getElementById("icoTema").style.color = "red"
    document.getElementById("pg1").style.backgroundColor = "#413737";
    document.getElementById("pg1").style.color = "#FFFFFF";
    document.getElementById("pg2").style.backgroundColor = "#413737";
    document.getElementById("pg2").style.color = "#FFFFFF";
    document.getElementById("pg3").style.backgroundColor = "#413737";
    document.getElementById("pg3").style.color = "#FFFFFF";
    document.getElementById("pg4").style.backgroundColor = "#413737";
    document.getElementById("pg4").style.color = "#FFFFFF";
    document.getElementById("pg5").style.backgroundColor = "#413737";
    document.getElementById("pg5").style.color = "#FFFFFF";
    document.getElementById("pg6").style.backgroundColor = "#413737";
    document.getElementById("pg6").style.color = "#FFFFFF";
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "red";
    }
    
}

function clicAzul() {//cambia a color rojo y guarda la variable local para que sea mantenido este color en los otros html
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "blue";
    var color = "azul";
    localStorage.setItem("colorActual", color);
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "blue";
    }
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page != "portafolio.html"){
        document.getElementById("tit1").style.color = "blue";
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == "indexhv.html") {
            document.getElementById("tit2").style.color = "blue";
            document.getElementById("tit3").style.color = "blue";
        } else {
            document.getElementById("tit2").style.color = "white";
            document.getElementById("tit2").style.backgroundColor = "blue";
            document.getElementById("tit3").style.color = "white";
            document.getElementById("tit3").style.backgroundColor = "blue";
        }
        if (document.getElementById("tit4") != null) {
            document.getElementById("tit4").style.color = "white";
            document.getElementById("tit4").style.backgroundColor = "blue";
        }
        if (document.getElementById("tit5") != null) {
            document.getElementById("tit5").style.color = "white";
            document.getElementById("tit5").style.backgroundColor = "blue";
        }
    }
    
    document.getElementById("icoTema").style.color = "blue";
    document.getElementById("pg1").style.backgroundColor = "#413737";
    document.getElementById("pg1").style.color = "#FFFFFF";
    document.getElementById("pg2").style.backgroundColor = "#413737";
    document.getElementById("pg2").style.color = "#FFFFFF";
    document.getElementById("pg3").style.backgroundColor = "#413737";
    document.getElementById("pg3").style.color = "#FFFFFF";
    document.getElementById("pg4").style.backgroundColor = "#413737";
    document.getElementById("pg4").style.color = "#FFFFFF";
    document.getElementById("pg5").style.backgroundColor = "#413737";
    document.getElementById("pg5").style.color = "#FFFFFF";
    document.getElementById("pg6").style.backgroundColor = "#413737";
    document.getElementById("pg6").style.color = "#FFFFFF";
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "blue";
    }
    

}

function clicVerde() {//cambia a color rojo y guarda la variable local para que sea mantenido este color en los otros html
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "green";
    var color = "verde";
    localStorage.setItem("colorActual", color);
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "green";
    }
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page != "portafolio.html"){
        document.getElementById("tit1").style.color = "green";
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "indexhv.html") {
        document.getElementById("tit2").style.color = "green";
        document.getElementById("tit3").style.color = "green";
    } else {
        document.getElementById("tit2").style.color = "white";
        document.getElementById("tit2").style.backgroundColor = "green";
        document.getElementById("tit3").style.color = "white";
        document.getElementById("tit3").style.backgroundColor = "green";
    }
    if (document.getElementById("tit4") != null) {
        document.getElementById("tit4").style.color = "white";
        document.getElementById("tit4").style.backgroundColor = "green";
    }
    if (document.getElementById("tit5") != null) {
        document.getElementById("tit5").style.color = "white";
        document.getElementById("tit5").style.backgroundColor = "green";
    }
    }
    
    document.getElementById("icoTema").style.color = "green";
    document.getElementById("pg1").style.backgroundColor = "#413737";
    document.getElementById("pg1").style.color = "#FFFFFF";
    document.getElementById("pg2").style.backgroundColor = "#413737";
    document.getElementById("pg2").style.color = "#FFFFFF";
    document.getElementById("pg3").style.backgroundColor = "#413737";
    document.getElementById("pg3").style.color = "#FFFFFF";
    document.getElementById("pg4").style.backgroundColor = "#413737";
    document.getElementById("pg4").style.color = "#FFFFFF";
    document.getElementById("pg5").style.backgroundColor = "#413737";
    document.getElementById("pg5").style.color = "#FFFFFF";
    document.getElementById("pg6").style.backgroundColor = "#413737";
    document.getElementById("pg6").style.color = "#FFFFFF";
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "green";
    }
    
}

function colorDefault() {//Color default de la página por si se desea volver a este
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "#413737";
    var color = "default";
    localStorage.setItem("colorActual", color);
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "#FF5757";
    }
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page != "portafolio.html"){
        document.getElementById("tit1").style.color = "#FF5757";
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == "indexhv.html") {
            document.getElementById("tit2").style.color = "#FF5757";
            document.getElementById("tit3").style.color = "#FF5757";
        } else {
            document.getElementById("tit2").style.color = "white";
            document.getElementById("tit2").style.backgroundColor = "#FF5757";
            document.getElementById("tit3").style.color = "white";
            document.getElementById("tit3").style.backgroundColor = "#FF5757";
        }
        if (document.getElementById("tit4") != null) {
            document.getElementById("tit4").style.color = "white";
            document.getElementById("tit4").style.backgroundColor = "#FF5757";
        }
        if (document.getElementById("tit5") != null) {
            document.getElementById("tit5").style.color = "white";
            document.getElementById("tit5").style.backgroundColor = "#FF5757";
        }
    }
    
    document.getElementById("icoTema").style.color = "#FF5757";
    document.getElementById("pg1").style.backgroundColor = "#FF5757";
    document.getElementById("pg1").style.color = "#413737";
    document.getElementById("pg2").style.backgroundColor = "#FF5757";
    document.getElementById("pg2").style.color = "#413737";
    document.getElementById("pg3").style.backgroundColor = "#FF5757";
    document.getElementById("pg3").style.color = "#413737";
    document.getElementById("pg4").style.backgroundColor = "#FF5757";
    document.getElementById("pg4").style.color = "#413737";
    document.getElementById("pg5").style.backgroundColor = "#FF5757";
    document.getElementById("pg5").style.color = "#413737";
    document.getElementById("pg6").style.backgroundColor = "#FF5757";
    document.getElementById("pg6").style.color = "#413737";
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "#FF5757";
    }
    
}


//Acordeon
function acord() {
    var ac = document.getElementsByClassName("acordeon");
    var i;

    for (i = 0; i < ac.length; i++) {
        //detecta el click
        ac[i].addEventListener("click", function () {

            /* quita o pone la clase active */
            this.classList.toggle("active");

            /* oculta o muestra el panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

//boton formulario
function formulario() {
    nombre = document.getElementById("usuario").value;
    email = document.getElementById("email").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;

    let alerta = "";
    if (nombre == "") {
        alerta += "Nombre\n";
    }
    if (email == "") {
        alerta += "Correo electrónico\n";
    }
    if (asunto == "") {
        alerta += "Asunto\n";
    }
    if (mensaje == "") {
        alerta += "Mensaje\n";
    }

    if (alerta != "") {
        alert("Falta por rellenar los siquientes campos:\n" + alerta);
    } else {
        alert("Enviado");
        document.getElementById("formularioContacto").reset();
        console.log("Nombre: " + nombre + "\nEmail: " + email + "\nAsunto: " + asunto + "\nMensaje: " + mensaje);
    }
}

function resetearForm() {
    document.getElementById("formularioContacto").reset();
}

//redireccionar mediente tag button

function redirButton() {
    window.location.href = './inicioTF.html';
}

//Funcion para las frutas
function frutas(event) {
    //console.log(event.value % 2);
    if ((event.value % 2) == 0) {
        console.log(document.getElementById("listaFrutas").children[0]);
        for (let i = 0; i < document.getElementById("listaFrutas").children.length; i++) {
            if (i % 2 == 0) {
                document.getElementById("listaFrutas").children[i].style.backgroundColor = "red";
            } else {
                document.getElementById("listaFrutas").children[i].style.backgroundColor = "#413737";
            }

        }
    } else {
        for (let i = 0; i <= document.getElementById("listaFrutas").children.length; i++) {
            if (i % 2 != 0) {
                document.getElementById("listaFrutas").children[i].style.backgroundColor = "red";
            } else {
                document.getElementById("listaFrutas").children[i].style.backgroundColor = "#413737";
            }
        }
    }


}


//Funciones para la sección de portafolio dentro de la hoja de vida
function botonTalleres(item){
    //volver a portafolio pantalla donde se elige si ver talleres de java o pseint
    if(item.id == "volverpf"){
        window.location.href = './portafolio.html';
    }
    //ir a talleres de java
    if(item.id == "java"){
        window.location.href = './java.html';
    }
    //ir a talleres pseint
    if(item.id == "pseint"){
        window.location.href = './pseint.html';
    }
    //Enlaces git taller de Condicionales en pseint con funciones
    if(item.id == "punto2Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_2.psc','_blank');
    }
    if(item.id == "punto3Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_3.psc','_blank');
    }
    if(item.id == "punto4Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_4.psc','_blank');
    }
    if(item.id == "punto5Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_5.psc','_blank');
    }
    if(item.id == "punto6Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_6.psc','_blank');
    }
    if(item.id == "punto7Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_7.psc','_blank');
    }
    if(item.id == "punto8Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_8.psc','_blank');
    }
    if(item.id == "punto9Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_9.psc','_blank');
    }
    if(item.id == "punto10Tco"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CondicionalesFunciones/punto_10.psc','_blank');
    }
    //Enlaces git taller de Cilos en pseint con funciones
    if(item.id == "punto7Tci"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CiclosFunciones/punto_7.psc','_blank');
    }
    if(item.id == "punto8Tci"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/CiclosFunciones/punto_8.psc','_blank');
    }
    //Enlaces git taller de Arreglos en pseint con funciones
    if(item.id == "punto2Ta"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/ArreglosFunciones/punto_2.psc','_blank');
    }
    if(item.id == "punto3Ta"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/ArreglosFunciones/punto_3.psc','_blank');
    }
    if(item.id == "punto4Ta"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/ArreglosFunciones/punto_4.psc','_blank');
    }
    if(item.id == "punto5Ta"){
        window.open('https://github.com/JonathanPinilla/TallerGit/blob/taller5/TallerFunciones/ArreglosFunciones/punto_5.psc','_blank');
    }
    //Enlaces git java punto 3 taller 2
    if(item.id == "punto3T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto3/PersonaFiesta.java','_blank');
    }
    //Enlaces git java punto 4 taller 2
    if(item.id == "punto4T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto4/Pelicula.java','_blank');
    }
    //Enlaces git java punto 5 taller 2 clases 2 y 3
    if(item.id == "punto5T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto5/Factura.java','_blank');
    }
    if(item.id == "punto5T_2j_C3"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto5/Productos.java','_blank');
    }
    //Enlaces git java punto 6 taller 2 clases 2 y 3
    if(item.id == "punto6T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto6/EntradaTaller.java','_blank');
    }
    if(item.id == "punto6T_2j_C3"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto6/SalidaTaller.java','_blank');
    }
    //Enlaces git java punto 7 taller 2
    if(item.id == "punto7T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto7/Imc.java','_blank');
    }
    //Enlaces git java punto 8 taller 2
    if(item.id == "punto8T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto8/Pastel.java','_blank');
    }
    //Enlaces git java punto 9 taller 2
    if(item.id == "punto9T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto9/CalculoArea.java','_blank');
    }
    //Enlaces git java punto 10 taller 2
    if(item.id == "punto10T_2j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller2/src/Punto10/CuentaBancaria.java','_blank');
    }
    //Enlaces git java punto 6 taller 3
    if(item.id == "punto6T_3j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller3/src/Punto6/Contactos.java','_blank');
    }
    //Enlaces git java punto 7 taller 3
    if(item.id == "punto7T_3j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller3/src/Punto7/Vehiculo.java','_blank');
    }
    //Enlaces git java punto 8 taller 3
    if(item.id == "punto8T_3j_C2"){
        window.open('https://github.com/JonathanPinilla/TalleresJava/blob/main/Taller3/src/Punto8/Estudiante.java','_blank');
    }
}
