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