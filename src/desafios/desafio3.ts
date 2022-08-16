// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLInputElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLInputElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;
let saldo = 0

campoSaldo.innerText = String(saldo)

function somarAoSaldo(soma: number): void {
    saldo += soma;
    campoSaldo.innerHTML = String(saldo);
}

function limparSaldo(): void {
    campoSaldo.innerHTML = "0";
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
