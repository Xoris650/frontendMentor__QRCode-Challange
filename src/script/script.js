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
    popup.style.display = "flex"
    popup.style.animation = ".7s ease 0s 1 normal forwards running popupAnimation"

}
function closePopUp(){
    document.getElementById("popup").style.display = "none"
}