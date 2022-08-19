function getTextElementBalanceById(elementId) {
	const totalELement = document.getElementById(elementId);
	const totalString = totalELement.innerText;
	const currentTotalPrice = parseInt(totalString);
	return currentTotalPrice;
}

function setTextElementById (elementId,value){
  	const phoneNumberField = document.getElementById(elementId);
	 phoneNumberField.innerText = value;
}
function calculateTotal() {
	const currentPhoneTotal = getTextElementBalanceById('phone-total');
	const currentCaseTotal = getTextElementBalanceById('case-total');
	const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementById('sub-total', currentSubTotal);




  const  totalTextBalance = parseFloat((currentSubTotal * 0.1).toFixed(2));
 setTextElementById('tax-total', totalTextBalance);

 const finalTotal = currentSubTotal + totalTextBalance;
  setTextElementById('final-total', finalTotal);
}
