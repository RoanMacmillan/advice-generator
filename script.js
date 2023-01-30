

const generate = document.querySelector(".btn-wrapper");
const adviceNum = document.getElementById("advice-num");
const advice = document.getElementById("advice-quote")
const spinner = document.querySelector('.spinner');
generate.addEventListener("click", generateAdvice);



function generateAdvice() {

    advice.style.opacity = '0';
    spinner.style.display = 'flex';


    fetch('https://api.adviceslip.com/advice')

    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) =>
    
        {   
            spinner.style.display = 'none';
            advice.style.opacity = '1';

            adviceNum.textContent = ` #${data.id}`;
            advice.textContent = data.advice;

        }
    
    ).catch(error => {

        console.log(error);

    })


} 


