let form = document.getElementById("Forma")

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensgValid = `parabens o numero ${(document.getElementById("campo_B")).value} é maior que o numero ${(document.getElementById("campo_A")).value}`
    const mensgInValid = `que pena o numero ${(document.getElementById("campo_B")).value} não é maior que o numero ${(document.getElementById("campo_A")).value}`

    let validaForm = ((document.getElementById("campo_A")).value < (document.getElementById("campo_B")).value) 

    if (validaForm === false) {
        alert(mensgInValid)
    } else {
        alert(mensgValid)
    }
})
console.log(form);