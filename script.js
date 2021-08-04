const calculator = document.getElementById('calculator');

function bmi() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');   

    if(name !== '' && height !== '' && weight !== '') {
        alert ('Valor preenchido')
    } else {
        alert ('Preencha todos campos')
    }
}

calculator.addEventListener('click', bmi);