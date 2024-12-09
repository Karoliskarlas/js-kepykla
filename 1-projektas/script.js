let claculateButton = document.getElementById('calculate')

claculateButton.addEventListener('click', function () {
    // console.log('clicked')
    let employeeCount = parseInt(document.getElementById('employee-count').value);
    let employeeMakesLoavesPerDay = parseInt(document.getElementById('loaves-per-employee').value);
    let orderCounts = parseInt(document.getElementById('order-count').value);

    let bakeryTotal = employeeCount * employeeMakesLoavesPerDay;
    let isBakeryGonaMakeIt = bakeryTotal >= orderCounts;

    // let logInfo= {
    //     bakeryTotal,
    //     isBakeryGonaMakeIt
    // }
    // console.log(logInfo)

    let resultDiv = document.getElementById('results');
    // console.log(resultDiv)
    resultDiv.innerHTML = `<p><strong> kepykla per diena  </strong>${bakeryTotal}</p>`;
    resultDiv.innerHTML = `<p><strong> kepykla per diena spės  pagaminti: </strong>${bakeryTotal} kepalu </p>`;
    resultDiv.innerHTML += `<p><strong>jai reikia spėti pagaminti:</strong> ${orderCounts} kepalų </p> `;
    resultDiv.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${isBakeryGonaMakeIt ?'taip' :'ne'}</P>`
});

document.getElementById('employee-count').addEventListener('keyup', function(event){
// console.log('reiksme pasikeite');
let inputValue = (event.target.valueAsNumber);

if(inputValue < 0){
    console.log(event.target)
    event.target.classList.add('error')
    event.target.nextElementSibling.classList.add('show');
} else{
    console.log(event.target)
    event.target.classList.remove('error')
    event.target.nextElementSibling.classList.remove('show');
}
})

document.getElementById('loaves-per-employee').addEventListener('keyup',function(event){
    let inputValue = (event.target.valueAsNumber)

    if (inputValue < 0) {
        console.log(event.target)
        event.target. classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else{
        console.log(event.target)
        event.target. classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
})

document.getElementById('order-count').addEventListener('keyup', function(event) {
    let inputValue = (event.target.valueAsNumber)

    if (inputValue < 0) {
        console.log(event.target)
        event.target. classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else{
        console.log(event.target)
        event.target. classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
})
document.getElementById('reset').addEventListener('click', function(){
    console.log('clicked')
    document.getElementById('employee-count').value = 0;
    document.getElementById('loaves-per-employee').value = 0;
    document.getElementById('order-count').value = 0;
    document.getElementById('results') .innerHTML = ' <p>Kol kas nieko nėra.</p>';
});

