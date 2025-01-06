function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  22 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
               //BOM DIA!
    img.src = 'manha.jpg'
    document.body.style.background = '#bbafa0'    
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
img.src = 'tarde.jpg'
document.body.style.background = '#aba26b'
} else
    //BOA NOITE
img.src = 'noite.jpg'
document.body.style.background = '#6271a6'
}
