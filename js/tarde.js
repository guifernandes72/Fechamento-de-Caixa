  document.getElementById("caixaForm").addEventListener("submit", function(e) {
            e.preventDefault();

            function formatarNumero(valor) {
                return parseFloat(valor.replace(",", ".")) || 0;
            }

            const maq1 = formatarNumero(document.getElementById("maq1").value);
            const maq2 = formatarNumero(document.getElementById("maq2").value);
            const maq3 = formatarNumero(document.getElementById("maq3").value);

            const doisReais = parseInt(document.getElementById("doisReais").value) || 0;
            const cincoReais = parseInt(document.getElementById("cincoReais").value) || 0;
            const dezReais = parseInt(document.getElementById("dezReais").value) || 0;
            const vinteReais = parseInt(document.getElementById("vinteReais").value) || 0;
            const cinquentaReais = parseInt(document.getElementById("cinquentaReais").value) || 0;
            const dinheiroBolo = formatarNumero(document.getElementById("dinheiroBolo").value);

            const pagamentos = formatarNumero(document.getElementById("pagamentos").value);

            const caixaManha = formatarNumero(document.getElementById("caixaManha").value);

            const totalDinheiro = (doisReais * 2) + (cincoReais * 5) + (dezReais * 10) + 
                                  (vinteReais * 20) + (cinquentaReais * 50) + dinheiroBolo;

            const fechamento = ( (maq1 + maq2 + maq3 + totalDinheiro + pagamentos) - 180) - caixaManha;

            // Meta do dia
            const metaTarde = 1500;

            document.getElementById("resultadoFechamento").innerText = `O total do Caixa foi de: R$ ${fechamento.toFixed(2).replace(".", ",")}`;

            if (fechamento >= metaTarde) {
                document.getElementById("resultadoMeta").innerText = "Parabéns, você bateu a meta! 😁😁";
            } else {
                document.getElementById("resultadoMeta").innerText = "Hoje não deu! 😞";
            }
        });