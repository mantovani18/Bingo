let numerosCartela = [];

function gerarCartela() {

    numerosCartela = [];

    const cartela = document.getElementById("cartela");
    cartela.innerHTML = "";

    for (let i = 0; i < 25; i++) {

        const celula = document.createElement("div");
        celula.className = "celula";

        if (i === 12) {

            celula.classList.add("indio");
            celula.innerText = "ÍNDIO";

            numerosCartela.push("INDIO");

        } else {

            celula.innerText = "";

            celula.addEventListener("click", () => {

                // Se estiver marcada, desmarca
                if (celula.classList.contains("marcado")) {
                    celula.classList.remove("marcado");
                    verificarBingo();
                    return;
                }

                const numero = prompt("Digite o número para esta posição:");

                if (numero !== null && numero.trim() !== "") {

                    celula.innerText = numero;
                    celula.dataset.numero = numero;

                    numerosCartela[i] = numero;
                }
            });
        }

        cartela.appendChild(celula);
    }

    verificarBingo();
}

function marcarNumero() {

    const numero = document.getElementById("numeroSorteado").value.trim();

    if (!numero) {
        return;
    }

    const celulas = document.querySelectorAll(".celula");

    celulas.forEach(celula => {

        if (celula.dataset.numero === numero) {

            // Alterna entre marcar e desmarcar
            celula.classList.toggle("marcado");
        }
    });

    verificarBingo();

    document.getElementById("numeroSorteado").value = "";
}

function verificarBingo() {

    const celulas = document.querySelectorAll(".celula");

    let marcados = 0;

    celulas.forEach(celula => {

        if (
            celula.classList.contains("marcado") ||
            celula.classList.contains("indio")
        ) {
            marcados++;
        }
    });

    const status = document.getElementById("status");

    status.innerText = `Marcados: ${marcados}/25`;

    if (marcados === 25) {
        status.innerText = "🎉 BINGO!";
    }
}

// Cria a cartela automaticamente ao abrir
gerarCartela();