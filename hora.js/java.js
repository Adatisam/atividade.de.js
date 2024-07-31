function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var pe = window.document.getElementById('pe')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora <= 12) {
        img.src = "imagens/fotomanha.png"
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#FD8301'
        pe.style.color = 'black'
    } else if (hora >= 18 && hora <= 24) {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#252F3A'
        pe.style.color = 'white'
    }
}