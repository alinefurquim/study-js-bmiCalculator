const calculator = document.getElementById('calculator');

function bmi() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');   

    if(name !== '' && height !== '' && weight !== '') {
        const bmiValue = (weight / (height * height)).toFixed(2);

        let classification = '';

        if (bmiValue < 18.5) {
            classification = 'abaixo do peso';
        } else if (bmiValue < 25) {
            classification = 'com peso ideal. Parabéns!';
        } else if (bmiValue < 30) {
            classification = 'levemente acima do peso';
        } else if (bmiValue < 35) {
            classification = 'com obesidade grau I';
        } else if (bmiValue < 40) {
            classification = 'com obesidade grau II';
        } else {
            classification = 'com obesidade grau III. Cuidado!'
        }

        result.textContent = `${name} seu IMC é ${bmiValue} e você esta ${classification}`;
    } else {
        result.textContent = 'Preencha todos os campos';
    }
}

calculator.addEventListener('click', bmi);