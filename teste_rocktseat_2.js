let familia = {
    receita:[500, 850, 450, 536],
    despesa:[530, 100, 6600.66, 70, 55.56]
}
function soma(array){
    let total = 0
    
    for(let valor of array){
        total += valor
    }

    return total
}


function calcularBalaco(){
    const calcularReceira = soma(familia.receita)
    const calcularDespesa = soma(familia.despesa)
    const total = calcularReceira - calcularDespesa
    let mensagem = "Seu saldo foi de "
    const ok = total >= 0
    let balanco = "Negativo"
    if (ok) {
        balanco = "Positivo"       
    } 

    console.log(`Seu saldo é de R$ ${total} : ${balanco}`)
}

calcularBalaco()

/*let receita = [20, 10]
let despesa = [10, 15]
let totalReceita = 0
let totalDespesa = 0
let saldo = 0


for(var i = 0; i<receita.length; i++){

    totalReceita += receita[i]
}
//console.log("Total da receita da familia: " + totalReceita)

for(var i=0;i<despesa.length;i++){
    totalDespesa += despesa[i]
}

//console.log("Total da despesa da família: " + totalDespesa)

saldo = totalReceita - totalDespesa

if (totalReceita>totalDespesa) {
console.log("Seu saldo é positivo no valor de: " + saldo)    
} else {
    console.log("Seu saldo é negativo no valor de: " + saldo)
}


*/