

const generate = document.getElementById("generate-btn");

const adviceNum = document.getElementById("advice-num");

const advice = document.getElementById("advice-text")




generate.addEventListener("click", generateAdvice);



function generateAdvice() {


    fetch('https://api.adviceslip.com/advice')

    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) =>
    
        {   

            adviceNum.textContent = data.id;
            advice.textContent = data.advice;

        }
    
    ).catch(error => {

        console.log(error);

    })


} 


