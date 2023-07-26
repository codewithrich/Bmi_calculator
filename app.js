let calculate1=() => {

    const name = "richardson"
    const height = Number(document.querySelector("#Height").value)
    const weight = Number(document.querySelector("#Weight").value)
    finalResult = document.querySelector("#Result");
    bmi =  `${ weight / height }`



    finalResult.innerHTML = `Hey ${name}, Your BMI is ${bmi}`
}

