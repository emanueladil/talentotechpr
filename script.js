function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const peso1 = parseFloat(document.getElementById('peso1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const peso2 = parseFloat(document.getElementById('peso2').value);

    const media = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2);
    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)}`;
}
