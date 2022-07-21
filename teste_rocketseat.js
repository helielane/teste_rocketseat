var notas //= prompt("Digite sua nota");

function pegueNota (notas){
let notasA = notas>=90 && notas<=100
let notasB = notas>=80 && notas<=89
let notasC = notas>=70 && notas<=79
let notasD = notas>=60 && notas<=69
let notasF = notas<=59 && notas>=0

let notaFinal ;

if (notasA){
notaFinal ="A" 
}   else if(notasB){
    notaFinal = "B"
}   else if(notasC){
    notaFinal = "C"
}   else if(notasD){
    notaFinal = "D"
}   else if (notasF){
    notaFinal = "F"   
}   else{
    notaFinal = "Nota inválida"
}
return notaFinal
}

console.log (pegueNota(101))
console.log (pegueNota(99))
console.log (pegueNota(88))
console.log (pegueNota(77))
console.log (pegueNota(66))
console.log (pegueNota(55))
console.log (pegueNota(-1))