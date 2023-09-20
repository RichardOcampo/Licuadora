let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let sonidosLicuadora = document.getElementById("blender-sound")
let botonLicuadora = document.getElementById("blender-button-sound")

function controlarLicuadora() {
    if(estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido"
        licuadora.classList.add("active")
        console.log("me prendiste")
    } else {
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active")
        console.log("me apagaste!")
    }
    hacerRuido()
}

function hacerRuido() {
    if(sonidosLicuadora.paused) {
        sonidosLicuadora.play()
        botonLicuadora.play()
    } else {
        botonLicuadora.play()
        sonidosLicuadora.pause()
        sonidosLicuadora.currentTime = 0
    }
}