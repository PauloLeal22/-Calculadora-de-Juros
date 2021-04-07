let capital = document.querySelector('input#txt-capital')
let juros = document.querySelector('input#txt-juros')
let tempo = document.querySelector('input#txt-tempo')
let btnJurosSimples = document.querySelector('input#juros-simples')
let btnJurosComp = document.querySelector('input#juros-comp')
let btnCalcular = document.querySelector('button#calcular')
let areaResult = document.querySelector('div.area-resultado')
let result = document.createElement('h4')
let token = 0

btnCalcular.addEventListener('click', encaminhar)
btnJurosSimples.addEventListener('click', verificar1)
btnJurosComp.addEventListener('click', verificar2)


function verificar1(){
    btnJurosComp.checked = false
}

function verificar2(){
    btnJurosSimples.checked = false
}

function encaminhar(){
    if(capital.value === '', juros.value === '', tempo.value === ''){
        alert('Preencha os campos necessários!')
    }else{
        if(btnJurosSimples.checked){
            calcularJurosSimples(capital.value, juros.value, tempo.value)
        }else if(btnJurosComp.checked){
            calcularJurosComposto(capital.value, juros.value, tempo.value)
        }
    }
}

function calcularJurosSimples(c, i, t){
    if(token === 0){
        i = i / 100
        let juros = c * i * t
        let montante =+ c + juros        
        result.innerText = `O montante será ${montante.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} e o Juros total ${juros.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        areaResult.appendChild(result)
        areaResult.style.backgroundColor = 'lightgreen'
        btnCalcular.style.backgroundColor = 'lightcoral'
        btnCalcular.innerHTML = 'LIMPAR'
        token = 1
    }else{
        limparCampos()
        token = 0
    }
}

function calcularJurosComposto(c, i, t){
    if(token === 0){
        i = i / 100
        let juros = Math.pow((1 + i), t)
        let montante =+ c * juros        
        result.innerText = `O montante será ${montante.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} e o Juros total ${(montante - c).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        areaResult.appendChild(result)
        areaResult.style.backgroundColor = 'lightgreen'
        btnCalcular.style.backgroundColor = 'lightcoral'
        btnCalcular.innerHTML = 'LIMPAR'
        token = 1
    }else{
        limparCampos()
        token = 0
    }
}

function limparCampos(){
    capital.value = ''
    juros.value = ''
    tempo.value = ''
    btnCalcular.innerHTML = 'CALCULAR'
    btnCalcular.style.backgroundColor = 'darkorange'
    btnJurosSimples.checked = false
    btnJurosComp.checked = false
    areaResult.style.backgroundColor = '#ffff'
    result.innerText = ''
}