const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)        //  This value is in string thats why we need to convert it into int = parseINT
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        // results.innerHTML = `please give a valid height ${height}`;
        alert(`please give a valid height ${height}`);
    } else  if (weight === '' || weight < 0 || isNaN(weight)) {
        // results.innerHTML = `please give a valid weight ${weight}`;
        alert(`please give a valid height ${weight}`);

    } else {
        const bmi = (weight / ((height*weight)/10000) ).toFixed(2)
        results.innerHTML = `Your BMI is ${bmi}`                  //  To show the results
        results.style.backgroundColor = '#212121'
    }
   

});

// 