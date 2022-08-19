function updatePhoneNumber(isIncrease) {
	const phoneNumberField = document.getElementById('phone-number-field');
	const phoneFieldString = phoneNumberField.value;
	const previousPhoneNumber = parseInt(phoneFieldString);
	let newPhoneNumber;
	if (isIncrease) {
		newPhoneNumber = previousPhoneNumber + 1;
	} else {
		newPhoneNumber = previousPhoneNumber - 1;
	}
	phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
	const totalPrice = document.getElementById('phone-total');

	const phoneTotalPrice = newPhoneNumber * 1219;

	totalPrice.innerText = phoneTotalPrice;
}

// function getTextElementById(elementId) {
// const totalELement = document.getElementById(elementId);
// const totalString = totalELement.innerText;
// const currentTotalPrice = parseInt(totalString);
// return currentTotalPrice;


// }
// function calculateTotal () {
//   const currentPhoneTotal = getTextElementById('phone-total');
// 	const currentCaseTotal = getTextElementById('case-total');

// 	const currentSubTotal = currentPhoneTotal + currentCaseTotal;

// 	const subTotalElement = document.getElementById('sub-total');

// 	subTotalElement.innerText = currentSubTotal;  
// }
document.getElementById('phone-btn-plus').addEventListener('click', function () {
const newPhoneNumber =  updatePhoneNumber(true);

updatePhoneTotalPrice(newPhoneNumber);

calculateTotal();

})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
const newPhoneNumber = updatePhoneNumber(false);

// console.log(newPhoneNumber);
updatePhoneTotalPrice(newPhoneNumber);


calculateTotal();


})



