function expandImageText(){
    document.getElementById("QRCode").style.filter = "blur(4px)"
    document.getElementById("expand_image").style.visibility = "visible"
}

function undoExpandImageText(){
    document.getElementById("QRCode").style.filter = "blur(0px)"
    document.getElementById("expand_image").style.visibility = "hidden"
}

function openPopUp(){
    var popup = document.getElementById("popup")
    document.getElementById("teste").style.filter = "blur(10px)"
    popup.style.display = "flex"
    popup.style.animation = ".5s ease 0s 1 normal forwards running popupOpenAnimation"

}
function closePopUp(){
    document.getElementById("popup").style.display = "none"
    document.getElementById("teste").style.filter = "blur(0px)"
}