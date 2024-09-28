const form = document.getElementById("forma");

function calculo(campoa, campob) {
    campoa = parseFloat(document.getElementById("campoA").value);
    campob = parseFloat(document.getElementById("campoB").value);
    let resultado = campoa < campob
    return resultado
}
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (calculo() === true) {
        alert("PARABENS!!! o numero B é maior que o numero A");
    } else {
        alert("Que pena o numero B não é maior que o numero A");
    }
})

console.log(form);