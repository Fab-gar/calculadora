function Limpiar(){
    document.getElementById('micalculadorajs').reset();
}
function sumar(){
    let x = parseInt(document.getElementById('2').value)
    let y =parseInt(document.getElementById('1').value)
    document.getElementById('resultado'). innerHTML=x+y;
}
function restar(){
    var x = parseInt(document.getElementById('2').value)
    var y = parseInt(document.getElementById('1').value)
    document.getElementById('resultado'). innerHTML=x-y;
}
function multiplicar(){
    let x = parseInt(document.getElementById('2').value)
    let y = parseInt(document.getElementById('1').value)
    document.getElementById('resultado'). innerHTML=x*y;
}
function dividir(){
    let x = parseInt(document.getElementById('2').value)
    let y = parseInt(document.getElementById('1').value)
    document.getElementById('resultado'). innerHTML=x/y;
}