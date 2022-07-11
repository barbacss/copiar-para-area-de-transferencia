function copiar() {
    /* Seleciona o Input */
    var copyText = document.getElementById("myInput");

    /* Seleciona o texto do Input */
    copyText.select();
    /* Para dispositivos móveis */
    copyText.setSelectionRange(0, 99999);

    /* Copia o texto selecionado */
    navigator.clipboard.writeText(copyText.value);

    /* Alerta texto copiado */
    alert("Texto copiado com sucesso! Cole em qualquer lugar.");
}