function validarCampo() {
    let campoA = parseInt(document.getElementById('campoA').value);
    let campoB = parseInt(document.getElementById('campoB').value);


    if (campoB > campoA) {
        alert('Válido! O campo B é maior que o campo A.');
        return true;
    } else {
        alert('Inválido! O campo B precisa ser maior que o campo A.');
        return false;
    }
}