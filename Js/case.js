function updateCaseNumber(isIncrease) {
	const caseNumberField = document.getElementById('case-number-field');
	const caseNumberString = caseNumberField.value;
	const previousCaseNumber = parseInt(caseNumberString);
	console.log(previousCaseNumber);

	let newCaseNumber;

	if (isIncrease) {
		newCaseNumber = previousCaseNumber + 1;
	} else {
		newCaseNumber = previousCaseNumber - 1;
	}

	caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
	const caseTotalPrice = newCaseNumber * 59;

	const caseTotalElement = document.getElementById('case-total');
	caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('case-btn-plus').addEventListener('click', function () {
   const newCaseNumber = updateCaseNumber(true);
   updateCaseTotalPrice(newCaseNumber);
   calculateTotal();
  //  const caseTotalPrice = newCaseNumber * 59;
   
  //  const caseTotalElement = document.getElementById('case-total');
  //  caseTotalElement.innerText = caseTotalPrice;
});
document.getElementById('case-btn-minus').addEventListener('click', function () {
  const newCaseNumber =  updateCaseNumber(false);
  updateCaseTotalPrice(newCaseNumber);
  calculateTotal();
			// const caseTotalPrice = newCaseNumber * 59;

			// const caseTotalElement = document.getElementById('case-total');
			// caseTotalElement.innerText = caseTotalPrice;



});