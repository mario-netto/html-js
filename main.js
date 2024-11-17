//Codigo atualizado

document.addEventListener('DOMContentLoaded', function() {
    const formValor = document.querySelector('#form-valores')
    const valorA = document.querySelector('#idCampoA')
    const valorB = document.querySelector('#idCampoB')
    const successMessage = document.querySelector('.success-message')
    const errorMessage = document.querySelector('.error-message')

    formValor.addEventListener('submit', function(e) {
        e.preventDefault()

        if (valorB.value > valorA.value) {
            successMessage.style.display = 'block'
            successMessage.innerHTML = `O valor do campo <strong>B = ${valorB.value}</strong> é maior que valor do campo <strong>A = ${valorA.value}</strong>`
        } else {
            errorMessage.style.display = 'block'
            errorMessage.innerHTML = `O valor do campo <strong>B = ${valorB.value}</strong> é menor que valor do campo <strong>A = ${valorA.value}</strong>`
        }
    })
})

//codigo antigo

// const form = document.getElementById('form-valores');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const valorA = Number(document.getElementById('idCampoA').value);
//     const valorB = Number (document.getElementById('idCampoB').value);

//     const valorA2 = document.getElementById('idCampoA');
//     const valorB2 = document.getElementById('idCampoB');

//     const msgSucesso = `O valor do campo <strong>B=${valorB}</strong> é maior que valor do campo <strong>A=${valorA}</strong>`;
//     const msgErro = `O valor do campo <strong>B=${valorB}</strong> é menor que valor do campo <strong>A=${valorA}</strong>`;

//     let formTeste = false;

//     function valor(valorA, valorB){
//         return valorA < valorB;
//     }

//     const mS = document.querySelector('.success-message');
//     const mE = document.querySelector('.error-message');

//     formTeste = valor(valorA, valorB);

//     if (formTeste){
//         mS.innerHTML = msgSucesso;
//         mS.style.display = 'block';
//         mE.style.display = 'none';

//         valorA2.style.border = '';
//         mE.innerHTML = '';

//         valorA2.value = '';
//         valorB2.value = '';
//     } else {
//         valorA2.style.border = '1px solid red';
//         mE.innerHTML = msgErro;
//         mE.style.display = 'block';
//         mS.style.display = 'none';

//         valorB2.value = '';
//     }
// });