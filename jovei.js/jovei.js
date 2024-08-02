function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resposta')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Vereifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                //kid
                img.setAttribute('src', 'nome.da.foto')
            } else if (idade < 21) {
                //adol
                img.setAttribute('src', 'nome.da.foto')
            } else if (idade < 50) {
                //adult
                img.setAttribute('src', 'nome.da.foto')
            } else {
                //velho
                img.setAttribute('src', 'nome.da.foto')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //kid
                img.setAttribute('src', 'nome.da.foto')
            } else if (idade < 21) {
                //adol
                img.setAttribute('src', 'nome.da.foto')
            } else if (idade < 50) {
                //adult
                img.setAttribute('src', 'nome.da.foto')
            } else {
                //velho
                img.setAttribute('src', 'nome.da.foto')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}