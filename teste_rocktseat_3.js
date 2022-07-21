/*
let temperaturaF = "89.5 F"
let temperaturaConvertida = parseFloat(temperatura)

let C_para_F = celsius * 9/5 + 32

*/
//converter String para int


function transforDeGrau(f_ou_c){
    const celsiusExiste = f_ou_c.toUpperCase().includes('C')
    const fahfahrenheitExiste = f_ou_c.toUpperCase().includes('F') 
    
    if(!celsiusExiste && !fahfahrenheitExiste){
        throw new Error('Grau não identificado')
    }

    let updateTemperatura = Number( f_ou_c.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let simboloTemperatura = 'C'

    return formula(updateTemperatura) + simboloTemperatura

}
try {
    transforDeGrau('50e')
} catch (error) {
    console.log(error.message)
}
