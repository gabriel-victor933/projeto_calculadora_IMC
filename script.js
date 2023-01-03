function enviar() {

    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    let texto = "";

    if (!altura || !peso){
        alert("insira os valores!")
    } else
    {
        const imc = peso/(altura*altura)

        if(imc < 18.5){
            texto = "abaixo do peso normal";
        } else if (imc < 24.9) {
            texto = "com o peso normal";
        } else if (imc < 29.9) {
            texto = "acima do peso normal"
        } else {
            texto = "com obesidade"
        }
    

        alert("Seu imc é: " + imc.toFixed(2) + " você está " + texto);
    }

    

}